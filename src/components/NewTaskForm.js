import {useState} from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [text, setText] = useState("");
  const [category, setCategory]= useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit({ id: Date.now(), text, category });
    setText("");
    setCategory("");
  };

  return (
    <form className="new-task-form" 
    onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange = {(event) => setText(event.target.value)}
          required
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange = {(event) => setCategory(event.target.value)}
          required>
          <option value="">--</option>
          {categories.map((category) => (
            <option key = {category} value = {category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
