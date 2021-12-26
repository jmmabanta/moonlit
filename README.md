# moonlit

A simple website that lets you track your favourite stocks

## How to Run Locally

1. Inside the repo's directory: `moonlit/`, create a `.env` file with these environment varables:

   - `DATABASE_URL`: The URL of the PostgreSQL database
     - Right now, there are no db migrations (haven't gotten around to learning it yet :/) so ensure that the db has two tabes: `stocks` and `users`.
     - Refer to `moonlit/backend/moonlit_api/models.py` for how these tables are setup.
   - `FINNHUB_KEY`: Your [finnhub.io](https://finnhub.io/) API key for stock information
   - `GOOGLE_CLIENT_ID`: Your Google OAuth Client ID for user login with Google.

2. Next, inside `moonlit/frontend/`, create a `.env.development.local` file with these environment variables:

   - `REACT_APP_URL = http://localhost:3000/moonlit/`
   - `REACT_APP_API_URL = http://localhost:5000/`
   - `REACT_APP_API_UPDATE = 45000`: The time (in ms) between refreshing stock information (Default = 45000ms = 45 seconds)
   - `REACT_APP_GOOGLE_CLIENT_ID`: Same Google Client ID as before

3. Finally, go back to the repo's directory: `moonlit/`, and simply run: `docker compose up` to spin-up both frontend and backend containers.

4. Go to `http://localhost:5000/` to view the website.
