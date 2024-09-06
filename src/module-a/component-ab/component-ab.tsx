import { useEffect } from 'react';
import { useModuleAContext } from '../module-a-context.ts';

export const ComponentAb = () => {
  console.log('Component A-B RENDER');

  useEffect(() => {
    return () => {
      console.log('Component A-B UNMOUNT');
    }
  }, []);

  const value = useModuleAContext();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#0a363e', alignItems: 'start', padding: '0.5rem' }}>
      <p>Component A-B</p>
      <p>Module A context value is <strong>{value}</strong></p>
    </div>
  );
};