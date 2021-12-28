import { CircularProgress, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Logo = (props) => {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
      <div>
        <Typography
          variant="h3"
          sx={{ margin: 0 }}
          onClick={() => {
            navigate('/');
            window.location.reload();
          }}
        >
          Moonlit
        </Typography>
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
