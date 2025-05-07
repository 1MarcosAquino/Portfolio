export type AlertType = 'success' | 'error' | 'info' | 'warn';

//export interface IshowAlertFn (type: AlertType, message: string) => void;

export type TsetAlertHandler = (type: AlertType, message: string) => void;

export interface IAlert {
    id: number;
    type: AlertType;
    message: string;
}
