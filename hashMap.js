import createLinkedList from "./linkedList.js";

function HashMap() {
    let loadFactor = 0.75 
    let capacity = 16
    // every element in the buckets array is a linkedList instance
    let buckets = Array.from({length:capacity}, e => createLinkedList()) 
    

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
        const hashCode = hash(key)
        if (hashCode < 0 || hashCode >= capacity) {
            throw new Error("Trying to access index out of bounds");
        }
        //console.log(hashCode)
        return buckets[hashCode]
    }
   

    function set(key,value){
        const location = bucket(key)
        const existingNode = getNode(key) 
        //console.log(existingNode)
        if(existingNode){
            existingNode.value.value = value
        }else{
            location.append({key,value})
            grow()
        }
    }

    function getNode(key){
        const location = bucket(key)
        let existingNodeIndex = location.find(key)
        //console.log(existingNodeIndex)
        if(existingNodeIndex !== null){
            let existingNode = location.at(existingNodeIndex)
           // console.log(existingNode)
            return existingNode
        }else{
            return null
        }

    }

    function get(key){
        const existingNode = getNode(key) 
        if(existingNode) return existingNode.value.value
        return null
    }
    function has(key){
        const existingNode = getNode(key) 
        if(existingNode) return true 
        return false

    }
    function remove(key){
        const location = bucket(key)
        let existingNodeIndex = location.find(key)
        //console.log(existingNodeIndex)
        if(existingNodeIndex !== null){
            location.removeAt(existingNodeIndex)
           // console.log(existingNode)
            return true
        }else{
            return false
        }

    }
    function length(){
        return buckets.reduce((acc,curr) => acc += parseInt(curr.size()),0)
    }
    function clear(){
        buckets.forEach(location => {
            for(let i=0;i<location.size();i++){
                location.pop()
            }
        })
    }

    function keys(){
       return buckets.reduce((acc,curr) => acc = [...acc,...curr.keys()],[])
    }
    function values(){
       return buckets.reduce((acc,curr) => acc = [...acc,...curr.values()],[])
    }
    function entries(){
       return buckets.reduce((acc,curr) => acc = [...acc,...curr.entries()],[])
    }
    function bucketSize(){
        return capacity
    }
    function grow(){
        if(length() > loadFactor*capacity){
            const entriesArr = entries()
            capacity = capacity*2
            buckets = Array.from({length:capacity}, e => createLinkedList())
            entriesArr.forEach(pair => set(pair[0],pair[1]))
        }
    }
    

    return {set,bucket, get,has, remove, length,clear,keys, values,entries, bucketSize}
}
export default HashMap


