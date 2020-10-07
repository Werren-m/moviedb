"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Movies extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Movies.init(
		{
			title: DataTypes.STRING,
			synopsis: DataTypes.STRING,
			poster: DataTypes.STRING,
			trailer: {
				type: DataTypes.STRING,
				validate: {
					isUrl: {
						msg: "Trailer must be a valid URL",
					},
				},
			},
			rating: DataTypes.DOUBLE,
			backdrop: DataTypes.STRING,
			category: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Movies",
		}
	);
	return Movies;
};
