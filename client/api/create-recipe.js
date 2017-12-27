import parseJSON from "../helpers/parse-json-response";

export default (recipe) => {
  return fetch("/api/create-recipe", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
  })
  .then(parseJSON)
};
