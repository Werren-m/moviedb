const { Router } = require("express");
const router = Router();
const UserController = require("../controllers/user");
const MovieController = require("../controllers/movie");
const userRoutes = require("./user");
const movieRoutes = require("./movie");
const { uploadUser } = require("../middlewares/multer");
const { paginatedResults } = require("../middlewares/pagination");

// router.get("/", MovieController.getMovies);
// router.get("/", UserController.getAllUser);
router.post("/register", uploadUser.single("image"), UserController.register);
router.post("/login", UserController.login);

router.use("/user", userRoutes);
// router.use("/movie", movieRoutes);

module.exports = router;
