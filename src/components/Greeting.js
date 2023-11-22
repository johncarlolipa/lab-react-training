import React from "react";

function Greetings(props) {
  const greetings = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };

  const greetingText = greetings[props.lang] || greetings.en;

  return (
    <div className="greeting">
      <p>
        {greetingText}, {props.children}
      </p>
    </div>
  );
}

export default Greetings;
