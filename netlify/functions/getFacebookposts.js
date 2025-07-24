exports.handler = async function(event, context) {
  const fetch = (await import('node-fetch')).default; // dynamic import for node-fetch ESM

  const PAGE_ID = process.env.FB_PAGE_ID; // set in your Netlify environment variables
  const ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN; // your Page Access Token, also in env vars

  const url = `https://graph.facebook.com/v19.0/${PAGE_ID}/posts?fields=message,created_time,attachments&access_token=${ACCESS_TOKEN}`;

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
        'Access-Control-Allow-Origin': '*', 
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
//
//
//
//
//to get new facebook long_live access token, use this for reference: 
//GO TO https://developers.facebook.com/
//GO TO MY APPS
//GO TO SEGUEAPI
//USE THIS LINK TO GET LONG-LIVED ACCESS TOKEN:
//
//https://graph.facebook.com/v18.0/oauth/access_token?grant_type=fb_exchange_token&client_id={YOUR_APP_ID}&client_secret={YOUR_APP_SECRET}&fb_exchange_token={YOUR_SHORT_LIVED_USER_TOKEN}
//