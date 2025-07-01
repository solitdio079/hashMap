import createLinkedList from "./linkedList.js";

function HashMap() {
    let loadFactor = 0.75 
    let capacity = 16
    // every element in the buckets array is a linkedList instance
    let buckets = Array(capacity).fill(createLinkedList())

    function hash(key){
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i))%capacity;
        }
     
        return hashCode;
    }
    // Get the bucket where the key is located
    function bucket(key){
        const hashCode = hash(key)%capacity
        if (hashCode < 0 || hashCode >= capacity) {
            throw new Error("Trying to access index out of bounds");
        }
        return buckets[hashCode]
    }

    function set(key,value){
        const location = bucket(key)
        // search for the key in bucket 
        let existingNodeIndex = location.find(key)
        //console.log(existingNodeIndex)
        if(existingNodeIndex !== null){
            let existingNode = location.at(existingNodeIndex)
           // console.log(existingNode)
            existingNode.value.value = value
        }else{
            location.append({key,value})
        }


    }

    return {set,bucket}
}

const newMap = HashMap()

newMap.set("Test", "The great depression")
newMap.set("Test", "The great recession")
newMap.set("Test", "The great progression")
console.log(newMap.bucket("Test").toString())
