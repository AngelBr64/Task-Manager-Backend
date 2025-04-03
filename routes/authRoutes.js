const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  createTask,
  getTasksByGroup,
  deleteTask,
  updateTask,
  createGroup,
  addMemberToGroup,
  getUsers,
  getGroupsByUser,
  getTasksByUser,
  getGroupTasks,
  updateUser,
  removeMemberFromGroup
} = require('../controllers/authController');

// Authentication routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Task routes
router.post('/tasks', createTask);
router.get('/tasks/group/:selectedGroup', getTasksByGroup);
router.get('/tasks/user/:userId', getTasksByUser);
router.delete('/tasks/:taskId', deleteTask);
router.put('/tasks/:taskId', updateTask);

// User routes
router.get('/users/:userId', getUsers);
router.put('/users/:userId', updateUser);

// Group routes
router.post('/groups', createGroup);
router.get('/groups/user/:userId', getGroupsByUser);
router.post('/groups/:groupId/members/:userId', addMemberToGroup);
router.delete('/groups/:groupId/members/:userId', removeMemberFromGroup);
router.get('/groups/:groupId/tasks', getGroupTasks);

module.exports = router;