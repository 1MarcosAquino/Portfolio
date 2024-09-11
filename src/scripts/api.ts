let baseUrl = "https://api.github.com/users/1MarcosAquino/repos";

if (location.hostname == "127.0.0.1" || location.hostname == "localhost") {
  baseUrl = "http://127.0.0.1:5173/database.json";
  console.log("in dev");
}

export const api = async (url = baseUrl) => {
  return await fetch(url)
    .then((res) => res.json())
    .catch((res) => console.error(res));
};
