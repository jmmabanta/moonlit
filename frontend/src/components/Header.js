import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: '#37425B', padding: '0.25em' }}
    >
      <Toolbar>
        <div style={{ flexDirection: 'column' }}>
          <Typography variant="h3" sx={{ margin: 0 }}>
            Moonlit
          </Typography>
          <Typography variant="subtitle1" sx={{ margin: 0, color: '#FFD700' }}>
            To the moon, To the stars...
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
