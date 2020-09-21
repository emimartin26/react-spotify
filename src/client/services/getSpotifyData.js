export default async function getSpotifyData({token, uri}) {
  const data = await fetch(uri, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return await data.json();
}