import Container from '@mui/material/Container';
import Header from './components/Header';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { useEffect, useState } from 'react';
import Body from './components/Body';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [updateProgress, setUpdateProgress] = useState(0);

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

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL)
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
      <Header updateProgress={updateProgress} />
      <Container maxWidth="none" sx={{ paddingTop: '2em' }}>
        <Body isLoggedIn={false} resetCounter={resetCounter} />
      </Container>
    </div>
  );
};

export default App;
