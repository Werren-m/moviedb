const { Movies } = require("../models/movies");

class MovieController {
	static async getMovies(req, res) {
		Movies.findAll()
			.then((movie) => {
				res.status(200).json(movie);
			})
			.catch((err) => {
				res.status(500).json(err);
			});
	}

	static async addMovie(req, res) {
		const { title, synopsis, trailer, rating, category } = req.body;
		// const { poster, backdrop } = req.file.path;
		const found = await Movies.findOne({
			where: {
				title,
			},
		});
		if (found) {
			res.status(400).json({ msg: "Movie already exists" });
		} else {
			Movies.create({
				title,
				synopsis,
				trailer,
				rating,
				category,
				// poster,
				// backdrop,
			})
				.then((el) => {
					res.status(200).json({ msg: "Movie created successfully" });
				})
				.catch((err) => {
					res.status(500).json({ err });
				});
		}
	}

	static async editFormMovie(req, res) {
		const id = req.params.id;
		const movie = await Movie.findOne({
			where: { id },
		});
		if (movie) {
			res.status(200).json(movie);
		} else {
			res.status(404).json({ msg: "Movie not found" });
		}
	}

	static async editMovie(req, res) {
		const { title, synopsis, trailer, rating, category } = req.body;
		const { poster, backdrop } = req.file.path;

		Movies.update(
			{
				title: title,
				synopsis,
				trailer,
				rating,
				category,
				poster,
				backdrop,
			},
			{ where: id }
		)
			.then(() => {
				res.status(200).json({ msg: "Movie updated successfully" });
			})
			.catch((err) => res.status(500).json(err));
	}

	static async deleteMovie(req, res) {
		const { id } = req.params;
		Movies.destroy({
			where: { id },
		})
			.then(() => res.status(200).json({ msg: "Movie deleted successfully" }))
			.catch((err) => res.status(400).json(err));
	}
}

module.exports = MovieController;
