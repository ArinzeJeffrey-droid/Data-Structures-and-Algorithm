const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z','y','x']


const containsCommonItem2 = (arr1, arr2) => {
    let map = {}
    arr1.forEach(element => {
        if(!map[element]){
            const item = element
            map[item] = true
        }
    });
    
    for(let i=0; i < arr2.length; i++){
        if(map[arr2[i]]){
            return true
        }
    }
    return false
}

// console.log(containsCommonItem2(array1, array2));


const name = "Hi My name is Jeffrey"

const reverseString = (str) => {
    if(!str || str.length < 2 || typeof str !== "string"){
        return "Invalid input"
    }
    let store = ""
    let count = str.length - 1
    
    while(count > -1){
        store+=str[count]
        count--
    }
    return store
}




const mergeSortedArrays = (arr1, arr2) => {
    const mergedArray = []
    let array1Item = arr1[0]
    let array2Item = arr2[0]
    let i = 1
    let j = 1

    if(arr1.length === 0){
        return arr2
    }
    if(arr2.length === 0){
        return arr1
    }
    while(array1Item || array2Item) {
        if(!array2Item || array1Item < array2Item){
            mergedArray.push(array1Item)
            array1Item = arr1[i]
            i++
        } else {
            mergedArray.push(array2Item)
            array2Item = arr2[j]
            j++
        }
    }

    return mergedArray 
}
// console.log(mergeSortedArrays([0,3,4,31], [4,6,30]))


const firstReccuringCharacter = (array) => {
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[i] === array[j]) {
                return array[i]
            }
        }
    }
    return undefined
}


const firstReccuringCharacter2 = (array) => {
    const hashMap = {}
    for(let i = 0; i < array.length; i++) {
        if(hashMap[array[i]] !== undefined){
            return array[i]
        }else {
            hashMap[array[i]] = i
        }
        console.log(hashMap);
    }
    return undefined
}
console.log(firstReccuringCharacter2([2,5,5,2,3,5,1,2,4]))