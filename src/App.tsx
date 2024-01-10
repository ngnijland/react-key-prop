import { useState, useRef } from "react";

import { Item } from "./Item";

import "./App.css";

const defaultCountries = [
  { name: "Argentina", capital: "Buenos Aires" },
  { name: "Belgium", capital: "Brussels" },
  { name: "The Netherlands", capital: "Amsterdam" },
  { name: "Brazil", capital: "Brasília" },
  { name: "Vietnam", capital: "Hanoi" },
];

function App() {
  const formRef = useRef<HTMLFormElement>(null);
  const focusRef = useRef<HTMLInputElement>(null);
  const [countries, setCountries] =
    useState<{ name: string; capital: string }[]>(defaultCountries);

  return (
    <div className="center">
      <h1>Countries</h1>
      <ul>
        {countries.map((country, index) => (
          <Item
            key={index}
            name={country.name}
            capital={country.capital}
            onDelete={(name) => {
              setCountries((currentState) =>
                currentState.filter(
                  (currentCountry) => currentCountry.name !== name
                )
              );
            }}
          />
        ))}
      </ul>
      <form
        ref={formRef}
        onSubmit={(event) => {
          event.preventDefault();

          if (!formRef.current) {
            return;
          }

          const data = new FormData(formRef.current);

          const name = data.get("country");
          const capital = data.get("capital");

          if (typeof name !== "string" || typeof capital !== "string") {
            return;
          }

          setCountries((prev) => [...prev, { name, capital }]);

          formRef.current.reset();
          focusRef.current?.focus();
        }}
      >
        <input
          ref={focusRef}
          id="country"
          name="country"
          type="text"
          placeholder="Country"
        />
        <input id="capital" name="capital" type="text" placeholder="Capital" />
        <button className="button">Add</button>
      </form>
    </div>
  );
}

export default App;
