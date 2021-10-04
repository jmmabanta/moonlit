import { Grid } from '@mui/material';
import StockCard from './StockCard';

const StockPortfolio = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <StockCard
          ticker="AAPL"
          name="Apple Inc."
          currentPrice={139.14}
          priceChange={-1.39}
        />
      </Grid>
      <Grid item>
        <StockCard
          ticker="GME"
          name="GameStop Corp."
          currentPrice={171.36}
          priceChange={-5.55}
        />
      </Grid>
      <Grid item>
        <StockCard
          ticker="NKE"
          name="NIKE, Inc."
          currentPrice={147.14}
          priceChange={0.04}
        />
      </Grid>
      <Grid item>
        <StockCard
          ticker="AMZN"
          name="Amazon.com, Inc."
          currentPrice={3189.78}
          priceChange={-93.48}
        />
      </Grid>
      <Grid item>
        <StockCard
          ticker="GOOG"
          name="Alphabet Inc."
          currentPrice={2675.3}
          priceChange={9.7}
        />
      </Grid>
      <Grid item>
        <StockCard
          ticker="TSLA"
          name="Tesla, Inc."
          currentPrice={781.53}
          priceChange={6.31}
        />
      </Grid>
      <Grid item>
        <StockCard
          ticker="FB"
          name="Facebook, Inc."
          currentPrice={326.23}
          priceChange={-16.78}
        />
      </Grid>
    </Grid>
  );
};

export default StockPortfolio;
