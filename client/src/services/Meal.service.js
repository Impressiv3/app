/* eslint-disable import/no-anonymous-default-export */
const MEALSURL = "http://localhost:8080/api/meals";

const get = async id => {
  const response = await fetch(`${MEALSURL}/${id}`);
  return await response.json();
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

const update = async (id, data) => {
  const response = await fetch(`${MEALSURL}/${id}`, data);
  return await response.json();
};


export default {
  get,
  getAll,
  create,
  update
};
