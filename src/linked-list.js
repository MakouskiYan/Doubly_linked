const Node = require('./node');
var x;
x = new Node(5);
var list;
list = new LinkedList();
class LinkedList {
    constructor(){
        this.length=0;
        this.head=null;
        this.tail=null;
    }

    append(data) {
        if (!this.head){
            this.head=data;
            this.tail=data;
            this.length++;
        }else if(this.length==1){
            this.head.next=data;
            data.prev=this.head;
            this.tail=data;
            this.length++;
        }else{
            this.tail.next=data;
            data.prev=this.tail;
            this.tail=data;
            this.length++;
        }

    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        if(index < 0 || index > (this.length-1){
            return null;
        }
        if (index===0){
            return this.head();
        }
        /*protect double return the first element if list has 1 elem*/
        else if (index===(this.length-1) && this.length!=1){
            return this.tail();
        }

    }

    insertAt(index, data) {
        var currentNode=this.head;

        if (index===0){
            this.head.prev=data;
            this.head=data;
            data.prev=null;
            this.length++;
        }
        if (index==(this.length-1) && this.length!=1){
            this.tail.next=data;
            data.prev=this.tail;
            this.tail=data;
            this.length++;
        }else{
            while(index!=0){
                currentNode=currentNode.next;
                index--;
            }
            var beforeNode = currentNode.prev;
            data.next=currentNode;
            beforeNode.next=data;
            currentNode.prev=data;
            data.prev=beforeNode;
            this.length++;
        }

    }

    isEmpty() {
        if(!this.head){
            return true;
        }else{
            return false;
        }
    }

    clear() {
        var currentNode=this.head;
        while((this.length)!=0){
            currentNode=null;
            currentNode=currentNode.next;
            this.length--;
        }
        return this.length;
    }

    deleteAt(index) {
        var currentNode = this.head;
        while(index!=0){
            currentNode=currentNode.next;
            index--;
        }
        var beforeNode=currentNode.prev;
        var nextNode=currentNode.next;
        beforeNode.next=nextNode;
        nextNode.prev=beforeNode;
        currentNode=null;
        this.length--

    }

    reverse() {
        var times=this.length;
        while(times!=0){

        }
    }

    indexOf(data) {
        var currentNode=this.head;
        var index=0;
        while (currentNode.data!=data && index<(this.length){
            currentNode=currentNode.next;
            index++;
        }
        if(currentNode===null){
            return -1;
        }else{
            return currentNode;
        }
    }
}

module.exports = LinkedList;
