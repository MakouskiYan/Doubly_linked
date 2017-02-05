const Node = require('./node');

class LinkedList {

    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node();
        node.data = data;

        if (this.isEmpty()) {
            this._head = node;
            this._tail = node;
            this.length++;
        } else if (this.length === 1) {
            this._head.next = node;
            node.prev = this._head;
            this._tail = node;
            this.length++;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
            this.length++;
        }
        return this;
    }

    head() {
        if (this._head) {
            return this._head.data;
        }
        return null;
    }

    tail() {
        if (this._tail) {
            return this._tail.data;
        }

        return null;
    }

    at(index) {
        if (index < 0 || index > (this.length - 1)) {
            return null;
        }
        if (index === 0) {
            return this.head();
        }
        /*protect double return the first element if list has 1 elem*/
        else if (index === (this.length - 1) && this.length !== 1) {
            return this.tail();
        } else {
            var currentNode = this._head;
            while (index !== 0) {
                currentNode = currentNode.next;
                index--;
            }
            return currentNode.data;
        }


    }

    insertAt(index, data) {
        var currentNode = this._head;
        var beforeNode;
        var node = new Node();
        node.data = data;
        if (index === 0) {
            node.next = this._head;
            this._head.prev = node;
            this._head = node;
            this.length++;
        } else {
            while (index != 0) {
                currentNode = currentNode.next;
                index--;
            }
            beforeNode = currentNode.prev;
            node.next = currentNode;
            currentNode.prev = node;
            beforeNode.next = node;
            node.prev = beforeNode;
            this.length++;
        }
        return this;

    }

    isEmpty() {
        return !this._head;
    }

    clear() {
        var currentNode = this._head;
        while (this.length !== 0) {
            currentNode.prev = null;
            currentNode.data = null;
            currentNode = currentNode.next;
            this.length--;
        }
        return this;

    }

    deleteAt(index) {
        var currentNode = this._head;

        if (index === 0 && this.length > 1) {
            this._head = this._head.next;
            this.head.prev = null;
        } else if (index === 0 && this.length === 1) {
            this._tail.data = null;
            this._head.data = null;
            this._head.next = null;
            this._tail.prev = null;
        } else {
            while (index != 0) {
                currentNode = currentNode.next;
                index--;
            }
            var beforeNode = currentNode.prev;
            var nextNode = currentNode.next;
            beforeNode.next = nextNode;
            nextNode.prev = beforeNode;
            currentNode = null;
        }
        this.length--;

        return this;

    }

    reverse() {
        /*
         var currentNode = this._tail;
         var data=currentNode.data;
         if (this.isEmpty()) {
         return;
         }
         var length=this.length;
         for(var i = 1; i<length;i++){
         this.append(data);
         console.log(currentNode.data);
         currentNode = currentNode.prev;
         console.log(currentNode.data);
         }
         for(var i = 0; i<length;i++){
         this.deleteAt(0);
         }*/

        var currentNode = this._head;
        while (currentNode) {
            var nextN = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = nextN;
            currentNode = nextN;
        }

        var a = this._tail;
        this._tail = this._head;
        this._tail.prev = this._head.next;
        this._tail.next = this._head.prev;
        this._head = a;
        this._head.prev = a.next;
        this._head.next = a.prev;

        return this;
    }

    indexOf(data) {
        var currentNode = this._head;
        for (var index = 0; index < this.length; index++) {
            if (currentNode.data === data) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }
}
//[Circular] is good, it's mean that everything is linked;
module.exports = LinkedList;
