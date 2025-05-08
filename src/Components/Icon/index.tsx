import { Icon as Iconify } from '@iconify/react/dist/iconify.js';

interface IconProps {
    icon: string;
    width?: string;
    height?: string;
    className?: string;
}

const Icon = ({ className, icon, width, height }: IconProps) => {
    // icon="line-md:github-loop" width="32" height="32"
    return <Iconify className={className} icon={icon} width={height} height={width} />;
};

export default Icon;
