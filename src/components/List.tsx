interface Person {
    name: string;
    url: string;
    age: number;
    note?: string;
  }

interface Props {
    people: Person[];
}

function List ( { people }: Props ) {
    return (
        <div>
            
        </div>
    )
}

export default List
