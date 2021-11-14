import { useState } from "react";
import './App.css';
import List from "./components/List";

interface PersonState {
  name: string;
  url: string;
  age: number;
  note?: string;
}

const people: PersonState[] = [
  {
    name: "Aidan",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    age: 24,
    note: "I'm a good person"
  },
  {
    name: "Aidan",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    age: 24,
    note: "I'm a good person"
  },
  {
    name: "Aidan",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    age: 24,
    note: "I'm a good person"
  },
  {
    name: "Aidan",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    age: 24,
    note: "I'm a good person"
  },
  {
    name: "Aidan",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    age: 24,
    note: "I'm a good person"
  },
  {
    name: "Aidan",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    age: 24,
    note: "I'm a good person"
  },
  {
    name: "Aidan",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    age: 24,
    note: "I'm a good person"
  },
  {
    name: "Aidan",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    age: 24,
    note: "I'm a good person"
  },

function App() {
  const [people, setPeople] = useState<PersonState[]>([]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
