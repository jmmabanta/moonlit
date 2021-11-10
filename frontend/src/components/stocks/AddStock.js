import { useState } from 'react';
import {
  Container,
  Fab,
  Popover,
  Tooltip,
  TextField,
  outlinedInputClasses,
  inputLabelClasses,
  Button
} from '@mui/material';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

const TickerInput = styled(TextField)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: 'white'
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: 'white'
    },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: 'white'
    },
  [`& .${outlinedInputClasses.input}`]: {
    color: 'white'
  },
  [`&:hover .${outlinedInputClasses.input}`]: {
    color: 'white'
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]:
    {
      color: 'white'
    },
  [`& .${inputLabelClasses.outlined}`]: {
    color: 'white'
  },
  [`&:hover .${inputLabelClasses.outlined}`]: {
    color: 'white'
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: 'white'
  }
});

const AddStock = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [newTicker, setNewTicker] = useState('');

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTicker = (e) => {
    setNewTicker(e.target.value);
  };

  const submitTicker = async () => {
    let ticker = new FormData();
    ticker.set('ticker', newTicker);

    await axios.post(process.env.REACT_APP_API_URL + '/add', ticker);

    setNewTicker('');
  };

  const open = Boolean(anchorEl);
  const id = anchorEl ? 'simple-popover' : undefined;
  return (
    <>
      <Tooltip title="Add Stock">
        <Fab
          size="medium"
          color="primary"
          aria-label="add-stock"
          sx={{ position: 'fixed', right: 20, bottom: 20 }}
          onClick={handleOpen}
        >
          <AddIcon />
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
            color: 'white',
            padding: '1em 2em',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <TickerInput
              id="outlined-basic"
              label="Enter Stock Ticker"
              variant="outlined"
              value={newTicker}
              onChange={handleTicker}
              sx={{ marginRight: '1em' }}
            />
            <Button variant="outlined" onClick={submitTicker}>
              Add Stock
            </Button>
          </div>
        </Container>
      </Popover>
    </>
  );
};

export default AddStock;