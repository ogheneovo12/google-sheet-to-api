import { GoogleSpreadsheet } from "google-spreadsheet";
import APP_CONFIG from "./_config";

const doc = new GoogleSpreadsheet(APP_CONFIG.GOOGLE_SHEET_ID);

const creds = {
  client_email: APP_CONFIG.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  private_key: APP_CONFIG.GOOGLE_PRIVATE_KEY,
};

const Gsheet = async () => {
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();

  return doc;
};


export async function initializeSheet(sheetID:string){
  const doc = new GoogleSpreadsheet(sheetID);
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  return doc;
}

export default Gsheet;
