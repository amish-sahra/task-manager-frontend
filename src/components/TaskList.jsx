function TaskList({ tasks, onEdit, onDelete, onToggle }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-xl">No tasks yet. Create your first task!</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
            task.completed ? 'border-green-500 opacity-75' : 'border-blue-500'
          }`}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-start space-x-3 flex-1">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
              />
              <div className="flex-1">
                <h3
                  className={`text-lg font-semibold ${
                    task.completed ? 'line-through text-gray-500' : 'text-gray-800'
                  }`}
                >
                  {task.title}
                </h3>
              </div>
            </div>
            <span
              className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(
                task.priority
              )}`}
            >
              {task.priority}
            </span>
          </div>

          {task.description && (
            <p className="text-gray-600 text-sm mb-3">{task.description}</p>
          )}

          {task.due_date && (
            <p className="text-gray-500 text-xs mb-4">
              Due: {new Date(task.due_date).toLocaleDateString()}
            </p>
          )}

          <div className="flex space-x-2">
            <button
              onClick={() => onEdit(task)}
              className="flex-1 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200 text-sm"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="flex-1 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition duration-200 text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList