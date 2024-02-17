// pages/api/updateSheet.js
import { google } from 'googleapis';

export default async function handler(req, res) {
  const sheets = google.sheets({ version: 'v4', auth: "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" });

  // Spreadsheet ID and range
  const spreadsheetId = '1hfAi1XoY5PQ2T2k76n7By3fmqiTFJaPXdqgDghMkL6c';
  const range = 'Sheet1!A1:B2';

  // Data to be written
  const values = [
    ['Data1', 'Data2'],
    ['Data3', 'Data4'],
  ];

  try {
    // Call the Sheets API to update values
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      values: { values },
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error writing data to the sheet: ', error);
    res.status(500).json({ success: false, error: error.message });
  }
}
