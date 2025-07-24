const { google } = require('googleapis');

exports.handler = async function (event, context) {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Check for required env vars
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY || !process.env.SPREADSHEET_ID) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Missing environment variables' }),
    };
  }

  let credentials;
  try {
    credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Invalid GOOGLE_SERVICE_ACCOUNT_KEY JSON' }),
    };
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    const spreadsheetId = process.env.SPREADSHEET_ID;
    const range = 'Sheet1!A1:E100'; // Modify as needed

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response.data.values),
    };
  } catch (error) {
    console.error('Google Sheets API error:', error); // helpful in Netlify Dev terminal
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
