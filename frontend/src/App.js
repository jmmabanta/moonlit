import Container from '@mui/material/Container';
import Header from './components/header/Header';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { useEffect, useState } from 'react';
import Body from './components/Body';
import getApiRoute from './components/utils/getApiRoute';
import { useParams } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [updateProgress, setUpdateProgress] = useState(0);
  const [user, setUser] = useState({});

  // Wake Heroku API
  axiosRetry(axios, {
    retries: 999,
    retryDelay: (retryCount) => retryCount * 1000
  });

  const updateCounter = () => {
    setUpdateProgress((current) => (current < 100 ? (current += 5) : current));
  };

  // Manage the circular progress bar to next stock info update
  let progressAnim = null;
  const resetCounter = () => {
    if (progressAnim !== null) {
      clearInterval(progressAnim);
      progressAnim = null;
    }
    setUpdateProgress(10);
    progressAnim = setInterval(
      updateCounter,
      process.env.REACT_APP_API_UPDATE / 20
    );
  };

  const loginUser = (user) => {
    setUser(user);
  };

  // Display loading message while waking/connecting to API
  useEffect(() => {
    axios
      .get(getApiRoute())
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <Header
        updateProgress={updateProgress}
        user={user}
        portfolioID={params.id}
        isLoggedIn={!user || Object.keys(user).length !== 0}
        loginUser={loginUser}
      />
      <Container maxWidth="none" sx={{ paddingTop: '2em' }}>
        <Body
          isLoggedIn={!user || Object.keys(user).length !== 0}
          loginUser={loginUser}
          user={user}
          resetCounter={resetCounter}
          portfolioID={params.id}
        />
        <Footer />
      </Container>
    </div>
  );
};

export default App;
