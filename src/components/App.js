import {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import {CATEGORIES,TASKS} from "../data";
console.log("Here's the data you're working with");
console.log({CATEGORIES,TASKS});

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (task) => {
    setTasks([...tasks, task]);
    window.alert("Task added!");
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    window.alert("Task deleted!");
  };

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onFilterChange={handleFilterChange}
      />
      <NewTaskForm categories={CATEGORIES} 
      onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} 
      onDelete={handleDelete} />
    </div>
  );
}

export default App;
