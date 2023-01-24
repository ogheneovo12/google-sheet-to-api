import dotenv from "dotenv";

dotenv.config();

const APP_CONFIG = {
  GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
  GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || "",
  GOOGLE_PRIVATE_KEY:
    process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n") || "",
  GMAIL_PASS: process.env.GMAIL_PASS,
  GMAIL_USER: process.env.GMAIL_USER,
  PORT: process.env.PORT || 9000,
  SHEETS: {
    REGISTERATION: "registeration",
    FEEDBACK: "feedback",
  },
};

export default APP_CONFIG;
