export function merge<O extends object>(obj1: O){
    return function <K extends object>(obj2: K){
        return {...obj1, ...obj2}
    }
}


