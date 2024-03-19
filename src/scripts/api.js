let baseUrl = 'https://api.github.com/users/1MarcosAquino/repos';

document.querySelector('#installApp').style.display = 'none';

if (location.hostname == '127.0.0.1' || location.hostname == 'localhost') {
    baseUrl = 'http://127.0.0.1:5500/database.json';

    document.querySelector('#installApp').style.display = 'block';
}

export const api = async (url = baseUrl) => {
    return await fetch(url)
        .then((res) => res.json())
        .catch((res) => console.error(res));
};
