import { Avatar, Button, CircularProgress } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useGoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

/**
 * The App Bar at the top of the page.
 * @typedef HeaderProps
 * @property {int} updateProgress An integer (0-100) that indcates
 *    how filled the update progress circle is.
 * @property {Object} user The current logged in user.
 * @property {function} loginUser Sets the current logged in user state.
 * @param {HeaderProps} props Includes the progress until next update.
 * @returns The header at the top of the page.
 */
const Header = (props) => {
  const onLogoutSuccess = (res) => {
    props.loginUser({});
    window.location.reload();
  };

  const onFailure = () => {
    console.error('LOGOUT FAILED!!!');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure
  });

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
        {(!props.user || Object.keys(props.user).length !== 0) && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end'
              }}
            >
              <Typography variant="overline" sx={{ margin: 0 }}>
                Hello, {props.user['name'] || ''}
              </Typography>
              <Button size="small" sx={{ margin: 0 }} onClick={signOut}>
                LOGOUT
              </Button>
            </div>
            <Avatar
              src={props.user['picture'].substring(
                0,
                props.user['picture'].length - 6
              )}
              sx={{ marginLeft: '1em', height: '2.5em', width: '2.5em' }}
            />
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
