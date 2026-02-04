import { generateRandomString } from "./src/utils/react/generateRandomIndex.tsx";



// хардкодим индексы
// это мы щас имитируем, как реакт это всё будет редерить/просчитывать


interface IDynamicListProps {
    list: {id: string, value: string}[];
    onItemClick: (id: string) => void;
    onAdd: () => void;
}



export const DynamicList: React.FC<IDynamicListProps> = ({ list, onItemClick, onAdd }) => {
    return (
        <>
        <button 
        onClick={onAdd}
        >
            Add element
        </button>
            <ul>
                {list.map((item)=>(
                    <li onClick={() => onItemClick(item.id)} key={item.id}>{item.value} | component id: {item.id}</li>
                ))}
            </ul>
        </>
    )
}



const prevJsx = [
    <li key={0}>Content 0</li>,
    <li key={1}>Content 0</li>,
    <li key={2}>Content 0</li>,
    <li key={3}>Content 0</li>,
    {/* удалили  */ }
]

const currentJsx = [
    <li key={0}>Content 0</li>,
    <li key={1}>Content 0</li>,
    {/* удалили  */ }
]
// реакт не понял, что мы удалили третий
// короче, ключи должны обяхательно быть уникальными 


