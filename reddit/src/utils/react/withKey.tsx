import type React from 'react';

// короче, функция срабатывает и отмняет измененияя и при том сохранят текущий "стейт" последних изменений
// 
// 
const withIdKey = withKey(key, "id");
const withIndexKey = withKey();
function Feed(props: { blocks: IBlockProps[]; }) {
    return (
        <>
            {props.blocks.map((block: IBlockProps) => <>
                <Block key={block.id} />
                <div>
                    {props.blocks.map(withIdKey(block))}
                </div>
            </>
            )}
        </>
    );
}
function withKey(key?: string) {
    return <E, T extends React.ComponentType<E>>(component: T) => (props: E, index: number) => React.createElement(
        component,
        { ...props, key: key ? props[key as keyof E] : index },
        []
    );
}
interface IBlockProps {
    // props:string;
    id: string;
    title: string;
}
function Block(props: IBlockProps) {
    return (
        <div>{props.title}</div>
    );
}
<Block title="123" />;
// 
{ React.createElement(Block, { title: "123" }, []); }
