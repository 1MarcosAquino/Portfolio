import { Icon as Iconify } from '@iconify/react/dist/iconify.js';

interface IconProps {
    icon: string;
    width?: string;
    height?: string;
}

const Icon = ({ icon, width, height }: IconProps) => {
    // icon="line-md:github-loop" width="32" height="32"
    return <Iconify icon={icon} width={height} height={width} />;
};

export default Icon;
