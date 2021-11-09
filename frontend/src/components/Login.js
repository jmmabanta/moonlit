import { Container, Typography } from '@mui/material';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Login = (props) => {
  const handleSuccess = (res) => {
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
  };

  const handleFailure = (res) => {
    console.log('LOGIN FAILED');
    console.log(res);
  };

  return (
    <Container>
      <Typography variant="h3" color={'#FFFFFF'}>
        Welcome to Moonlit!
      </Typography>
      <Typography variant="subtitle1" color={'#FFFFFF'}>
        A place to keep track of all of your stocks.
      </Typography>
      <GoogleLogin
        clientId={CLIENT_ID}
        cookiePolicy={'single_host_origin'}
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        isSignedIn={true}
      />
    </Container>
  );
};

export default Login;
