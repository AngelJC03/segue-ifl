const fetch = require('node-fetch'); // if not available, install node-fetch

exports.handler = async function(event, context) {
  const PAGE_ID = process.env.FB_PAGE_ID; // set in your Netlify environment variables
  const ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN; // your Page Access Token, also in env vars

  const url = `https://graph.facebook.com/v19.0/${PAGE_ID}/posts?fields=message,created_time,attachments&limit=3&access_token=${ACCESS_TOKEN}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `Facebook API error: ${response.statusText}` }),
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins or restrict as needed
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
