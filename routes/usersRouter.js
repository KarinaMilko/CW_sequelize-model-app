const { Router } = require("express");
const { usersController } = require("../controllers");

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
  .delete(usersController.deleteUserById);

// usersRouter.post('/', () => {});
// usersRouter.get('/', (req, res) => {
//   res.status(501).send('Not Implemented 007');
// });

// usersRouter.get('/:userId', () => {});
// usersRouter.patch('/:userId', () => {});
// usersRouter.delete('/:userId', () => {});

module.exports = usersRouter;
