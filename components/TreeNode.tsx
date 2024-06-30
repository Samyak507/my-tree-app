import React, { useState } from 'react';

interface TreeNodeProps {
  value: number;
  children?: TreeNodeProps[];
  onClick: (value: number) => void;
}

const TreeNode: React.FC<TreeNodeProps> = ({ value, children = [], onClick }) => {
  const [editMode, setEditMode] = useState(false);
  const [nodeValue, setNodeValue] = useState(value.toString());

  const handleNodeClick = () => {
    onClick(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNodeValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClick(parseInt(nodeValue, 10));
      setEditMode(false);
    }
  };

  const handleDoubleClick = () => {
    setEditMode(true);
  };

  return (
    <div>
      <div onDoubleClick={handleDoubleClick}>
        {editMode ? (
          <input
            type="number"
            value={nodeValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            autoFocus
            onBlur={() => setEditMode(false)}
          />
        ) : (
          <span onClick={handleNodeClick}>{value}</span>
        )}
      </div>
      {children.length > 0 && (
        <div style={{ marginLeft: '20px' }}>
          {children.map((child, index) => (
            <TreeNode key={index} {...child} onClick={onClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
