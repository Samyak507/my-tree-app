import React from 'react';
import TreeNode, { TreeNodeProps } from './TreeNode';

interface TreeProps {
  nodes: TreeNodeProps[];
  onNodeClick: (value: number) => void;
}

const Tree: React.FC<TreeProps> = ({ nodes, onNodeClick }) => {
  const renderTreeNodes = (treeNodes: TreeNodeProps[]) => {
    return treeNodes.map((node, index) => (
      <TreeNode key={index} {...node} onClick={onNodeClick} />
    ));
  };

  return <div>{renderTreeNodes(nodes)}</div>;
};

export default Tree;
