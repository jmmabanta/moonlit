import { Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import StockCard from './StockCard';
import AddStock from './AddStock';

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

  const newTicker = (newStocks) => {
    setStockData(newStocks);
    updateStockData();
  };

  const updateStockData = () => {
    let user_id = new FormData();
    user_id.set('user_id', props.user['sub']);
    axios
      .post(process.env.REACT_APP_API_URL + '/update', user_id)
      .then((res) => {
        console.log(res.data);
        setStockData(res.data);
        if (res.data.length > 0) props.resetCounter();
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const removeStock = (id) => {
    const removeForm = new FormData();
    removeForm.set('user_id', props.user['sub']);
    removeForm.set('ticker', stockData[id]['ticker']);

    setStockData((old) => {
      old.splice(id, 1);
      return old;
    });

    axios.post(process.env.REACT_APP_API_URL + '/remove', removeForm);
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
            />
          </Grid>
        );
      })}
      {stockData.length === 0 && (
        <Container sx={{ color: '#aaaaaa' }}>
          <Typography variant="h4">Nothing here!</Typography>
          <Typography variant="overline">
            Try adding some stocks using the button in the bottom right!
          </Typography>
        </Container>
      )}
      <AddStock user={props.user} newTicker={newTicker} />
    </Grid>
  );
};

export default StockPortfolio;
