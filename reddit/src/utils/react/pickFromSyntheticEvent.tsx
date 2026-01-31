import type React from 'react';

//                  СамКомпонент, пропыКомпонента, чилдрены
function pickFromSyntheticEvent() {
    return (key) => (fn) => (e) => {
        fn(e.currentTarget[key]);
    };
}
function pickSyntheticEvent() {
    return (function (key) {
        return function (fn) {
            return function (e) {
                fn(e.currentTarget[key]);
            };
        };
    });
}
function Input(props: { onChange: (value) => void; value; }) {
}
function UnstandardLink(props) {
    return (
        <a onClick={preventAll(props.onClick)}>Hello</a>
    );
}
function preventDefault(fn) {
    return (e) => {
        e.preventDefault();
        fn(e);
    };
}
function stopPropagation(fn) {
    return (e) => {
        e.stopPropagation();
        fn(e);
    };
}
function preventAll(fn1) {
    // const functionPreventDefault = preventDefault(fn1);
    // const functionStopPropagation = stopPropagation(functionPreventDefault)
    // return functionStopPropagation;
    return (stopPropagation(preventDefault(fn1)));


}
interface inputProps {
    onChange: (value: Function) => void;
    value: string;
}
function someFunction(props: inputProps) {
}
export default App;
// цнивкрсальная функция обэртка чтобы склеивать две функции. для композиций
function composeTwo(fn1, fn2) {
    return function (arg) {
        return fn2(fn1(arg));
    };
}
const twoAreComposed = composeTwo(addWhiskey, addSoda);
twoAreComposed(arg); //вот здесь мы вводим агрумент, который пойдёт в arg, который в той функции. 

//при чём, вводим уже при вызове функции. там вложенная функция, поэтому иначе было бы не достучаться
const finalPrice = composeTwo(addTax, applyDiscount);
console.log(finalPrice(100)); // 110

