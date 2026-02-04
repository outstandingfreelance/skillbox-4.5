import {assoc} from "../js/assoc";

// есть библтотечка nanoid. идеал для больших огромных списков, но здесь - это норм
export const generatreRandomString = () => {
    return Math.random().toString(36).substring(2, 15)
    
}

export const assignid = assoc('id', generatreRandomString());


export const generateId = (object<O extends object>) =>{
    return assoc('id', generatreRandomString());
}