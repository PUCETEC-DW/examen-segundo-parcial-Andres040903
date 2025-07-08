import * as TaskModel from '../models/taskmodel.js';

export const getTasks = (req, res) => {
  res.json(TaskModel.getAllTasks());
};

export const createTask = (req, res) => {
  try {
    const { id, title, description, completed, priority } = req.body;

    if (!id || !title || !description || completed === undefined || priority === undefined) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    TaskModel.addTask({ id, title, description, completed, priority });
    res.status(201).json({ message: 'Tarea creada' });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateTask = (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    TaskModel.updateTask(id, updates);
    res.json({ message: 'Tarea actualizada' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteTask = (req, res) => {
  try {
    const { id } = req.params;
    TaskModel.deleteTask(id);
    res.json({ message: 'Tarea eliminada' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getSummary = (req, res) => {
  res.json(TaskModel.getSummary());
};
