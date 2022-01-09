/* eslint-disable import/no-anonymous-default-export */
const MEALSURL = "http://localhost:8080/api/meals";

const get = id => {
  return fetch(`${MEALSURL}/${id}`).then((response) => response.json());
};

const getAll = async () => {
 return fetch(MEALSURL).then((response) => response.json());
};

const create = async (data) => {
  return fetch(MEALSURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
};

export default {
  get,
  getAll,
  create,
};
