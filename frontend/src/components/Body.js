import Login from './Login';
import StockPortfolio from './stocks/StockPortfolio';

/**
 * The main body of the web app.
 * @typedef BodyProps
 * @property {function} loginUser Sets the current logged in user state.
 * @property {Object} user The current logged in user.
 * @property {boolean} isLoggedIn Either show user's portfolio or login screen.
 * @property {function} resetCounter Resets the circular update timer.
 * @property {str} portfolioID Another user's portfolio
 * @param {BodyProps} props
 * @returns The main body of the web app.
 */
const Body = (props) => {
  if (!props.isLoggedIn && !props.portfolioID) {
    return <Login loginUser={props.loginUser} />;
  }
  return (
    <StockPortfolio
      user={props.user}
      resetCounter={props.resetCounter}
      portfolioID={props.portfolioID}
    />
  );
};

export default Body;
