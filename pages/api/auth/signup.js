export default async function handler(req, res) {
  const body = {
    client_id: process.env.AUTH0_ID,
    connection: 'Username-Password-Authentication',
    user_metadata: { plan: 'silver', team_id: 'a111' },
    ...req.body,
  }

  console.log('body', body)

  await fetch(`https://${process.env.AUTH0_DOMAIN}/dbconnections/signup`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  }).then(function (response) {
      console.log('response: ', response.statusText);
      res.send(response)
    }).catch(function (error) {
      console.log(error);
    });
}

function handleErrors(response) {
  if (!response.ok) {
    console.log('MY Error: ', response)
    throw Error(response.statusText);
  }
  return response;
}