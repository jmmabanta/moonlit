import Login from './Login';
import StockPortfolio from './stocks/StockPortfolio';

const Body = (props) => {
  if (!props.isLoggedIn) {
    return <Login loginUser={props.loginUser} />;
  }
  return <StockPortfolio resetCounter={props.resetCounter} />;
};

export default Body;
