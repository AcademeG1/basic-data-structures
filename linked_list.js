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

    push (value) { // добавление в конец
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

    prepend (value) { // добавление в head
        const node = new LinkedListNode(value, this.head);
        
        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }

        return this;
    }

    find (value) {

        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while(currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.nextLink;
        }

        return null;
    }

    delete (value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        while(this.head && this.head.value === value) {
            deletedNode = this.head;

            this.head = this.head.nextLink;
        }

        let currentNode = this.head;

        if (currentNode != null) {
            while (currentNode.nextLink) {
                if (currentNode.nextLink.value === value) {
                    deletedNode = currentNode.nextLink;
                    currentNode.nextLink = currentNode.nextLink.nextLink;
                } else {
                    currentNode = currentNode.nextLink;
                }
            }
        }

        if (this.tail.value === value) {
            this.tail = currentNode;
        }

        return this;
    }

    insertAfter (value, prevNode) {
        if (prevNode === null) {
            return this;
        }

        const node = new LinkedListNode(value);
        node.nextLink = prevNode.nextLink;
        prevNode.nextLink = node;
        
        if (node.nextLink === null) {
            this.tail = node;
        }

        return this;
    }
}

const list = new LinkedList();
console.log(list.push(2))
console.log(list.push(3))
console.log(list.push(4))