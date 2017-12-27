import parseJSON from "../helpers/parse-json-response";

export default (recipe) => {
  return fetch("/api/save-recipe", {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
  })
  .then(parseJSON)
};
