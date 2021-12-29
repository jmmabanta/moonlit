import { Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import StockCard from './StockCard';
import AddStock from './AddStock';
import getApiRoute from '../utils/getApiRoute';
import SharePortfolio from './SharePortfolio';

/**
 * The 'main screen' that displays all of the user's stocks.
 * @typedef PortfolioProps
 * @property {Object} user The current logged in user.
 * @property {str} portfolioID Used to view another user's portfolio
 * @property {Function} resetCounter Reset the progress once stocks update
 *    and restart animation.
 * @param {PortfolioProps} props
 * @returns A grid of stock cards, which display the user's stock portfolio.
 */
const StockPortfolio = (props) => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  const newTicker = (newStocks) => {
    setStockData(newStocks);
    updateStockData();
  };

  const updateStockData = () => {
    let userID = new FormData();
    userID.set('user_id', props.portfolioID || props.user['sub']);
    axios
      .post(getApiRoute('update'), userID)
      .then((res) => {
        setStockData(res.data);
        if (res.data.length > 0) props.resetCounter();
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const removeStock = (id) => {
    const remove = {
      ticker: stockData[id]['ticker'],
      user_id: props.user['sub']
    };
    setStockData((old) => {
      old.splice(id, 1);
      return old;
    });
    axios.post(getApiRoute('remove'), remove).catch((err) => {
      console.error(err);
    });
  };

  useEffect(() => {
    updateStockData();
    setInterval(updateStockData, process.env.REACT_APP_API_UPDATE);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <Container sx={{ color: '#FFFFFF', textAlign: 'center' }}>
        <Typography variant="h5">Loading stocks...</Typography>
      </Container>
    );
  }

  return (
    <Grid container spacing={2} justifyContent="center">
      {stockData.map((stock, idx) => {
        return (
          <Grid item key={idx}>
            <StockCard
              id={idx}
              ticker={stock['ticker']}
              name={stock['name']}
              currentPrice={stock['price']}
              priceChange={stock['change']}
              removeStock={removeStock}
              shared={props.portfolioID}
            />
          </Grid>
        );
      })}
      {stockData.length === 0 && (
        <Container sx={{ color: '#aaaaaa' }}>
          <Typography variant="h4">Nothing here!</Typography>
          {!props.portfolioID && (
            <Typography variant="overline">
              Try adding some stocks using the button in the bottom right!
            </Typography>
          )}
        </Container>
      )}
      {!props.portfolioID && (
        <>
          <SharePortfolio userID={props.user['sub']} />
          <AddStock user={props.user} newTicker={newTicker} />
        </>
      )}
    </Grid>
  );
};

export default StockPortfolio;
