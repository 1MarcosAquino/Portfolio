import { Icon } from '@iconify/react/dist/iconify.js';

type TooltipButtonProps = { action: (url: string) => void };

const TooltipButton = ({ action }: TooltipButtonProps) => (
    <div className="tooltip deploy">
        <button onClick={() => action}>
            <Icon icon="hugeicons:link-forward" width="32" height="32" />
            <span className="tooltiptext">Ver aplicação</span>
        </button>
    </div>
);

export default TooltipButton;
