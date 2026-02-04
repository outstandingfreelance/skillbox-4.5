export function merge<O extends object>(obj: O){
    return function <K extends object>(obj2: K){
        return {...obj, ...obj2}
    }
}