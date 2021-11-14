import { useState } from 'react';
import { PersonState as PersonProp } from '../App';

interface Props {
    people: PersonProp[];
    setPeople: React.Dispatch<React.SetStateAction<PersonProp[]>>
}

const AddToList = ({ people, setPeople }: Props) => {

    //input state (name, url, age, note)
    const [person, setPerson] = useState({
        name: '',
        url: '',
        age: '',
        note: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = event.target;
        setPerson({ ...person, [name]: value });
    };

    //handleClick
    const handleClick = (): void => {
        setPeople([...people, 
        {
            name: person.name,
            url: person.url,
            age: parseInt(person.age),
            note: person.note
        }]);
    };

    return (
        <div className="AddToList">
            //input Element
            <input type="text" placeholder="Name" className="AddToList-input" value={person.name} name="name" onChange={handleChange} />
            <input type="text" placeholder="Age" className="AddToList-input" value={person.age} name="age" onChange={handleChange} />
            <input type="text" placeholder="URL" className="AddToList-input" value={person.url} name="url" onChange={handleChange} />
            <textarea placeholder="note" className="AddToList-input" value={person.note} name="note" onChange={handleChange} />
            <button className="AddToList-btn" onClick={handleClick}>
                Add to list
            </button>
            
        </div>
    )
}

export default AddToList
