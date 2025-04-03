const express = require('express');
const router = express.Router();
const authController = require(path.join(__dirname, '..', 'controllers', 'authController'));

// Rutas de autenticación
router.post('/auth/register', authController.registerUser);
router.post('/auth/login', authController.loginUser);

// Rutas de tareas
router.route('/tasks')
  .post(authController.createTask)
  .get(authController.getTasksByUser);

router.route('/tasks/:id')
  .put(authController.updateTask)
  .delete(authController.deleteTask);

// Rutas de grupos
router.route('/groups')
  .post(authController.createGroup)
  .get(authController.getGroupsByUser);

router.route('/groups/:groupId/members/:userId')
  .post(authController.addMemberToGroup)
  .delete(authController.removeMemberFromGroup);

module.exports = router;