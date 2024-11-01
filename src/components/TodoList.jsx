import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask("");
  };
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800">
      <form
        action=""
        className="flex flex-col justify-center items-center w-80 bg-blue-700 p-10 rounded-lg space-y-2 mt-5"
      >
        <h1 className="text-center font-bold text-2xl mb-5 text-white">
          Task list
        </h1>
        <label htmlFor="" className="font-bold text-sm text-white">
          Type the task
        </label>
        <input
          type="text"
          name="task"
          className="rounded-lg focus:outline-none text-center"
          placeholder="task"
          value={newTask}
          onChange={handleChange}
        />
        <button
          className="bg-orange-600 text-white p-1 rounded-lg font-bold"
          onClick={addTask}
        >
          Send
        </button>
      </form>

      <div className="bg-white py-4 px-6 mt-5 rounded-lg shadow-lg max-w-sm mx-auto">
        {tasks.length > 0 ? (
        <ul className="bg-white">
          {tasks.map((task, index) => (
            <li key={index} className="list-disc">{task}</li>
          ))}
        </ul>
        ): <h1>There are not tasks</h1>}
      </div>
    </div>
  );
};

export default TodoList;
