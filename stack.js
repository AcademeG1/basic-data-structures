// const stack = [];

// stack.push(1);
// stack.pop();

class Stack {
    constructor() {
        this.size = 0;
        this.storage = {};
    }

    push(value) {
        this.storage[this.size] = value;
        this.size++;
    }

    pop() {
        if (this.size > 0) {
            this.size--;
            const data = this.storage[this.size];
            delete this.storage[this.size];
            return data;
        }
    }

    getLength() {
        return this.size - 1;
    }

}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.getLength());
console.log(stack.getLength());
console.log(stack.getLength());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());