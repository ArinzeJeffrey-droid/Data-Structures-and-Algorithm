const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z','y','x']


// const containsCommonItem = (arr1,arr2) => {
//     for(let i=0; i < arr1.length; i++){
//         for(let j=0; j <arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 return true
//             }
//         }
//     }
//     return false
// }


// console.log(containsCommonItem(array1, array2));

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

console.log(containsCommonItem2(array1, array2));


// const name = "Arinze"

// let rev = name.split("")
// let store = []
// let count = rev.length - 1

// while(count > -1){
//     store.push(rev[count])
// }

// console.log(store)