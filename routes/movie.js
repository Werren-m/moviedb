const { Router } = require("express");
const {
	editMovie,
	editFormMovie,
	deleteMovie,
} = require("../controllers/movie");
const router = Router();
const { uploadMovie } = require("../middlewares/multer");

const MoviesController = require("../controllers/movie");

router.get("/", MoviesController.getMovies);
router.post("/addMovie", MoviesController.addMovie);
router.post("/editMovie", MoviesController.editMovie);
router.get("/editMovie", MoviesController.editFormMovie);
router.delete("/", MoviesController.deleteMovie);

module.exports = router;

// uploadMovie.fields([
//     {
//         name: "poster",
//         maxCount: 1,
//     },
//     {
//         name: "backdrop",
//         maxCount: 1,
//     },
// ]),
