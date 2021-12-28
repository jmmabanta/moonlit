import { Avatar, Button, Typography } from '@mui/material';
import { useGoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const LoggedInUser = (props) => {
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
      }}
    >
      {Object.keys(props.user).length !== 0 && (
        <>
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
            src={props.user['picture'].slice(0, -6)}
            sx={{ marginLeft: '1em', height: '2.5em', width: '2.5em' }}
          />
        </>
      )}
    </div>
  );
};

export default LoggedInUser;
