import { ComponentA } from './component-a';
import { ComponentB } from './component-b';
import { ComponentAa } from './component-aa';
import { ComponentAb } from './component-ab';

export const ModuleAContainer = () => {
  return (
    <div style={{ backgroundColor: '#393838', padding: '2rem' }}>
      <p>Module A Container</p>
      <ComponentA>
        <ComponentAa/>
        <ComponentAb/>
      </ComponentA>
      <ComponentB/>
    </div>
  );
};