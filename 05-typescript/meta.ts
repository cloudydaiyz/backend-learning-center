

function createInstance<T>(type: { new(): T }): T {
    return new type();
}

class MyClass {
    constructor() {
        console.log("MyClass instantiated");
    }

    static createInstance<T>(this: new() => T ): T {
        return new this();
    }
}

const instance = createInstance(MyClass);
const instance2 = MyClass.createInstance();

import zxcvbn from 'zxcvbn';

console.log(zxcvbn("HoodRatShit2003!"))