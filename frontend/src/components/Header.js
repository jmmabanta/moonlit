import { CircularProgress } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { GoogleLogout } from 'react-google-login';

/**
 * The App Bar at the top of the page.
 * @typedef HeaderProps
 * @property {int} updateProgress An integer (0-100) that indcates
 *    how filled the update progress circle is.
 * @property {boolean} isLoggedIn Determines whether or not to display the
 *    logout button.
 * @property {function} loginUser Sets the current logged in user state.
 * @param {HeaderProps} props Includes the progress until next update.
 * @returns The header at the top of the page.
 */
const Header = (props) => {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: '#37425B', padding: '0.25em' }}
    >
      <Toolbar>
        <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
          <div>
            <Typography variant="h3" sx={{ margin: 0 }}>
              Moonlit
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ margin: 0, color: '#FFD700' }}
            >
              To the moon, To the stars...
            </Typography>
          </div>
          <CircularProgress
            variant="determinate"
            value={props.updateProgress}
            sx={{ marginTop: 'auto', marginBottom: 'auto' }}
          />
        </div>
        {props.isLoggedIn && (
          <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            onLogoutSuccess={(res) => {
              props.loginUser({});
              window.location.reload();
            }}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
