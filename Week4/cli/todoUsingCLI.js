import { Command } from "commander"
import { promises as fs } from "fs"

const program = new Command()
const TODO_FILE = "todos.json"

const initializeTodos = async () => {
  try {
    await fs.access(TODO_FILE)
  } catch {
    await fs.writeFile(TODO_FILE, JSON.stringify([]))
  }
}

const addTodos = async (todo) => {
  try {
    await fs.writeFile(TODO_FILE, JSON.stringify(todo, null, 2))
  } catch (error) {
    console.log("Error adding todo", error)
  }
}

const readTodos = async () => {
  const data = await fs.readFile(TODO_FILE, "utf-8")
  return JSON.parse(data)
}

program.name("todo-cli").description("CLI based todo").version("1.0.0")

//add
program
  .command("add")
  .description("Add a todo")
  .argument("<task>", "Task description")
  .action(async (task) => {
    await initializeTodos()
    let todos = await readTodos()
    todos.push({ task })
    await addTodos(todos)
    console.log(`Added new todo: "${task}"`)
  })

//delete
program
  .command("delete")
  .description("Delete a todo")
  .argument("<task>", "Name of todo to delete")
  .action(async (task) => {
    await initializeTodos()
    let todos = await readTodos()
    const todoLength = todos.todoLength

    todos = todos.filter((todo) => todo.task !== task)

    if (todos.length < todoLength) {
      await addTodos(todos)
      console.log(`Deleted todo with task name: "${task}"`)
    } else {
      console.log(`No todo found with task name: "${task}"`)
    }
  })

//update
program
  .command("update")
  .description("Update a todo")
  .argument("<task>", "Name of todo to be updated")
  .action(async (task) => {
    await initializeTodos()
    const todos = await readTodos()

    const todo = todos.find((t) => t.task === task)
    if (todo) {
      todo.task = task
      await addTodos(todo)
      console.log(`Updated todo "${task}" to "${newTask}"`)
    } else {
      console.log(`No todo found with task name: "${task}"`)
    }
  })

//read
program
  .command("list")
  .description("List all todos")
  .action(async () => {
    await initializeTodos()
    const todos = await readTodos()

    if (todos.length > 0) {
      todos.map((todo) => {
        console.log("Todo :", todo)
      })
    } else {
      console.log("No todos found")
    }
  })

program.parse(process.argv)
