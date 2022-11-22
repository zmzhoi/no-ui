import { Overlay } from '@no-ui/overlay';
import { useState } from 'react';

import Layout from './Layout';

function OverlayExample() {
  const [show, setShow] = useState(false);
  return (
    <Layout>
      <button onClick={() => setShow((show) => !show)}>Show Overlay</button>
      {show && <Overlay />}
    </Layout>
  );
}

export default OverlayExample;
