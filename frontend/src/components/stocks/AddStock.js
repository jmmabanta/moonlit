import { useState } from 'react';
import {
  Container,
  Fab,
  Popover,
  Tooltip,
  TextField,
  outlinedInputClasses,
  inputLabelClasses,
  Button,
  Snackbar,
  Alert,
  AlertTitle
} from '@mui/material';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import getApiRoute from '../utils/getApiRoute';

// From: https://stackoverflow.com/questions/58963242/change-border-color-on-material-ui-textfield
export const TickerInput = styled(TextField)({
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

/**
 * Lets the user add stocks to their portfolio.
 * @typedef AddStockProps
 * @property {Object} user The current logged in user.
 * @param {AddStockProps} props
 * @returns A button on the bottom right to let user add stocks.
 */
const AddStock = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [newTicker, setNewTicker] = useState('');
  const [fetchingStock, setFetchingStock] = useState(false);

  const [openAlert, setOpenAlert] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTicker = (e) => {
    setNewTicker(e.target.value);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const submitTicker = async () => {
    setFetchingStock(true);
    const newStock = {
      ticker: newTicker,
      user_id: props.user['sub']
    };
    await axios.post(getApiRoute('add'), newStock).then((res) => {
      if (typeof res.data !== 'string') {
        props.newTicker(res.data);
        setSuccess(true);
      } else {
        setSuccess(false);
      }
      setFetchingStock(false);
    });

    setOpenAlert(true);
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
            padding: '1em 2em',
            display: 'flex',
            justifyContent: 'space-evenly'
          }}
        >
          <TickerInput
            id="outlined-basic"
            label="Enter Stock Ticker"
            variant="outlined"
            value={newTicker}
            disabled={fetchingStock}
            onChange={handleTicker}
            sx={{ marginRight: '1em' }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                submitTicker();
              }
            }}
          />
          <Button
            variant="outlined"
            disabled={fetchingStock}
            onClick={submitTicker}
          >
            Add Stock
          </Button>
        </Container>
      </Popover>
      <Snackbar
        open={openAlert}
        onClose={handleCloseAlert}
        autoHideDuration={5000}
      >
        {success ? (
          <Alert onClose={handleCloseAlert} severity="success">
            <AlertTitle>SUCCESS!!!</AlertTitle>
            Stock was successfully added!
          </Alert>
        ) : (
          <Alert onClose={handleCloseAlert} severity="error">
            <AlertTitle>ERROR!!!</AlertTitle>
            Stock was NOT FOUND!
          </Alert>
        )}
      </Snackbar>
    </>
  );
};

export default AddStock;
