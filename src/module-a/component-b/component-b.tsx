import { useCallback, useEffect, useRef, useState } from 'react';
import { ModuleAContext } from '../module-a-context.ts';
import { ComponentBa } from '../component-ba';
import { ComponentBb } from '../component-bb';

export const ComponentB = () => {
  console.log('Component B RENDER');

  const [value, setValue] = useState('initial (Component B)');
  const countRef = useRef(0);

  const handleClick = useCallback(() => {
    countRef.current++;
    setValue(`"Component B" ${countRef.current}`);
  }, []);

  useEffect(() => {
    return () => {
      console.log('Component B UNMOUNT');
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#153e0a',
      alignItems: 'start',
      padding: '1rem',
    }}>
      <ModuleAContext.Provider value={value}>
        <div style={{ display: 'flex', padding: '0.5rem', gap: '0.5rem' }}>
          <p>Component B (nesting)</p>
          <button onClick={handleClick}>Increment</button>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <ComponentBa />
          <ComponentBb />
        </div>
      </ModuleAContext.Provider>
    </div>
  );
};