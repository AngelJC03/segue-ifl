const { google } = require('googleapis');

exports.handler = async function (event, context) {
  try {
    // Parse the JSON key from environment variables
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    // Spreadsheet ID from env vars
    const spreadsheetId = process.env.SPREADSHEET_ID;
    const range = 'Sheet1!A1:D100'; // Adjust your sheet name and range

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data.values),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
