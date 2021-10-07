import { CircularProgress } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

/**
 * The App Bar at the top of the page.
 * @typedef HeaderProps
 * @property {int} updateProgress An integer (0-100) that indcates
 *                                how filled the update progress circle is.
 * @param {HeaderProps} props Includes the progress until next update.
 * @returns The header at the top of the page.
 */
const Header = (props) => {
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
        <CircularProgress variant="determinate" value={props.updateProgress} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
