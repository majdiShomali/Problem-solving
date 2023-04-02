



console.log("//-----------------Q1-------------------//")

class Stack {

  constructor(){
      this.items = [];
      this.count = 0;
      this.min=0;
      this.start0=0;
  }
  
  // add element to top of the stack
  push(element) {
      this.items[this.count] = element;
      this.count++;
      console.log(`${element} added to ${this.count}`);
     if(this.min==0 && this.start0==0){
      this.min=element;
      this.start0=1;
     }else if(this.min> element){
      this.min=element;
    }
      return this.count -1
  }
  
  // print minimum element in stack
  printMin(){
    return `${this.min} is the minimum element`;
  }
  
  }
  
  const stack =new Stack();
  stack.push(300);
  stack.push(200);
  stack.push(100);
  stack.push(400);
  console.log(stack.printMin());


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








  
  
