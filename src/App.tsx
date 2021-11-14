import { useState } from "react";
import './App.css';
import AddToList from "./components/AddToList";
import List from "./components/List";

export interface PersonState {
  name: string;
  url: string;
  age: number;
  note?: string;
}

const players: PersonState[] = [
  {
    name: "Aidan",
    url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    age: 24,
    note: "I'm a good person"
  },
  {
    name: "Aidan",
    url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    age: 24,
    note: "I'm a good person"
  },
  {
    name: "Aidan",
    url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    age: 24,
    note: "I'm a good person"
  },
  {
    name: "Aidan",
    url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    age: 24,
    note: "I'm a good person"
  },
  {
    name: "Aidan",
    url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    age: 24,
    note: "I'm a good person"
  },
  {
    name: "Aidan",
    url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    age: 24,
    note: "I'm a good person"
  },
  {
    name: "Aidan",
    url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    age: 24,
    note: "I'm a good person"
  },
  {
    name: "Aidan",
    url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    age: 24,
    note: "I'm a good person"
  },
]

function App() {
  const [people, setPeople] = useState(players);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
