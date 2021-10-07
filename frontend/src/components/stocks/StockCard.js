import { Card, Typography } from '@mui/material';
import { styled } from '@mui/system';

const PriceText = styled(Typography)`
  color: ${(props) => {
    if (props.pricechange >= 0) return '#18BC9D';
    else return '#DF9DC1';
  }};
`;

/**
 * @typedef CardProps
 * @property {string} ticker The stock ticker.
 * @property {string} name The name of the company.
 * @property {float} currentPrice The current price of the stock.
 * @property {float} priceChange The change in price of the stock (+/-).
 */

/**
 * A small card that displays quick information regarding a stock.
 * @component
 * @param {CardProps} props - Contains the information to display.
 * @returns A small UI Card that shows, at a glance, the current stock price
 *          and the trend.
 */
const StockCard = (props) => {
  return (
    <Card
      sx={{
        backgroundColor: '#1D6988',
        color: 'white',
        textShadow: '1px 1px #333333',
        width: '100vw',
        maxWidth: '220px',
        padding: '1em'
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
    </Card>
  );
};

export default StockCard;
