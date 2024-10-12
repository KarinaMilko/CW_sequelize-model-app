const { Router } = require("express");

// аналогічно передбачити роутер для /api/tasks
// /api/users
const usersRouter = Router();

usersRouter
  .route("/")
  .post(() => {})
  .get((req, res) => {
    res.status(501).send("Not Implemented");
  });

usersRouter
  .route("/:userId")
  .get(() => {})
  .patch(() => {})
  .delete(() => {});

// usersRouter.post('/', () => {});
// usersRouter.get('/', (req, res) => {
//   res.status(501).send('Not Implemented 007');
// });

// usersRouter.get('/:userId', () => {});
// usersRouter.patch('/:userId', () => {});
// usersRouter.delete('/:userId', () => {});

module.exports = usersRouter;
