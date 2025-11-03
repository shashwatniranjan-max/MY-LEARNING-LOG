const { program } = require("commander");
const fs = require("fs");
const path = require("path");
const todoFilePath = path.join(__dirname, "todos.json");
const getTodos = () => {
    try {
        const data = fs.readFileSync(todoFilePath, "utf-8");
        return JSON.parse(data);
    } catch(error) {
        return [];
    }
}
const saveTodos = async (todos) => {
    // async write with proper error handling
    try {
        await fs.promises.writeFile(todoFilePath, JSON.stringify(todos, null, 2), "utf8");
    } catch (err) {
        console.error("Failed to save todos:", err.message || err);
        // propagate the error so callers can handle it
        throw err;
    }
}
program
    .command("add <task>")
    .description("to add the todos in todo list")
    .action(async (task) => {
        try {
            const todos = getTodos();
            todos.push({
                title: task,
                isCompleted: false
            })
            await saveTodos(todos);
            console.log(`added the todo "${task}"`);
            listTodos();
        } catch (err) {
            console.error("Could not add todo:", err.message || err);
        }
    })
program
    .command("list")
    .description("to view the current todos in the todo list")
    .action(() => {
        listTodos();
    })
program
    .command("delete <index>")
    .description("to delete the todo at given index")
    .action(async (index) => {
        try {
            const todos = getTodos();
            const todoIndex = parseInt(index, 10) - 1;
            // valid todoIndex is 0 .. todos.length - 1
            if (isNaN(todoIndex) || todoIndex < 0 || todoIndex >= todos.length) {
                console.log("enter valid index number ");
                return;
            }
            const removedTodo = todos.splice(todoIndex, 1);
            await saveTodos(todos);
            console.log(`todo removed : ${removedTodo[0].title}`);
            listTodos();
        } catch (err) {
            console.error("Could not delete todo:", err.message || err);
        }
    })
const listTodos = () => {
    const todos = getTodos();
    if (todos.length === 0) {
        console.log("no todo to show , add first todo using 'add' command");
        return;
    }
    console.log("-----Todo list-----");
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo.title}`)
    });
}
program.parse(process.argv);