import React from 'react'
import { generateId } from '/Users/edgar/Desktop/рабочий стол/Skillbox/4 React/5/homework/skillbox-4.5/reddit/src/utils/react/generateRandomIndex.tsx'

export const LIST = [
  { value: 'Content 1' },
  { value: 'Content 2' },
  { value: 'Content 3' },
  { value: 'Content 4' },
].map(generateId())



export const handleAdd = (setList: React.Dispatch<React.SetStateAction<typeof LIST>>) => () => {
  setList((prevList: typeof LIST) => prevList.concat([generateId()({ value: 'New Content' })]))
}

export const handleClick = (setList: React.Dispatch<React.SetStateAction<typeof LIST>>) => (id: string) => {
  console.log(id);
  setList((prevList: typeof LIST) => 
    prevList.some(item => item.value === id) 
      ? prevList 
      : [...prevList, generateId()({ value: id })]
  )
}