import dotenv from "dotenv";

dotenv.config();

const APP_CONFIG = {
  GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
  GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || "",
  GOOGLE_PRIVATE_KEY:
    process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n") || "",
  GMAIL_PASS: process.env.GMAIL_PASS,
  GMAIL_USER: process.env.GMAIL_USER,
  PORT: process.env.PORT || 5000,
  SHEETS: {
    REGISTERATION: "registeration",
    FEEDBACK: "feedback",
  },
  refreshTokenSecret: process?.env.REFRESH_TOKEN_SECRET || "myXRefsecret",
  accessTokenSecret: process?.env.ACCESS_TOKEN_SECRET || "myXsecret",
  redisUrl: "redis://localhost:6379",
  databaseUrl: process.env.DATABASE_URL || "",
};

export default APP_CONFIG;
