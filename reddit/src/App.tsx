import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import { DynamicList } from '../DynamicList.tsx'
import { generateId, generateRandomString } from './utils/react/generateRandomIndex.tsx'


import { LIST, handleAdd, handleClick } from '../handleClick.ts'

export default function App() {
  const [list, setList] = React.useState(LIST);

  return (
    <>

      <DynamicList list={list} onItemClick={handleClick(setList)} onAdd={handleAdd(setList)} />
    </>
  )
}
