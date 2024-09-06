import { createContext, useContext } from 'react';

export type ModuleAContextValue = string;

export const ModuleAContext = createContext<ModuleAContextValue>('default');

export const useModuleAContext = () => useContext(ModuleAContext);