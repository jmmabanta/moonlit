# moonlit

A simple website that lets you track your favourite stocks and share your portfolio with other users.

## How to Run Locally with Docker and Docker-Compose

1. Inside the repo's directory, create a `.env` file with these environment varables:

   - `FINNHUB_KEY`: Your [finnhub.io](https://finnhub.io/) API key for stock information
   - `GOOGLE_CLIENT_ID`: Your Google OAuth Client ID for user login with Google.

2. Run `docker-compose up` to build and start all containers.

3. Go to `http://localhost:3000/moonlit/` to view the website.
