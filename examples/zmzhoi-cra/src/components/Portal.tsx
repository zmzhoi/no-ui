import { Portal } from '@no-ui/portal';

import Layout from '@/components/Layout';

function PortalExample() {
  /**
   * Remove code below
   */
  return (
    <Layout>
      <Portal visible={true}>
        <h1>This is a portal</h1>
      </Portal>
    </Layout>
  );
}

export default PortalExample;
