export const getPlaylist = async () => {
  const { API_URL } = process.env;
  const playlist = await fetch(`${API_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await playlist.json();
  return data;
};

const Playlist = async (req, res) =>
  res.status(200).json(await getPlaylist());

export default Playlist;
