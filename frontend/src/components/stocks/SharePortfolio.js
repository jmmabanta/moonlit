import { Button, Container, Fab, Popover, Tooltip } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';
import { TickerInput as LinkDisplay } from './AddStock';

/**
 * @typedef SharePortfolioProps
 * @property {str} userID The current user's Google ID number
 * @param {SharePortfolioProps} props
 * @returns A button to get a sharable link for the user's portfolio
 */
const SharePortfolio = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = anchorEl ? 'simple-popover' : undefined;
  const sharableLink =
    process.env.REACT_APP_URL + '#/portfolio/' + props.userID;
  return (
    <>
      <Tooltip title="Share Portfolio Link">
        <Fab
          size="medium"
          color="primary"
          aria-label="share-portfolio"
          sx={{ position: 'fixed', right: 85, bottom: 20 }}
          onClick={handleOpen}
        >
          <ShareIcon />
        </Fab>
      </Tooltip>
      <Popover
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <Container
          sx={{
            backgroundColor: '#343435',
            padding: '1em 2em',
            display: 'flex',
            justifyContent: 'space-evenly'
          }}
        >
          <LinkDisplay
            id="outlined-basic"
            value={sharableLink}
            sx={{ marginRight: '1em' }}
          />
          <Button
            variant="outlined"
            onClick={() => {
              navigator.clipboard.writeText(sharableLink);
            }}
          >
            Copy URL
          </Button>
        </Container>
      </Popover>
    </>
  );
};

export default SharePortfolio;
