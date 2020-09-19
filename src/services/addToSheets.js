import { GoogleSpreadsheet } from "google-spreadsheet";

import {
  SPREADSHEET_ID,
  CLIENT_EMAIL,
  PRIVATE_KEY,
  SHEET_ID,
} from "../utils/constants";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export const appendSpreadsheet = async (row) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    // loads document properties and worksheets
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID];
    const result = await sheet.addRow(row);
    console.log(result);
  } catch (e) {
    console.error("Error: ", e);
    throw e.response;
  }
};
