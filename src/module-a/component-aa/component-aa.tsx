import { useEffect } from 'react';

export const ComponentAa = () => {
  console.log('Component A-A RENDER');

  useEffect(() => {
    return () => {
      console.log('Component A-A UNMOUNT');
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#3b3e0a', alignItems: 'start', padding: '0.5rem' }}>
      <p>Component A-A</p>
    </div>
  );
};