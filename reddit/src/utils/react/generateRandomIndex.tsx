import {assoc} from "../js/assoc";

// есть библтотечка nanoid. идеал для больших огромных списков, но здесь - это норм
export const generateRandomString = () => {
    return Math.random().toString(36).substring(2, 15)
    
}

export const assignid = assoc('id', generateRandomString());


export const generateId = () => <O extends object>(object: O) => 
    ({...object, id: generateRandomString()})
 