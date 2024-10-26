const { Router } = require("express");
const multer = require("multer");
const { usersController } = require("../controllers");
const { updateOrCreateUserById } = require("../controllers/usersController");

// const upload = multer({ dest: "public/images/" });
const { upload } = require("../middleware");

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

usersRouter.patch(
  "/:userId/images",
  // upload.single("userPhoto"),
  upload.uploadUserPhoto,
  usersController.updateImage
);
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
