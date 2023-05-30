// const queue = [];

// queue.unshift(1);
// queue.unshift(2);

// queue.shift();

class Queue {
    constructor() {
        this.head = 0;
        this.tail = 0;
        this.storage = {};
    }

    getLength() {
        return this.tail - this.head;
    }

    shift() {
        if (this.head < this.tail) {
            const data = this.storage[this.head];

            delete this.storage[this.head];
            this.head++;
            return data;
        } else {
            console.log('Очередь пуста');
        }
    }

    unshift(value) {
        this.storage[this.tail] = value;
        this.tail++; // указывает на следующее пустое место
    }

}

const que = new Queue();
