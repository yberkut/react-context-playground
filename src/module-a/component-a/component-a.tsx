import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { ModuleAContext } from '../module-a-context.ts';

export const ComponentA = ({ children }: { children?: ReactNode }) => {
  console.log('Component A RENDER');
  const [value, setValue] = useState('initial (Component A)');
  const countRef = useRef(0);

  const handleClick = useCallback(() => {
    countRef.current++;
    setValue(`"Component A" ${countRef.current}`);
  }, []);

  useEffect(() => {
    return () => {
      console.log('Component A UNMOUNT');
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#3e0a34',
      alignItems: 'start',
      padding: '1rem',
    }}>
      <ModuleAContext.Provider value={value}>
        <div style={{ display: 'flex', padding: '0.5rem', gap: '0.5rem' }}>
          <p>Component A (composition)</p>
          <button onClick={handleClick}>Increment</button>
        </div>
        <div style={{ marginLeft: '20px' }}>
          {children}
        </div>
      </ModuleAContext.Provider>
    </div>
  );
};