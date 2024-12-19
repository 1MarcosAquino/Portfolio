import { useEffect, useState } from 'react';
import { api } from '../../Api';
import { Repo } from '../../Interfaces';

export const useCard = () => {
    const [repos, setRepos] = useState<Array<Repo>>([] as Array<Repo>);

    const controller = new AbortController();

    useEffect(() => {
        try {
            (async function () {
                const response = await api('http://127.0.0.1:5173/database.json', {
                    signal: controller.signal,
                });

                const reposOrdenads = response.sort(
                    (a: Repo, b: Repo) =>
                        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
                );

                setRepos(reposOrdenads);
            })();
        } catch (error) {
            console.error(error);
        }

        return () => {};
    }, []);

    return [repos];
};
