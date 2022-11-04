export async function getPicturePlayer(firstName, lastName) {
  const apiKey = 'ESRfQdUBfvMaQtERC9TlcR9xPzWc0cInxpOzvA6oPg8uo3WF6VdNAKXzHmX6'
  const rootPictureEndPoint =
    'https://soccer.sportmonks.com/api/v2.0/players/search'
  const namePlayers = `${firstName}%20${lastName}`
  let response = await fetch(
    `${rootPictureEndPoint}/${namePlayers}?api_token=${apiKey}`
  )
  let dataR = await response.json()
  const imagePath = dataR.data[0].image_path
  return imagePath
}
