module.exports = (router) => {
	console.log("!!!!!!")
	router.post("/create-recipe", (req, res) => {
		console.log("recipe endpoint available!");
		res.send({msg: "Hey"})
	});

};