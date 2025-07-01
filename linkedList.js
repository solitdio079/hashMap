
function createLinkedList(headValue=null){

    let head = createNode(headValue)

    const append = (value) => {
        const newNode = createNode(value)
        let tmp = head 
        if(head.value === null)
            head = newNode 
           
        
        while(tmp.nextNode !== null){
            tmp = tmp.nextNode
        }
        if(tmp !== null ) {tmp.nextNode = newNode}
       
    }
    


    const size = () => {
        let tmp = head 
        let nodeCount = head ? 1: 0
        while(tmp.nextNode !== null){
            nodeCount++
            tmp = tmp.nextNode
        }
        return nodeCount
    }


    const prepend = (value) => {
        const newNode = createNode(value)
        newNode.nextNode = head
        head = newNode
    }

    const getHead = () => {
        return head
    }
    const getTail = () => {
        let tmp = head 
        while(tmp.nextNode !== null){
            tmp = tmp.nextNode
        }
        return tmp
    }


    const at = (index) => {
        let tmp = head 
        while(tmp !==null){
            if(index === 0) return tmp 
            tmp = tmp.nextNode
            index -=1

        }
        return null
        
    }

    const pop = () => {
        let tmp = head 
        let prev
        while(tmp.nextNode !==null){
            prev = tmp
            tmp = tmp.nextNode
        }
        prev.nextNode = null


    }

    const contains = (value) => {
        let tmp = head 
        while(tmp !==null){
            if(tmp.value ===value) return true
            tmp = tmp.nextNode
        }
        return false

    }
    const find = (value) => {
        let tmp = head 
        let index = 0
        while(tmp !==null){
            if(tmp.value && tmp.value.key === value) return index
            tmp = tmp.nextNode
            index++
        }
        return null

    }

    const insertAt = (value,index) => {
        const newNode = createNode(value)
        if(index === 0){
            newNode.nextNode = head
            head = newNode
            return 
        }
        const current = at(index)
        if(current){
            const prev = at(index-1)
            newNode.nextNode = current
            prev.nextNode = newNode
           
        }else{
            return "Wrong index!"
        }
    }

    const removeAt = (index) => {
        if(index === 0){
            head = head.nextNode
            return
        }
        let tmp = head 
        let prev
        while(tmp !== null){
            if(index === 0) {
                prev.nextNode = tmp.nextNode
                return
            }
            prev = tmp
            tmp = tmp.nextNode
            index -=1
        }
        


    }




    const toString = () => {
        let tmp = head 
        let listString = ""
        while(tmp !== null){
            listString += `(${JSON.stringify(tmp.value)}) -> `
            tmp = tmp.nextNode
        }
        return listString + "null"
    }



    return {append, prepend, toString, size, getHead, getTail, at,pop,contains,find,insertAt,removeAt}

}

function createNode(value=null,nextNode=null){
    return {value, nextNode}
}



export default createLinkedList

