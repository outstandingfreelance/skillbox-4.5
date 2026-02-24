
import { useState } from 'react'
import React from 'react'
import './App.css'
import { generateRandomString } from './utils/react/generateRandomIndex.tsx'
// import { Header } from '/Users/edgar/Desktop/рабочий стол/Skillbox/4 React/5/homework/skillbox-4.5/reddit/src/components/Header/Header.tsx'
// import { LIST, handleAdd } from '../handleClick.ts'
import { Dropdown } from './shared/components/Dropdown/Dropdown'
import { Text } from './shared/components/Text/Text';
import { EColors } from './shared/components/Text/Text';
import { Break } from 'src/shared/Break/Break';
import { Icon } from './shared/components/Icon/Icon';

type TOurListChildrenProps = {
  id: string;
  text: string;
  onClick: (id: string) => void;
}

export default function App() {
  const LIST: TOurListChildrenProps[] = [
    {
      text: "Here"
    },
    {
      text: "We"
    },
    {
      text: "Go"
    },
    {
      text: "Hello"
    },
    {
      text: "World"
    }
  ].map((item) => ({ ...item, id: generateRandomString(), onClick: (id: string) => handleClick({ id, text: item.text }) }));

  const [list, setList] = useState(LIST);

  const handleAdd = (setList: React.Dispatch<React.SetStateAction<TOurListChildrenProps[]>>) => {
    setList((prev) => [...prev, { id: generateRandomString(), text: generateRandomString() }]);
  };

  function handleClick(id: TOurListChildrenProps['id']) {
    setList((prev: TOurListChildrenProps[]) => prev.filter((item) => item.id !== id));
  }


  return (
    <>
      {/* <Header /> */}
      {/* <GenericList onClick={(id: string)=>handleClick(id)} PList={list} text="Hello"/>*/}



      <Dropdown onOpen={() => console.log('closed')} onClose={() => console.log("opened ")} isOpenManuallySetValue={false} postId="1234">
      </Dropdown>

      <Text As="h1" size={28} tabletSize={20} bold color={EColors.orange}>Hello</Text>
      <Break size={4}  inline />
      <Text size={20} tabletSize={16} desktopSize={28} color={EColors.black}>Hello</Text>
      <Break size={4} inline />
      <Text size={16} tabletSize={12} color={EColors.black}>Hello</Text>
      <Icon name="vite" size={24} />
      <p>
        If you see this text, the app is not broken
      </p>
    </>
  )
}
