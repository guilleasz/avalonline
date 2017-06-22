import React from 'react';

export default function mainpage(props) {
  const {children} = props;
  return (
    <div>
      <h1>THIS IS THE NAVBAR</h1>
      {children}
    </div>
  );
}
