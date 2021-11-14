import { PersonState as PersonProp } from '../App';

interface Props {
    people: PersonProp[];
}

function List ( { people }: Props ) {


    const renderList = (): JSX.Element[] => {
        return people.map((person: PersonProp) => (
            <li key={person.name}>
            <div className="list-header">
                <img className="list-img" src={person.url} alt={person.name} />
            </div>
            <h2>{person.name}</h2>
            <p>{person.age} years old</p>
            {!person.note ?? <p className="list-note">{person.note}</p>}
            </li>
        ))
    }

    return <>
      {renderList()}
    </>
}

export default List
