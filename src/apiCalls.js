const apiCalls = {
  getRigsList: () => {
    return fetch("https://river-renters-api.herokuapp.com/api/v1/rigs")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.text);
        } else {
          return response.json();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getRig: (rigId) => {
    return fetch(`https://river-renters-api.herokuapp.com/api/v1/rigs/${rigId}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.text);
        } else {
          return response.json();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // updateRig: (patch, rigId) => {
  //   return fetch(
  //     `https://river-renters-api.herokuapp.com/api/v1/rigs/${rigId}`,
  //     {
  //       method: "PATCH",
  //       headers: myHeaders,
  //       body: JSON.stringify(patch),
  //       redirect: "follow",
  //     }
  //   ).then((res) => res.text());
  // },
};

export default apiCalls;
