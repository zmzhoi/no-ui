export type SIZE = 'lg' | 'md' | 'sm';

const SIZES: {
  [key in SIZE]: string;
} = {
  lg: '50px',
  md: '35px',
  sm: '20px',
};

export default SIZES;
