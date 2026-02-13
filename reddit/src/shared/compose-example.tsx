import { compose } from "./utils/compose";

const add = (a: number) => a + 1;
const multiply = (a: number) => a * 2;

const composed = compose(add, multiply);
console.log(composed(5)); // 12



function InputExample() {
    return (
        <input 
        value={value}
        onChange={preventDefault(stopPropagation(getValue(onChange)))}
        onChange={compose(onChange , getValue , stopPropagation , preventDefault )}
         />
    );
}


function compose <U> (...fns: Function[]) {
    return <E, >(initialValue:any):U =>  
        fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}


function pipe<U>(...fns: Function[]){
    return<E, >(initialValue:any):U=>{
        return fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
    }
}

// <E, > 
// это - пустой дженерик. запятая даёт поняять, что он пустой.
// E - это тип, который он будет в последствии принимать
// ты можешт исопльзовать это, котгда ещё не знаешь, какого оно будет типа.
// либо когда надо затипить побыстрому, но при тоьм чтоьбы тйпмскрипт не ругался

compose("initialValue")("previosValue", "fn")
// когда отработает. то функиця  compose возвращает нам initialValue, который есть колбэк
// при вызове без указания, он передаст в качестве initialValue передаст reactSyntheticEvent 
// прикол в том, что всё, что написано после fns.reduceRight в той функции нужно только для того
// чтобы в initalValue пошёл в функцию справа, затем предпоследнюю, затем в предпредпоследнюю, затем в первую
// и так после того, как она отынрает в первой она пойдёт дальше эдаким "стопсигналом"
// и даст понять, что функция завершилась

 

// compose корректнее, тк код действитеоллно исполняется справа налево

function pick<K extends string> (prop: K){
    return <O extends Record<K, any>>(obj: O) => obj[prop]
}


const some = pick('value')({value: 1}); 


const comments = [
    {id: 1, text: 'comment 1'},
    {id: 2, text: 'comment 2'},
    {id: 3, text: 'comment 3'},
]

function isEqual<T>(value: T) {
    return (item: T) => item === value
}

function cond (b:boolean){
    return !b;
}

const commentsWithId = comments.map(pick('id'))

const filtredRelatedCommenst = comments.filter(({id})=> id !== 22)
const filtredUnrelatedCommenst = comments.filter(pipe(pick('id'), isEqual(22), cond))


