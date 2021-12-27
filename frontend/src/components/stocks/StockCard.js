import { Card, Fab, Typography } from '@mui/material';
import { styled } from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';

const PriceText = styled(Typography)`
  color: ${(props) => {
    if (props.pricechange >= 0) return '#18BC9D';
    else return '#DF9DC1';
  }};
`;

/**
 * A small card that displays quick information regarding a stock.
 * @typedef CardProps
 * @property {int} id The stock's id number (used for removal).
 * @property {string} ticker The stock ticker.
 * @property {string} name The name of the company.
 * @property {float} currentPrice The current price of the stock.
 * @property {float} priceChange The change in price of the stock (+/-).
 * @property {function} removeStock Function to remove stock from portfolio.
 * @property {boolean} shared Disables the remove stock button when viewing
 *    shared portfolio
 * @param {CardProps} props - Contains the information to display.
 * @returns A small UI Card that shows, at a glance, the current stock price
 *    and the trend.
 */
const StockCard = (props) => {
  const remove = () => {
    props.removeStock(props.id);
  };

  return (
    <Card
      sx={{
        backgroundColor: '#1D6988',
        color: 'white',
        textShadow: '1px 1px #333333',
        width: '100vw',
        maxWidth: '220px',
        padding: '1em',
        position: 'relative'
      }}
    >
      <Typography variant="h4">{props.ticker}</Typography>
      <Typography variant="caption">{props.name}</Typography>
      <PriceText variant="h6" pricechange={props.priceChange}>
        ${props.currentPrice.toFixed(2) || 0.0} (
        {props.priceChange > 0
          ? '+$' + props.priceChange.toFixed(2)
          : '-$' + (props.priceChange * -1).toFixed(2)}
        )
      </PriceText>
      {!props.shared && (
        <Fab
          size="small"
          color="secondary"
          aria-label="remove-stock"
          sx={{ position: 'absolute', top: 10, right: 10 }}
          onClick={remove}
        >
          <RemoveIcon />
        </Fab>
      )}
    </Card>
  );
};

export default StockCard;
