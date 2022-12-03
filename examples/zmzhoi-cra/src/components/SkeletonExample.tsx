import { Skeleton, SkeletonCircle } from '@no-ui/skeleton';
import { CSSProperties, useState } from 'react';

import Layout from './Layout';

function SkeletonExample() {
  const [isLoading, setIsLoading] = useState(false);

  const wrapperStyle: CSSProperties = {
    margin: '5rem',
    minWidth: '800px',
    minHeight: '500px',
    border: '2px solid black',
    padding: '1rem',
  };

  return (
    <Layout>
      <div style={wrapperStyle}>
        {
          isLoading ? (
            <>
              <Skeleton height={26} />
              <hr />
              <Skeleton height={26} radius={0} animate="none" extraStyle={{ marginTop: '2rem' }} />
              <hr />
              <Skeleton height={40} animate="flicker" duration={0.5} />
              <hr />
              <Skeleton height={40} animate="wave" duration={1} />
              <hr />
              <SkeletonCircle size={20} />
              <SkeletonCircle size={20} animate="wave" />
              <SkeletonCircle size={30} animate="wave" />
              <SkeletonCircle size={40} animate="wave" />
              <SkeletonCircle size={80} inline />
              <SkeletonCircle size={80} inline animate="wave" />
              <SkeletonCircle size={80} inline animate="flicker" />
              <SkeletonCircle size={80} inline animate="none" />
              <SkeletonCircle size={100} extraStyle={{ marginLeft: '10rem' }} />
            </>
          ) : (
            <Div>I am content!</Div>
          ) //
        }
      </div>
      <button onClick={() => setIsLoading((l) => !l)}>Toggle</button>
    </Layout>
  );
}

function Div({ children }: { children: string }) {
  return (
    <div
      style={{
        border: '1px solid black',
      }}
    >
      {children}
    </div>
  );
}

export default SkeletonExample;
