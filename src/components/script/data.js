let elementId = '2'

class Todo {
    constructor(title, content, id) {
        this.title = title
        this.content = content
        this.id = id
        this.type = 'working'
    }

    // changeType() {
    //     this.type === 'working'?(this.type = 'done'):(this.type = 'working')
    // }
}

function setTodo(title, content) {
    const element = new Todo(title, content, elementId)
    elementId++

    return element
}

// function setList(title, content, list) {
//     const newTodo = setTodo(title, content)
//     let newList = [...list]
//     newList.push(newTodo)
    
//     return newList
// }

export default setTodo