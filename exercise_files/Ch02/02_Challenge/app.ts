enum TodoItemStatus {
    Todo = 'to-do',
    InProgress = 'in-progress',
    Done = 'done'
}

interface TodoItem {
    id: number
    title: string
    status: TodoItemStatus
    completedOn?: Date
}

const todoItems: TodoItem[] = [
    { id: 1, title: "Learn HTML", status: TodoItemStatus.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: TodoItemStatus.InProgress },
    { id: 3, title: "Write the best app in the world", status: TodoItemStatus.Todo },
]

function addTodoItem(todo: string) {
    const id = getNextId(todoItems)

    const newTodo: TodoItem = {
        id,
        title: todo,
        status: TodoItemStatus.Todo
    }

    todoItems.push(newTodo)

    return newTodo
}

interface T1Type {
    id: number
}

function getNextId<T extends { id: number }>(items: T[]) {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(newTodo)
console.log()
console.log(todoItems)
