const bodyparser = require("body-parser");
const Recipe = require("../models/recipe");

module.exports = (router) => {
  router.use(bodyparser.json());

	router.post("/create-recipe", (req, res) => {
    const newRecipe = new Recipe(req.body);

    newRecipe.save()
      .then((data) => {
        return res.status(200).json({
          msg: `${data.basic.name} has been created`,
          recipe: data
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({msg: "There was an error creating your Recipe"});
      });
	});

  router.put("/save-recipe", (req, res) => {
    const recipe = req.body;
    const id = { _id: req.params.id || recipe._id }
    Recipe.update(id, recipe)
      .then((data) => {
        return res.status(200).json({
          msg: `${recipe.basic.name} has been saved`
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({msg: "There was an error saving your Recipe"});
      });
  });

};
