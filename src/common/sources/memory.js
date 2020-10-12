let users = [];
let tasks = [];
let boards = [];

const getAllUsers = () => users.slice(0);
const getUser = id => users.find(user => user.id === id);
const createUser = user => {
  users.push(user);
  return user;
};
const updateUser = newUser => {
  users[users.findIndex(user => user.id === newUser.id)] = newUser;
  return newUser;
};
const removeUser = id => {
  users = users.filter(user => user.id !== id);
  tasks = tasks.map(task =>
    task.userId === id ? { ...task, userId: null } : task
  );
};

const getAllTasks = () => tasks.slice(0);
const getTask = id => tasks.find(task => task.id === id);
const createTask = task => {
  tasks.push(task);
  return task;
};
const updateTask = newTask => {
  tasks[tasks.findIndex(task => task.id === newTask.id)] = newTask;
  return newTask;
};
const removeTask = id => {
  tasks = tasks.filter(task => task.id !== id);
};

const getAllBoards = () => boards.slice(0);
const getBoard = id => boards.find(board => board.id === id);
const createBoard = board => {
  boards.push(board);
  return board;
};
const updateBoard = newBoard => {
  boards[boards.findIndex(board => board.id === newBoard.id)] = newBoard;
  return newBoard;
};
const removeBoard = id => {
  boards = boards.filter(board => board.id !== id);
  tasks = tasks.filter(task => task.boardId !== id);
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  removeUser,
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  removeTask,
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  removeBoard
};
