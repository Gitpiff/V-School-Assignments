class Stack {
    constructor() {
        this.items = [],
        this.count = 0
    }

    // Add element to top of stack

    push(element) {
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count += 1
        return this.count -1 // Minus one because our stack is 0 based
       
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count -1]
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    // peek only checks element on top without removing it
    // Check top element in stack

    peek() {
        console.log(`Top element is ${this.items[this.count -1]}`)
        return this.items[this.count -1]
    }

    // Check if stack is empty
    isEmpty() {
        console.log(this.count === 0 ? 'stack is empty' : 'stack is not empty')
        return this.count == 0
    }

    // Check size of stack
    size() {
        console.log(`${this.count} elements in stack`)
        return this.count
    }

    // Print elements in stack
    print() {
        console.log(`${this.items} members of stack`)  
    }

    // Clear stack
    clear() {
        this.items = []
        this.count = 0

        return this.items
    }
}

const stack = new Stack()

stack.isEmpty()
stack.push(77)
stack.push(50)
stack.push(90)
stack.print()
stack.push(97)
stack.peek()
stack.push(980)
stack.push(797)
stack.pop()
stack.print()
stack.clear()
stack.isEmpty()
stack.size()


console.log(stack)