import { Container, Typography } from '@mui/material';
import StockPortfolio from './stocks/StockPortfolio';

const Body = (props) => {
  if (!props.isLoggedIn) {
    return (
      <Container>
        <Typography variant="h3" color={'#FFFFFF'}>
          Welcome to Moonlit!
        </Typography>
        <Typography variant="subtitle1" color={'#FFFFFF'}>
          A place to keep track of all of your stocks.
        </Typography>
      </Container>
    );
  }

  return <StockPortfolio resetCounter={props.resetCounter} />;
};

export default Body;
