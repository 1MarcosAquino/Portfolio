const inDev = { localhost: "http://127.0.0.1:5173/database.json" };
const inDeploy = "https://api.github.com/users/1MarcosAquino/repos";

const urlBase = inDev[location["hostname"]] ?? inDeploy;

export const api = async (url = urlBase, options: RequestInit) => {
  const controller = new AbortController();

  const myOptions = {
    signal: controller.signal,
    ...options,
  };

  return await fetch(url, myOptions)
    .then((res) => res.json())
    .catch((res) => console.error(res));
};
