import React from "react";
import { useState } from "react";
import { PickerMulti, PickerOption, PickerSingle } from ".";
import { useAsyncData } from "../../../hooks/useAsyncData";
import { Surface } from "../../Surface/Surface";

interface Fruit {
  title: string;
}
export const fruits: Fruit[] = [
  {
    title: "Apple",
  },
  {
    title: "Bananna",
  },
  {
    title: "Kiwi",
  },
  {
    title: "Watermelon",
  },
  {
    title: "Grapes",
  },
  {
    title: "Tangerine",
  },
  {
    title: "Lemon",
  },
  {
    title: "Lime",
  },
  {
    title: "Cranberry",
  },
  {
    title: "Strawberry",
  },
  {
    title: "Raspberry",
  },
  {
    title: "Cherry",
  },
  {
    title: "Blueberry",
  },
  {
    title: "Orange",
  },
].sort((a, b) => (a.title < b.title ? -1 : 1));

export default {
  title: "Forms & Inputs/Picker",
  argTypes: {
    children: {
      control: false,
    },
  },
};

let options: PickerOption[] = fruits.map((fruit, index) => ({
  label: fruit.title,
  value: index + fruit.title.toLowerCase(),
}));

export const SingleWithStaticOptions = () => {
  let [fruit, setFruit] = useState("1bananna");
  return (
    <Surface style={{ maxWidth: "400px" }}>
      <p>
        If you have a static array of options you can use the Single value picker in a similar
        fashion to a <code>select</code>.
      </p>
      <PickerSingle initialValue={fruit} options={options} onChange={setFruit} />
      <h2 className="mt-4">Fruit ID: {fruit}</h2>
    </Surface>
  );
};

export const SingleCreatableWithStaticOptions = () => {
  let [fruit, setFruit] = useState("");
  return (
    <Surface style={{ maxWidth: "400px" }}>
      <p>
        You can pass a <code>creatable</code> flag as a prop to allow users to enter their own
        values.
      </p>
      <PickerSingle options={options} creatable onChange={setFruit} />
      <h2 className="mt-4">Fruit ID: {fruit}</h2>
    </Surface>
  );
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchAllFruitOptions = async () => {
  await wait(1000);
  return options;
};

export const SingleWithPreLoadOptions = () => {
  let [fruit, setFruit] = useState("");
  let { data, error, isLoading } = useAsyncData(fetchAllFruitOptions, [], []);

  return (
    <Surface style={{ maxWidth: "400px" }}>
      <p>The picker options are preloaded via useAsyncData. Refresh the page to see it refetch.</p>
      <p>
        Use this technique if you can pull back all the options at once and let the Picker filter
        clientside.
      </p>
      <PickerSingle
        options={data}
        initialValue={fruit}
        onChange={setFruit}
        selectProps={{ isLoading }}
      />
      <h2 className="mt-4">Fruit: {fruit}</h2>
    </Surface>
  );
};

const searchRickAndMorty = async (query: string) => {
  if (!query || query.length < 3) {
    return [];
  }
  let url = `https://rickandmortyapi.com/api/character/?name=${query}`;

  let data = await fetch(url).then((resp) => resp.json());
  console.log("🚀 | searchRickAndMorty | data", data);
  let options = (data?.results || []).map((character) => ({
    label: `${character.name} - ${character.species}`,
    value: character.id + "",
    character,
  }));

  return options.sort((a, b) => a.label.localeCompare(b.label));
};

export const SingleDynamicOptions = () => {
  let [character, setCharacter] = useState(null);
  return (
    <Surface style={{ maxWidth: "400px" }}>
      <p>
        Sometimes there are too many options to preload them all and you need to re-fetch options
        based on what the user has typed.
      </p>
      <p>Start typing below and it will query the server for options as you type.</p>
      <PickerSingle
        options={searchRickAndMorty}
        onChange={(value, option) => setCharacter(option?.character)}
        selectProps={{
          placeholder: "Rick and Morty Characters...",
          isClearable: true,
        }}
      />
      <pre>{JSON.stringify(character, null, 2)}</pre>
    </Surface>
  );
};

export const MultiWithStaticOptions = () => {
  let [chosen, setChosen] = useState(["1bananna"]);
  return (
    <Surface style={{ maxWidth: "400px" }}>
      <p>
        If you have a static array of options you can use the Single value picker in a similar
        fashion to a <code>select</code>.
      </p>
      <PickerMulti
        initialValue={chosen}
        options={options}
        onChange={(chosenOptions) => setChosen(chosenOptions.map((o) => o.value))}
      />
      <h2 className="mt-4">Fruit IDs: </h2>
      <ul>
        {chosen.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </Surface>
  );
};

export const MultiDynamicOptions = () => {
  let [characters, setCharacters] = useState<PickerOption[]>([
    {
      label: "Alien Rick",
      value: "15",
      character: { name: "Alient Rick", id: 15, species: "Alien" },
    },
  ]);
  console.log("🚀 | MultiDynamicOptions | characters", characters);
  return (
    <Surface style={{ maxWidth: "400px" }}>
      <p>
        Sometimes there are too many options to preload them all and you need to re-fetch options
        based on what the user has typed.
      </p>
      <p>Start typing below and it will query the server for options as you type.</p>
      <PickerMulti
        options={searchRickAndMorty}
        onChange={(options) => setCharacters(options.map((o) => o.character))}
        selectProps={{
          placeholder: "Rick and Morty Characters...",
          isClearable: true,
        }}
        initialValue={characters}
      />
      <pre>{JSON.stringify(characters, null, 2)}</pre>
    </Surface>
  );
};

export const SingleWithOnChangeCounter = () => {
  let [fruit, setFruit] = useState("1bananna");
  let [count, setCount] = useState(0);
  const onChange = (value: string, option: PickerOption) => {
    console.log("onChange", value, option);
    setCount((prev) => prev + 1);
    setFruit(value);
  };
  return (
    <Surface style={{ maxWidth: "400px" }}>
      <p>
        Even though this has a default value, the change counter should be at 0 when the component
        is first rendered. It should only increment with user interaction.
      </p>
      <PickerSingle initialValue={fruit} options={options} onChange={onChange} />
      <h2 className="mt-4">Fruit ID: {fruit}</h2>
      <h2>Change Count: {count}</h2>
    </Surface>
  );
};
