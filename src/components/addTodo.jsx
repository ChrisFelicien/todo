import { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return alert("Provide title");
    setTitle(e.target.value);
    const todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    onAddTodo(todo);
    setTitle("");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form
      className='flex justify-center mt-4 border-none'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        value={title}
        placeholder='Todo title'
        onChange={handleChange}
        className='p-1 rounded-sm ml-2 text-gray-900 outline-none'
        autoFocus
      />
      <button className='bg-sky-400 px-4'>Add</button>
    </form>
  );
};

export default AddTodo;
