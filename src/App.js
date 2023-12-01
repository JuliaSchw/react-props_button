import React from "react";
import "./styles.css";

function Button({ color, isDisabled, text }) {
  const buttonStyle = {
    backgroundColor: color.backgroundColor,
  };

  return (
    <div>
      <button type="button" style={buttonStyle} disabled={isDisabled}>
        {text}
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Button
        color={{ backgroundColor: "#FF0000" }}
        isDisabled={true}
        text="Don't click me"
      />
      <Button
        color={{ backgroundColor: "#00A36C" }}
        isDisabled={false}
        text="Click me"
      />
    </div>
  );
}
