import { Skeleton, SkeletonCircle } from '@no-ui/skeleton';
import { useState } from 'react';

import Layout from './Layout';

function SkeletonExample() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Layout>
      <div
        style={{
          margin: '5rem',
          minWidth: '800px',
          minHeight: '500px',
          border: '2px solid black',
          padding: '1rem',
        }}
      >
        {
          isLoading ? (
            <>
              <Skeleton width={300} height={26} radius={0} animate={false} />
              <div style={{ margin: '1rem' }} />
              <Skeleton width={300} height={26} radius={0} animate="wave" />
              <div style={{ margin: '1rem' }} />
              <Skeleton width={300} height={26} radius={0} />
              <div style={{ margin: '1rem' }} />
              <Skeleton height={50} radius={3} color="red" />
              <div style={{ margin: '1rem' }} />
              <Skeleton height={50} radius={3} color="pink" animate="wave" />
              <div style={{ margin: '1rem' }} />
              <SkeletonCircle animate={false} />
              <div style={{ margin: '1rem' }} />
              <SkeletonCircle inline />
              <SkeletonCircle animate="wave" inline />
              <div style={{ margin: '1rem' }} />
              <SkeletonCircle size={120} animate="wave" color={'blue'} />
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
