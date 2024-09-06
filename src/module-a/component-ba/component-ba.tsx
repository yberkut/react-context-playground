import { useEffect } from 'react';

export const ComponentBa = () => {
  console.log('Component B-A RENDER');

  useEffect(() => {
    return () => {
      console.log('Component B-A UNMOUNT');
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#3b3e0a', alignItems: 'start', padding: '0.5rem' }}>
      <p>Component B-A</p>
    </div>
  );
};