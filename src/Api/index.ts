export const api = async (
    url = 'https://api.github.com/users/1MarcosAquino/repos',
    options: RequestInit
) => {
    const controller = new AbortController();

    const myOptions = {
        signal: controller.signal,
        ...options,
    };

    return await fetch(url, myOptions)
        .then((res) => res.json())
        .catch((res) => console.error(res));
};
