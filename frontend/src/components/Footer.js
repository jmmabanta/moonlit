import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <div style={{ position: 'fixed', bottom: 5, color: '#aaaaaa' }}>
      <Typography variant="overline">
        © 2021 John Mabanta ·{' '}
        <a
          href="https://github.com/jmmabanta/moonlit"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#aaaaaa' }}
        >
          SOURCE CODE
        </a>
      </Typography>
    </div>
  );
};

export default Footer;
