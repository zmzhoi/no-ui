import { CSSProperties } from 'react';

interface Props {
  color: string;
}

function Arrow({ color }: Props) {
  const getStyle = (color: string): CSSProperties => {
    return {
      position: 'absolute',
      left: '50%',
      bottom: '-3px',
      borderColor: color,
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      borderWidth: '4px',
      borderStyle: 'solid',
      marginLeft: '-4px',
      transform: 'rotate(135deg)',
    };
  };

  return <div style={getStyle(color)}></div>;
}

export default Arrow;
