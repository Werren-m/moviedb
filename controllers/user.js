const { user } = require("../models");
const { decryptPwd } = require("../helpers/bcrpyt");
const { tokenGenerator } = require("../helpers/jwt");

class UserController {
	static async getAllUser(req, res) {
		user
			.findAll()
			.then((users) => res.status(200).json(users))
			.catch((err) => res.status(500).json(err));
	}

	static async login(req, res) {
		const { email, password } = req.body;
		const found = await user.findOne({
			where: {
				email,
			},
		});

		if (found) {
			if (decryptPwd(password, found.password)) {
				const token = tokenGenerator(found);
				res.status(200).json({ token });
			} else {
				res.status(400).json({
					msg: "Invalid password",
				});
			}
			console.log(found);
		} else {
			res.status(400).json({
				msg: "Email not found",
			});
		}
	}

	static async getUser(req, res) {
		const { id } = req.userData;
		user
			.findOne({
				where: { id },
			})
			.then((user) => res.status(200).json(user))
			.catch((err) => res.status(500).json(err));
	}

	static async updateUser(req, res) {
		const { id } = req.userData;
		const { email, password, name } = req.body;
		const { image } = req.file.path;
		try {
			const done = await user.update(
				{
					email,
					password,
					name,
					image,
				},
				{
					where: { id },
					individualHooks: true,
				}
			);
			res.status(200).json(done);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	static async register(req, res) {
		const { email, password, name, role } = req.body;
		const image = req.file.path;

		const found = await user.findOne({
			where: { email },
		});
		if (found) {
			res.status(400).json({ msg: "Email address is already in use" });
		} else {
			user
				.create({
					name: name,
					password: password,
					email: email,
					image: image,
					role: "user" || role,
				})
				.then((result) => {
					const token = tokenGenerator(result);
					res.status(201).json({ token });
				})
				.catch((err) => res.status(500).json(err));
		}
	}

	static async deleteUser(req, res, next) {
		const { id } = req.userData;
		try {
			const result = user.destroy({
				where: {
					id,
				},
			});
			res.status(200).json({
				result,
				msg: "User deleted",
			});
		} catch (err) {
			// res.status(500).json(err)
			next(err);
		}
	}
}

module.exports = UserController;
