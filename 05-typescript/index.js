"use strict";
const example = {
    name: 'John Doe',
    age: 30,
    height: 180,
};
const narrowExample = example;
console.log(narrowExample);
class A {
    constructor() {
        this.obj = { a: 1 };
        console.log("A.obj.a", this.obj.a);
        new B(this.obj);
        console.log("A.obj.a new", this.obj.a);
    }
}
class B {
    constructor(o) {
        console.log(o);
        this.obj = o;
        o.a = 5;
        console.log("B.obj.a", this.obj.a);
    }
}
const a = new A();
