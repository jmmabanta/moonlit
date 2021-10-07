import { Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import StockCard from './StockCard';

const StockPortfolio = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateStockData = () => {
    axios
      .get(process.env.REACT_APP_API_URL + '/update')
      .then((res) => {
        console.log(res.data);
        setStockData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    updateStockData();
    setInterval(updateStockData, 45000);
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
