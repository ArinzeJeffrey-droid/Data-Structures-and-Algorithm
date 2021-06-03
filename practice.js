let obj = [1,1,1,2,3,3,3,3,3,3]
let person = {name: "arinze"}

const arr = (array) => {
    let hash = {}
    for(let i=0; i < array.length; i++) {
        if(hash.hasOwnProperty(array[i])){
            hash[array[i]] = hash[array[i]] + 1
        }
        if(!hash.hasOwnProperty(array[i])) {
            hash[array[i]] = 1
        }
    }
    let max = hash[Object.keys(hash)[0]]
    for(let i = 0; i < Object.keys(hash).length; i++){
        if(hash[Object.keys(hash)[i]] > max){
            max = hash[Object.keys(hash)[i]]
        }
    }
    return Object.keys(hash).find(el => hash[el] === max)
}

const unique = (array) => {
    let hashTable = {}
    for(let i=0; i < array.length; i++) {
        if(!hashTable.hasOwnProperty(array[i])) {
            hashTable[array[i]] = array[i]
        }
    }
    return Object.keys(hashTable)
}

let a = 2
console.log(++a);
console.log(a++);