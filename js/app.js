
console.log("//-----------------Q1-------------------//")

let stackQ1=[];
let count=0;
let min=0;
start0=0;
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

push0(400)
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








