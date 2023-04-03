
console.log("//-----------------Q1-------------------//")

let stackQ1=[];
let count=0;
let min=0;
let start0=0;
function push0(element){
  stackQ1[count]=element;
  count++;
  console.log(`${element} added to ${count}`);
  if(min==0 && start0==0){
   min=element;
   start0=1;
  }else if(min> element){
   min=element;
 }
   return count -1
}

push0(100)
push0(200)
push0(300)

console.log(`${min} is the minimum element`)



console.log("//-----------------Q2-------------------//")

  function reverseQueue(queue) {
    const stack = [];
    while (queue.length > 0) {
      stack.push(queue.shift());
    }
    while (stack.length > 0) {
      queue.push(stack.pop());
    }
    return queue;
  }


  const queueQ2 = [1, 2, 3, 4, 5];
console.log(reverseQueue(queueQ2)); // [5, 4, 3, 2, 1]




console.log("//-----------------Q3-------------------//")

class StackQ3 {

  constructor(){
      this.items = [];
      this.count = 0;
  }
  
  // add element to top of the stack
  push(element) {
      this.items[this.count] = element;
      this.count++;
      console.log(`${element} added to ${this.count}`);
      return this.count -1
  }
  
  // print elements 
  print(){
    return this.items;
  }
  }
  
  const stack1 =new StackQ3();
  const stack2 =new StackQ3();
 
  stack1.push(100);
  stack1.push(200);
  stack1.push(300);
  let s1=stack1.print() 


  stack2.push(400);
  stack2.push(500);
  stack2.push(600);
  let s2=stack2.print()

// queue elements
    class QueueQ3 {
        constructor() {
            this.items = []
            this.frontIndex = 0
            this.backIndex = 0
        }
        queue(item) {
         this.items.push.apply(this.items, item)
            this.backIndex++
            return item + ' inserted'
        }

         printQueue() {
            return this.items;
        }
    }
    const queueQ3 = new QueueQ3()
  
    console.log(queueQ3.queue(s1))
    console.log(queueQ3.queue(s2))

  console.log(queueQ3.printQueue())





  console.log("//-----------------Q4-------------------//")


  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    addNode(data) {
      const new_node = new Node(data);
      if (!this.head) {
        this.head = new_node;
        this.tail = this.head;
      } else {
        this.tail.next = new_node;
        this.tail = new_node;
      }
      this.length++;
    }

    deleteMiddleNode() {
      if (this.length < 2) {
        return this.head;
      }
      const middle = Math.floor(this.length / 2);
      let prevNode = null;
      let currNode = this.head;
      for (let i = 0; i < middle; i++) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      console.log(prevNode.next );
      prevNode.next = currNode.next;
      
      this.length--;
      return this.head;
    }
  }

const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);

// Before deleting middle node


linkedList.deleteMiddleNode();
console.log(linkedList); 

console.log("//-----------------Q5-------------------//")

class ListNode1 {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

}

class LinkedList1 {
    constructor(head = null) {
        this.head = head;
    } 



      reverse(node1) {
        let prev = null;
        let current = node1;
        let next = null;
            while (current != null) {
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            node1 = prev;
            return node1;
        }
        }
let node1 = new LinkedList1(1);
let node2 = new LinkedList1(2);
let node3 = new LinkedList1(3);

node1.next = node2;
node2.next = node3;

let list = new LinkedList1(node1);

console.log(list.reverse(node1));