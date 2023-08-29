import { JWTAuthLib, AuthInitProps } from "jwt-auth-lib";
import { IUser, User } from "../schema/UserSchema";
import { ILoginPayLoad, IRegisterPayLoad } from "../dtos/auth.dto";
import Joi from "joi";
import argon from "argon2";
import APP_CONFIG from "src/_config";
import { HydratedDocument } from "mongoose";


const validationSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const jwtConfig = {
  refreshTokenSecret: APP_CONFIG.refreshTokenSecret,
  accessTokenSecret: APP_CONFIG.accessTokenSecret,
  expiresIn: {
    refresh: "1d",
    access: "1m",
  },
  issuer: "api.mydomain.xyz",
  audience: "mydomain.xyz",
};

const mapUserToJwtPayload = (user: HydratedDocument<IUser>) => ({
  sub: user.id,
  email: user.email,
});

const authInitProps: AuthInitProps = {
  jwtConfig,
  redisUrl: APP_CONFIG.redisUrl,
  mapUserToJwtPayload,
};

const authLib = new JWTAuthLib(authInitProps);

//Register Validation Functions
authLib.useLoginValidate(async (body: ILoginPayLoad, done) => {
  try {
    const user = await User.findOne({ email: body.email });
    if (!user) return done(null, "Password/Email Mismatch");
    //verify password
    if (await argon.verify(user.password_key, body.password)) {
      done(user, null);
    } else {
      done(null, "Password/Email Mismatch");
    }
  } catch (err) {
    done(null, err);
  }
});

authLib.useRegisterValidate(async (body: IRegisterPayLoad, done) => {
  // Your custom registration validation logic here
  const { error, value } = validationSchema.validate(body);
  if (error) {
    return done(null, error);
  }
  //save user to db
  const hashedPassword = await argon.hash((value as IRegisterPayLoad)?.password);
  const newUser: HydratedDocument<IUser> = new User({
    ...value,
    password_key: hashedPassword,
  });

  try {
    await newUser.save();
    done(newUser, null);
  } catch (err) {
    done(null, err);
  }
});

authLib.useJwtValidate(
  async ({ sub }: { sub: string; email: string }, done) => {
    //find user
    try {
      const user = await User.findById(sub);
      if (!user) return done(null, "Bad Credentials");
      return done(user, null);
    } catch (err) {
      done(null, err);
    }
  }
);


export default authLib;