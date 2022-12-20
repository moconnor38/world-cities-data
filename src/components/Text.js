import React from 'react';

const Text = (props) => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const numberOfParagraphs = props.numberOfParagraphs;
  const data = [];
  
  for (let index = 1; index <= numberOfParagraphs; index++) {
    data.push({id: index, text: text});
  }

  const paragraphs = data.map((line) => {
    return (
      <p key={line.id}>
        {line.text}
      </p>
    );
  });

  return <div>{paragraphs}</div>;
};

Text.defaultProps = {
  numberOfParagraphs: 1
};

export default Text;
