import React from 'react';

const Validation = (prop) => {
  let innerText = "Text too short."
  if(prop.textLength > 5) innerText = "Text long enough.";
  return <p>{innerText}</p>
};

export default Validation