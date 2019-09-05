import React from 'react';
import FontAwesome from 'react-fontawesome';

export default ({ loading, children, size }) => {
  return loading ? (
    <div className="w-auto my-auto text-center p-4 mx-auto">
      <FontAwesome name="spinner" spin size={size} />
    </div>
  ) : (
    children
  );
};
