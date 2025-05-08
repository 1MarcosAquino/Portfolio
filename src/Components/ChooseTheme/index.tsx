import { useEffect, useState } from 'react';
import Icon from '../Icon';

function ChooseTheme() {
    // document.body.classList.toggle('dark-mode', dark);

    const [theme, setTheme] = useState(true);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', theme);
    }, [theme]);

    return (
        <button
            style={{
                all: 'unset',
                position: 'fixed',
                top: '15px',
                right: '15px',
                zIndex: '10',
                backgroundColor: 'transparent',
                color: 'var(--text-primary)',

                cursor: 'pointer',

                width: '2rem',
                height: '2rem',

                // transition: 'color 0.2s',
            }}
            onClick={() => setTheme(!theme)}
        >
            {theme && <Icon icon="line-md:moon-twotone-loop" width="32" height="32" />}
            {!theme && <Icon icon="line-md:sun-rising-loop" width="32" height="32" />}
        </button>
    );
}

export default ChooseTheme;
