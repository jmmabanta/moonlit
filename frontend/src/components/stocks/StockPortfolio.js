import { Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import StockCard from './StockCard';

/**
 * The 'main screen' that displays all of the user's stocks.
 * @typedef PortfolioProps
 * @property {Object} user The current logged in user.
 * @property {Function} resetCounter Reset the progress once stocks update
 *    and restart animation.
 * @param {PortfolioProps} props
 * @returns A grid of stock cards, which display the user's stock portfolio.
 */
const StockPortfolio = (props) => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateStockData = () => {
    let user_id = new FormData();
    user_id.set('user_id', props.user['sub']);
    axios
      .post(process.env.REACT_APP_API_URL + '/update', user_id)
      .then((res) => {
        console.log(res.data);
        setStockData(res.data);
        props.resetCounter();
        setLoading(false);
      })
      .catch((err) => {
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
              ticker={stock['ticker']}
              name={stock['name']}
              currentPrice={stock['price']}
              priceChange={stock['change']}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default StockPortfolio;
