import { useEffect } from 'react';
import './App.css';
import { ModuleAContainer } from './module-a';

function App() {
  console.log('App RENDER');

  useEffect(() => {
    return () => {
      console.log('App UNMOUNT');
    }
  }, []);

  return (
    <>
      <h1>App</h1>
      <ModuleAContainer/>
    </>
  );
}

export default App;
