
    // class Stack {

    //     constructor(){
    //         this.items = [];
    //         this.count = 0;
    //     }
        
    //     // add element to top of the stack
    //     push(element) {
    //         this.items[this.count] = element;
    //         this.count++;
    //         console.log(`${element} added to ${this.count}`);
    //         return this.count -1
    //     }
        
    //     // return and remove top element in stack 
    //     // return undefined if stack is empty
        
    //     pop() {
    //         if (this.count === 0) {
    //             return undefined;
    //         }
        
    //     let deleteItem =this.items[this.count - 1];
    //     this.count -= 1;
    //     console.log(`${deleteItem} removed `);
    //     return deleteItem
    //     }
        
        
    //     // check top element in stack
    //     peek(){
    //         console.log(`top element is ${this.items[this.count -1]}`);
    //         return this.items[this.count - 1];
    //     }
        
    //     // check if stack is empty
        
    //     isEmpty() {
    //         console.log( this.count == 0 ? "stack is empty" : "stack is not empty")
    //         return this.count === 0;
        
    //     }
        
    //     // check size of stack
    //     size(){
    //         console.log(`${this.count} elements in stack`);
    //         return this.count;
    //     }
        
    //     // print elements in stack
    //     print(){
        
    //         let str ="";
    //         for(let i=0; i<this.count; i++){
    //             str += this.items[i] + " ";
    //         }
    //         return str;
    //     }
        
    //     // clear stack
    //     clear(){
    //         this.items = [];
    //         this.count = 0;
    //         console.log("stack cleared");
    //         return this.items
    //     }
        
    //     }
        
    //     const stack =new Stack();
        
        
    //     console.log(stack);
        
    //     // stack.isEmpty()
        
    //     // stack.push(100);
    //     // stack.push(200);
        
    //     // stack.peek();
        
    //     // stack.push(300);
        
    //     // console.log(stack.print())
    //     // stack.pop();
    //     // stack.pop();
    //     // console.log(stack.print())
        
    //     // // console.log(stack.clear())
    //     // stack.size();
        
    //     // stack.isEmpty() 


    //     class Stack {

    //         constructor(){
    //             this.items = [];
    //             this.count = 0;
    //             this.min=0;
    //             this.start0=0;
    //         }
            
    //         // add element to top of the stack
    //         push(element) {
    //             this.items[this.count] = element;
    //             this.count++;
    //             console.log(`${element} added to ${this.count}`);
    //            if(this.min==0 && this.start0==0){
    //             this.min=element;
    //             this.start0=1;
    //            }else if(this.min> element){
    //             this.min=element;
    //           }
    //             return this.count -1
    //         }
            
    //         // print minimum element in stack
    //         printMin(){
    //           return `${this.min} is the minimum element`;
    //         }
            
    //         }
            
    //         const stack =new Stack();
    //         console.log(stack);
    //         stack.push(300);
    //         stack.push(200);
    //         stack.push(100);
    //         stack.push(400);
    //         console.log(stack.printMin());
            


              
  //Q2

//   function reverseQueue(queue) {
//     const stack = [];
//     while (queue.length > 0) {
//       stack.push(queue.shift());
//     }
//     while (stack.length > 0) {
//       queue.push(stack.pop());
//     }
//     return queue;
//   }


//   const queue = [1, 2, 3, 4, 5];
// reverseQueue(queue);
// console.log(queue); // [5, 4, 3, 2, 1]