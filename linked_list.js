class LinkedListNode {
    constructor(value, nextLink = null) {
        this.value = value;
        this.nextLink = nextLink;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(value) { // добавление в конец
        const node = new LinkedListNode(value);

        if (!this.head || !this.tail) {
            this.head = node;
            this.tail = node;

            return this;
        }
    
        this.tail.nextLink = node;
        this.tail = node;

        return this;
    }

    prepend(value) { // добавление в head
        const node = new LinkedListNode(value, this.head);
        
        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }

        return this;
    }
}

const list = new LinkedList();
console.log(list.push(2))
console.log(list.push(3))
console.log(list.push(4))