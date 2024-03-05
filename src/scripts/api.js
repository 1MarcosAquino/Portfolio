const URL_BASE = 'https://api.github.com/users/1MarcosAquino/repos';
export const api = async (url = URL_BASE) => {
    return await fetch(url)
        .then((res) => res.json())
        .catch((res) => console.error(res));
};
