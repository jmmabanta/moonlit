import { Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import { useGoogleLogin } from 'react-google-login';
import { generateNewToken } from './utils/generateNewToken';
import GoogleIcon from '@mui/icons-material/Google';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

/**
 * The login introduction screen to Moonlit
 * @typedef LoginProps
 * @property {function} loginUser Sets the current logged in user state.
 * @param {LoginProps} props
 * @returns A basic screen prompting user to login with Google.
 */
const Login = (props) => {
  const onSuccess = (res) => {
    const authenticate = async () => {
      let form = new FormData();
      form.set('token_id', res.tokenId);
      try {
        await axios.post(process.env.REACT_APP_API_URL, form).then((user) => {
          // Insert state here
          props.loginUser(user.data);
          console.log(user.data);
        });
      } catch (err) {
        console.error(err);
      }
    };
    authenticate();
    generateNewToken(res);
  };

  const onFailure = (res) => {
    console.log('LOGIN FAILED');
    console.log(res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    cookiePolicy: 'single_host_origin'
  });

  return (
    <Container>
      <Typography variant="h3" color={'#FFFFFF'}>
        Welcome to Moonlit!
      </Typography>
      <Typography variant="subtitle1" color={'#FFFFFF'}>
        A place to keep track of all of your stocks.
      </Typography>
      <Button onClick={signIn} size="large" variant="contained">
        <GoogleIcon sx={{ marginRight: '0.5em' }} />
        Login With Google
      </Button>
    </Container>
  );
};

export default Login;
