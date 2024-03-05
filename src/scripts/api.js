// 'https://api.github.com/users/1MarcosAquino/repos'
const URL_BASE = 'http://127.0.0.1:5500/db.json';
export const api = async (url = URL_BASE) => {
    return await fetch(url)
        .then((res) => res.json())
        .catch((res) => console.error(res));
};
