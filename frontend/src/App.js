import Container from '@mui/material/Container';
import Header from './components/Header';
import StockPortfolio from './components/stocks/StockPortfolio';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  axiosRetry(axios, {
    retries: 999,
    retryDelay: (retryCount) => retryCount * 1000
  });

  useEffect(() => {
    axios
      .get('http://localhost:5000/')
      .then((res) => {
        console.log('CONNECTED!');
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <Header />
      <Container maxWidth="none" sx={{ paddingTop: '2em' }}>
        <StockPortfolio />
      </Container>
    </div>
  );
}

export default App;
