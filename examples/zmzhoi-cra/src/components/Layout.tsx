import { CSSProperties } from 'react';

interface Props {
  customStyle?: React.CSSProperties;
  children: React.ReactNode;
}

function Layout({ customStyle = {}, children }: Props) {
  const style: CSSProperties = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flex: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    // backgroundColor: '#2d2d2d',
    backgroundColor: 'white',
    fontWeight: 100,
  };

  return <div style={Object.assign({}, style, customStyle)}>{children}</div>;
}

export default Layout;
