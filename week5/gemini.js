const { program } = require('commander');
const fs = require('fs'); // Import the file system module
const path = require('path');

const todosFilePath = path.join(__dirname, 'todos.json');

// Helper function to read todos from the file
const getTodos = () => {
    try {
        const data = fs.readFileSync(todosFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // If the file doesn't exist or is empty, return an empty array
        return [];
    }
};

// Helper function to save todos to the file
const saveTodos = (todos) => {
    fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2));
};

program
    .command('add <task>')
    .description('Add a new todo task')
    .action((task) => {
        const todos = getTodos();
        todos.push({ title: task, completed: false });
        saveTodos(todos);
        console.log(`✅ Added todo: "${task}"`);
        listTodos();
    });

program
    .command('list')
    .description('List all todos')
    .action(() => {
        listTodos();
    });

program
    .command('delete <index>')
    .description('Delete a todo by its number')
    .action((index) => {
        const todos = getTodos();
        const todoIndex = parseInt(index, 10) - 1; // Convert to a zero-based index

        if (isNaN(todoIndex) || todoIndex < 0 || todoIndex >= todos.length) {
            console.error('❌ Invalid number. Please provide a number from the list.');
            return;
        }

        const removedTodo = todos.splice(todoIndex, 1);
        saveTodos(todos);
        console.log(`🗑️ Deleted todo: "${removedTodo[0].title}"`);
        listTodos();
    });

function listTodos() {
    const todos = getTodos();
    if (todos.length === 0) {
        console.log('No todos yet! Add one with the "add" command.');
        return;
    }
    console.log('\n--- Your Todos ---');
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo.title}`);
    });
    console.log('------------------\n');
}


program.parse();