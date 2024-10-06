interface ExampleInterface {
    name: string;
    age: number;
    height: number;
}

interface NarrowExampleInterface {
    name: string;
    age: number;
}

const example: ExampleInterface = {
    name: 'John Doe',
    age: 30,
    height: 180,
};

const narrowExample: NarrowExampleInterface = example;

console.log(narrowExample);

interface Obj {
    a: number;
}

class A {
    obj: Obj;
    constructor() {
        this.obj = {a: 1};
        console.log("A.obj.a", this.obj.a);
        new B(this.obj);
        console.log("A.obj.a new", this.obj.a);
    }
}

class B {
    obj: Obj;
    constructor(o: Obj) {
        console.log((o as Object))
        this.obj = o;
        o.a = 5;
        console.log("B.obj.a", this.obj.a);
    }
}

const a = new A();