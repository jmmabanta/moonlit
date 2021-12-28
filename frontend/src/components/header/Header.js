import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LoggedInUser from './LoggedInUser';
import Logo from './Logo';
import OtherUser from './OtherUser';

/**
 * The App Bar at the top of the page.
 * @typedef HeaderProps
 * @property {int} updateProgress An integer (0-100) that indcates
 *    how filled the update progress circle is.
 * @property {Object} user The current logged in user.
 * @property {str} portfolioID Another user's portfolio
 * @property {function} loginUser Sets the current logged in user state.
 * @param {HeaderProps} props Includes the progress until next update.
 * @returns The header at the top of the page.
 */
const Header = (props) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#37425B',
        padding: '0.25em'
      }}
    >
      <Toolbar>
        <Logo updateProgress={props.updateProgress} />
        <OtherUser otherUserID={props.portfolioID} />
        <LoggedInUser user={props.user} loginUser={props.loginUser} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
