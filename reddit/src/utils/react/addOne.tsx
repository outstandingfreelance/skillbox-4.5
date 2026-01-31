import { Component } from "react";

const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide;
const addOne = add(1);



function addEventListenerWithDispose(element, listener, action) {
    element.addEventListener(listener, action);
    return function () {
        element.removeEventListener();
    }
}

const dispose = addEventListenerWithDispose(window, 'resize', () => {
    console.log('resize');
    dispose()
});


