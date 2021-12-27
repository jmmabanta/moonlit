import { CircularProgress, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
      <div>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <Typography variant="h3" sx={{ margin: 0 }}>
            Moonlit
          </Typography>
        </Link>
        <Typography variant="subtitle1" sx={{ margin: 0, color: '#FFD700' }}>
          To the moon, To the stars...
        </Typography>
      </div>
      <CircularProgress
        variant="determinate"
        value={props.updateProgress}
        sx={{ marginTop: 'auto', marginBottom: 'auto' }}
      />
    </div>
  );
};

export default Logo;
