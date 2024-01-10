import { useState } from "react";

interface ItemProps {
  name: string;
  capital: string;
  onDelete: (name: string) => void;
}

export function Item({ name, capital, onDelete }: ItemProps) {
  const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

  return (
    <li className="item">
      <div className={`country${isHighlighted ? " country--highlight" : ""}`}>
        <strong>{name}: </strong>
        {capital}
      </div>
      <button
        className="button"
        type="button"
        onClick={() => {
          setIsHighlighted((currentState) => !currentState);
        }}
      >
        Toggle highlight
      </button>
      <button
        className="button"
        type="button"
        onClick={() => {
          onDelete(name);
        }}
      >
        Remove
      </button>
    </li>
  );
}
