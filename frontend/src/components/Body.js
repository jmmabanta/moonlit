import { useParams } from 'react-router-dom';
import Login from './Login';
import StockPortfolio from './stocks/StockPortfolio';

/**
 * The main body of the web app.
 * @typedef BodyProps
 * @property {function} loginUser Sets the current logged in user state.
 * @property {Object} user The current logged in user.
 * @property {boolean} isLoggedIn Either show user's portfolio or login screen.
 * @property {function} resetCounter Resets the circular update timer.
 * @param {BodyProps} props
 * @returns The main body of the web app.
 */
const Body = (props) => {
  const params = useParams();
  console.log(params);
  if (!props.isLoggedIn) {
    return <Login loginUser={props.loginUser} />;
  }
  return <StockPortfolio user={props.user} resetCounter={props.resetCounter} />;
};

export default Body;
