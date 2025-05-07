import useAlert from './hook';

function Alert() {
    const { toasts } = useAlert();

    return (
        <div
            style={{
                position: 'fixed',
                top: 20,
                right: 20,
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
            }}
        >
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    style={{
                        padding: '10px 20px',
                        borderRadius: '6px',
                        color: '#fff',
                        backgroundColor: {
                            success: '#4caf50',
                            error: '#f44336',
                            info: '#2196f3',
                            warn: '#ff9800',
                        }[toast.type],
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    }}
                >
                    {toast.message}
                </div>
            ))}
        </div>
    );
}
export { Alert };
