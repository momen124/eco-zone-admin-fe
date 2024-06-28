// components/ToDoList.tsx
const ToDoList = () => {
    return (
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">To Do List</h3>
        <label className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span>Call with Dave</span>
        </label>
        <label className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span>Brunch meeting</span>
        </label>
        <label className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span>Argon Dashboard Launch</span>
        </label>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Add Item</button>
      </div>
    );
  };
  
  export default ToDoList;
  