import React, { useState } from 'react';
import Tree from '../components/Tree';
import axios from 'axios';

const IndexPage: React.FC = () => {
  const [treeNodes, setTreeNodes] = useState<TreeNode[]>(/* initial tree data */);

  const handleSave = async () => {
    try {
      const username = 'user123'; // Replace with actual username logic
      await axios.post(`http://localhost:3001/tree/${username}/save`, { nodes: treeNodes });
      console.log('Tree saved successfully!');
      // Optionally, you can show a success message or update state upon successful save
    } catch (error) {
      console.error('Error saving tree:', error);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <div>
      <h1>Tree Component</h1>
      <Tree nodes={treeNodes} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default IndexPage;
