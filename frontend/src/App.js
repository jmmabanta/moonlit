import Container from '@mui/material/Container';
import Header from './components/Header';
import StockPortfolio from './components/stocks/StockPortfolio';

function App() {
  return (
    <div class="App">
      <Header />
      <Container maxWidth="none" sx={{ paddingTop: '2em' }}>
        <StockPortfolio />
      </Container>
    </div>
  );
}

export default App;
