const { Router } = require("express");
const { usersController } = require("../controllers");
const { updateOrCreateUserById } = require("../controllers/usersController");

// аналогічно передбачити роутер для /api/tasks
// /api/users
const usersRouter = Router();

usersRouter
  .route("/")
  .post(usersController.createUser)
  .get(usersController.getUsers);

usersRouter
  .route("/:userId")
  .get(usersController.getUserById)
  .patch(usersController.updateUserById)
  .put(usersController.updateOrCreateUserById, usersController.createUser)
  .delete(usersController.deleteUserById);

usersRouter.get("/:userId/tasks", usersController.getUsersTasks);

// usersRouter.post('/', () => {});
// usersRouter.get('/', (req, res) => {
//   res.status(501).send('Not Implemented 007');
// });

// usersRouter.get('/:userId', () => {});
// usersRouter.patch('/:userId', () => {});
// usersRouter.delete('/:userId', () => {});

// patch - зміна
// put заміна або створення

module.exports = usersRouter;
