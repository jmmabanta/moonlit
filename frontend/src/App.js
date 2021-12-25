import Container from '@mui/material/Container';
import Header from './components/Header';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { useEffect, useState } from 'react';
import Body from './components/Body';
import { Typography } from '@mui/material';
import getApiRoute from './components/utils/getApiRoute';
import { Route, Routes } from 'react-router-dom';
import URLParamTest from './URLParamTest';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [updateProgress, setUpdateProgress] = useState(0);

  const [user, setUser] = useState({});

  axiosRetry(axios, {
    retries: 999,
    retryDelay: (retryCount) => retryCount * 1000
  });

  const updateCounter = () => {
    setUpdateProgress((current) => (current < 100 ? (current += 5) : current));
  };

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

  useEffect(() => {
    axios
      .get(getApiRoute())
      .then((res) => {
        console.log('CONNECTED!');
        console.log(res.data);
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
        isLoggedIn={!user || Object.keys(user).length !== 0}
        loginUser={loginUser}
      />
      <Container maxWidth="none" sx={{ paddingTop: '2em' }}>
        <Routes>
          <Route
            path="/"
            element={
              <Body
                isLoggedIn={!user || Object.keys(user).length !== 0}
                loginUser={loginUser}
                user={user}
                resetCounter={resetCounter}
              />
            }
          />
          <Route path="/portfolio/:id" element={<URLParamTest />} />
        </Routes>
        <div style={{ position: 'fixed', bottom: 5, color: '#aaaaaa' }}>
          <Typography variant="overline">
            © 2021 John Mabanta ·{' '}
            <a
              href="https://github.com/jmmabanta/moonlit"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#aaaaaa' }}
            >
              SOURCE CODE
            </a>
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default App;
