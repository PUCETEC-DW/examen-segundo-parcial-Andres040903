let tasks = [];

export const getAllTasks = () => tasks;

export const addTask = (task) => {
  if (tasks.some(t => t.id === task.id)) throw new Error('ID duplicado');
  if (task.priority < 1 || task.priority > 5) throw new Error('Prioridad inválida');
  tasks.push(task);
};

export const updateTask = (id, updates) => {
  const task = tasks.find(t => t.id === id);
  if (!task) throw new Error('Tarea no encontrada');

  if ('priority' in updates && (updates.priority < 1 || updates.priority > 5)) {
    throw new Error('Prioridad inválida');
  }

  Object.assign(task, updates);
};

export const deleteTask = (id) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) throw new Error('Tarea no encontrada');
  tasks.splice(index, 1);
};

export const getSummary = () => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = tasks.filter(t => !t.completed);
  const avgPriority = pending.length > 0
    ? pending.reduce((sum, t) => sum + t.priority, 0) / pending.length
    : 0;

  return {
    total,
    completed,
    avgPriority: Number(avgPriority.toFixed(2))
  };
};
