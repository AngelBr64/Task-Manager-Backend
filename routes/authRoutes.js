const express = require('express');
const router = express.Router();
const path = require('path');
const {
  registerUser,
  loginUser,
  createTask,
  getTasksByUser,
  updateTask,
  deleteTask,
  createGroup,
  getGroupsByUser,
  addMemberToGroup,
  removeMemberFromGroup
} = require(path.resolve(__dirname, '..', 'controllers', 'authController'));

// Authentication routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Task routes
router.route('/tasks')
  .post(createTask)
  .get(getTasksByUser);

router.route('/tasks/:id')
  .put(updateTask)
  .delete(deleteTask);

// Group routes
router.route('/groups')
  .post(createGroup)
  .get(getGroupsByUser);

router.route('/groups/:groupId/members/:userId')
  .post(addMemberToGroup)
  .delete(removeMemberFromGroup);

module.exports = router;