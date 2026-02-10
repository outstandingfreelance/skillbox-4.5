import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import { generateId, generateRandomString } from './utils/react/generateRandomIndex.tsx'
// import { Header } from '/Users/edgar/Desktop/рабочий стол/Skillbox/4 React/5/homework/skillbox-4.5/reddit/src/components/Header/Header.tsx'
// import { LIST, handleAdd } from '../handleClick.ts'
import { merge } from './utils/js/merge';
import { GenericList } from './shared/components/GenericList/GenericList';
import { Dropdown } from './shared/components/Dropdown/Dropdown'


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
      <button onClick={() => handleAdd(setList)}>Click me</button>
      <GenericList onClick={(id: string)=>handleClick(id)} someShitHere={list}/>
      <Dropdown onOpen={() => console.log('closed')} onClose={() => console.log("opened ")} isOpenManuallySetValue={true} button={<button>Dropdown</button>}>
        <ul>
          <li>1</li>
          <li onClick={() => console.log('2')}>2</li>
        </ul>
      </Dropdown>
      <p>
        If you see this text, the app is not broken
      </p>
    </>
  )
}
