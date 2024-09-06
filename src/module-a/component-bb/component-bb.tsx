import { useEffect } from 'react';
import { useModuleAContext } from '../module-a-context.ts';

export const ComponentBb = () => {
  console.log('Component B-B RENDER');

  useEffect(() => {
    return () => {
      console.log('Component B-B UNMOUNT');
    }
  }, []);

  const value = useModuleAContext();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#0a363e', alignItems: 'start', padding: '0.5rem' }}>
      <p>Component B-B</p>
      <p>Module A context value is <strong>{value}</strong></p>
    </div>
  );
};