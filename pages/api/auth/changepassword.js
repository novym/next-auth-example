export default async function handler(req, res) {
  const body = {
    client_id: process.env.AUTH0_ID,
    connection: 'Username-Password-Authentication',
    ...req.body,
  }

  console.log('change password body', body)

  const signup = await fetch(`${process.env.AUTH0_DOMAIN}/dbconnections/change_password`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  }).then(handleErrors)
    .then(function (response) {
      console.log('response: ', response);
      res.send(response)
    }).catch(function (error) {
      console.log(error);
    });
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}