function submitData(usersName, usersEmail) {
  const configureObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: usersName,
      email: usersEmail,
    }),
  };
  return fetch("http://localhost:3000/users", configureObject)
    .then((response) => response.json())
    .then((object) => {
      document.body.innerHTML = `${object.id}`;
    })
    .catch((error) => {
      document.body.innerHTML = `${error.message}`;
    });
}
