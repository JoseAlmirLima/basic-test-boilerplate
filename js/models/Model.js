class Model {
  fetchProducts(sun, water, pets) {
    return new Promise((resolve, reject) => {
      fetch(
        `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sun}&water=${water}&pets=${pets}`
      )
        .then((response) => resolve(response.json()))
        .catch((err) => {
          console.log("err", err);
          reject(err);
        });
    });
  }
}

export default Model;
