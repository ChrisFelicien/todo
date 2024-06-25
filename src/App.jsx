import { useState } from "react";
import { toast } from "react-toastify";
import ListTodo from "./components/ListTodo";
import AddTodo from "./components/addTodo";

const loadFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todo")) || [];
};

const saveOnLocalStorage = (data) => {
  return localStorage.setItem("todo", JSON.stringify(data));
};

const App = () => {
  const [todoList, setTodoList] = useState(loadFromLocalStorage());

  const handleCompleted = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleAddTodo = (todo) => {
    setTodoList((todoArr) => [todo, ...todoArr]);
  };

  const deleteTodo = (id) => {
    setTodoList((curr) => curr.filter((curr) => curr.id !== id));
  };

  saveOnLocalStorage(todoList);

  return (
    <div className='w-1/2 m-auto pt-10 grid place-content-center'>
      <h1 className='text-center uppercase font-bold text-2xl'>Todo list</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <div className='mt-12'>
        {!todoList.length ? (
          <p>No task please start by adding the new one</p>
        ) : (
          <ListTodo
            listTodo={todoList}
            onCompleted={handleCompleted}
            onDelete={deleteTodo}
          />
        )}
      </div>
    </div>
  );
};

export default App;
