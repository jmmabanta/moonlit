# moonlit

A simple website that lets you track your favourite stocks

## How to Run Locally

1. Inside the repo's directory: `moonlit/`, create a `.env` file with these environment varables:

   - `FINNHUB_KEY`: Your [finnhub.io](https://finnhub.io/) API key for stock information
   - `GOOGLE_CLIENT_ID`: Your Google OAuth Client ID for user login with Google.

2. Next, inside `moonlit/frontend/`, create a `.env.development.local` file with these environment variables:

   - `REACT_APP_URL = http://localhost:3000/moonlit/`
     - Used for generating a sharable portfolio link
   - `REACT_APP_API_URL = http://localhost:5000/`
   - `REACT_APP_API_UPDATE = 45000`
     - The time (in ms) between refreshing stock information (Default = 45000ms = 45 seconds)
   - `REACT_APP_GOOGLE_CLIENT_ID`
     - Same Google Client ID as before

3. Finally, go back to the repo's directory: `moonlit/`, and simply run: `docker compose up` to spin-up both frontend and backend containers.

4. Go to `http://localhost:3000/moonlit` to view the website.
