import { useEffect, useState } from 'react';
import { IAlert, TsetAlertHandler } from './interfaces';
// import { setAlertHandler } from './myAlert';

import { AlertType } from './interfaces';

let showAlertFn: (type: AlertType, message: string) => void;

export const alert = {
    success: (message: string) => showAlertFn?.('success', message),
    error: (message: string) => showAlertFn?.('error', message),
    info: (message: string) => showAlertFn?.('info', message),
    warn: (message: string) => showAlertFn?.('warn', message),
};

const setAlertHandler = (fn: TsetAlertHandler) => {
    showAlertFn = fn;
};

const useAlert = () => {
    const [toasts, setAlerts] = useState<IAlert[]>([]);

    useEffect(() => {
        setAlertHandler((type, message) => {
            const id = Date.now();
            setAlerts((prev) => [...prev, { id, type, message }]);

            setTimeout(() => {
                setAlerts((prev) => prev.filter((t) => t.id !== id));
            }, 3000);
        });
    }, []);

    return { toasts };
};

export default useAlert;
