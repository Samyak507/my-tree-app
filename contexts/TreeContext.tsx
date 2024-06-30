// src/contexts/TreeContext.tsx

import React, { createContext, useState, FC, ReactNode } from 'react';

interface TreeNodeProps {
  value: number;
  children: TreeNodeProps[];
}

interface TreeContextProps {
  tree: TreeNodeProps;
  setTree: (tree: TreeNodeProps) => void;
}

export const TreeContext = createContext<TreeContextProps | undefined>(undefined);

interface TreeProviderProps {
  children: ReactNode;
}

export const TreeProvider: FC<TreeProviderProps> = ({ children }) => {
  const [tree, setTree] = useState<TreeNodeProps>({
    value: 1,
    children: []
  });

  return (
    <TreeContext.Provider value={{ tree, setTree }}>
      {children}
    </TreeContext.Provider>
  );
};
