import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join } from 'path';

const file = join('./db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter, { todos: [] });

async function init() {
  await db.read();
  if (!db.data || !Array.isArray(db.data.todos)) {
    db.data = { todos: [] };
    await db.write();
  }
}

async function addTodo(task) {
  await init();
  db.data.todos.push({ id: Date.now(), task, done: false });
  await db.write();
  console.log('✅ Todo added');
}

async function listTodos() {
  await init();
  const todos = db.data.todos;
  if (!Array.isArray(todos)) {
    console.log('⚠️ Invalid todos data');
    return;
  }

  console.log('📋 Current Todos:');
  todos.forEach(todo => {
    console.log(`- [${todo.done ? 'x' : ' '}] (${todo.id}) ${todo.task}`);
  });
}

async function markDone(id) {
  await init();
  const todo = db.data.todos.find(t => t.id === Number(id));
  if (!todo) {
    console.log('❌ Task not found');
    return;
  }
  todo.done = true;
  await db.write();
  console.log('✅ Task marked as done');
}

async function deleteTodo(id) {
  await init();
  const before = db.data.todos.length;
  db.data.todos = db.data.todos.filter(t => t.id !== Number(id));
  await db.write();
  const after = db.data.todos.length;
  if (before === after) {
    console.log('❌ Task not found');
  } else {
    console.log('🗑️ Task deleted');
  }
}

async function main() {
  const [, , command, ...args] = process.argv;

  switch (command) {
    case 'add':
      await addTodo(args.join(' '));
      break;
    case 'list':
      await listTodos();
      break;
    case 'done':
      await markDone(args[0]);
      break;
    case 'delete':
      await deleteTodo(args[0]);
      break;
    default:
      console.log(`❓ Unknown command: ${command}
Usage:
  node lowdb-todo.js add "Task name"
  node lowdb-todo.js list
  node lowdb-todo.js done <id>
  node lowdb-todo.js delete <id>`);
  }
}

main();
