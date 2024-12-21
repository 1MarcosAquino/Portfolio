export const Api = async (
    URL = 'https://api.github.com/users/1MarcosAquino/repos',
    options: RequestInit
) => {
    const controller = new AbortController();

    const OPTIONS = {
        signal: controller.signal,
        ...options,
    };

    return await fetch(URL, OPTIONS)
        .then((res) => res.json())
        .catch((res) => console.error(res));
};
