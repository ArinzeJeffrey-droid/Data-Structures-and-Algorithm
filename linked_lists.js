
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    printList() {
        const array = []
        let currentNode = this.head
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }

    insert(index, value) {
        if(index >= this.length) {
            return this.append(value)
        }
        const newNode = {
            value: value,
            next: null
        }
        //the node before the 'newly inserted node'
        const leader = this.traverseToIndex(index-1)
        const holdingPointer = leader.next
        leader.next = newNode
        newNode.next = holdingPointer
        this.length++
        return this.printList()
    }

    traverseToIndex(index) {
        let counter = 0
        let currentNode = this.head
        while(counter !== index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    remove(index) {
        //the node before the 'about to be deleted' node
        const leader = this.traverseToIndex(index-1)
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        this.length --
        this.printList()
    }

    reverse() {
        const firstNode = this.tail
        while()
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.prepend(5)
myLinkedList.append(16)
myLinkedList.prepend(2)
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
console.log(myLinkedList.printList())
myLinkedList.remove(2)
console.log(myLinkedList.printList())

