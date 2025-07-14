import dotenv from "dotenv";
import { cleanEnv, str } from "envalid";

dotenv.config();

export const ENV = cleanEnv(process.env, {
  OKX_API_KEY: str(),
  OKX_API_SECRET: str(),
  OKX_PASSPHRASE: str(),
  OKX_PROJECT_ID: str(),
});
