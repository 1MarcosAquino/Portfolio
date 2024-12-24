import { useEffect, useState } from 'react';
import { Api } from '../Api';
import { Repo } from '../Interfaces';
import { useMyContext } from '../Provider';

type useCardReturn = [repos: Repo[], openModal: (url: string) => void];

export const useCard = (): useCardReturn => {
    const [repos, setRepos] = useState<Array<Repo>>([] as Array<Repo>);

    const controller = new AbortController();

    const { isOpen, setIsOpen } = useMyContext();

    const openModal = (url: string) => {
        localStorage.setItem('url', url);
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const originGithub = location.origin == 'https://1marcosaquino.github.io';

        const url = `${location.origin}/${originGithub ? 'Portfolio' : ''}/database.json`;

        try {
            (async function () {
                const response = await Api(url, {
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

    return [repos, openModal];
};
