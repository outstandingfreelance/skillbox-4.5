





// хардкодим индексы
// это мы щас имитируем, как реакт это всё будет редерить/просчитывать


interface IDynamicListProps {
    list: {id: string, value: string}[];
}

export const DynamicList: React.FC<IDynamicListProps> = ({ list }) => {
    return (
        <>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.value}, comp. no {item.id}</li>
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


