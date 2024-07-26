
'use client';
interface MenuItemProps {
    onclick: () => void;
    label: string
}
const MenuItem: React.FC<MenuItemProps> = ({label, onclick}) => {
    return ( 
        <div 
        onClick={onclick}
        className="p-2 hover:bg-neutral-100 cursor-pointer ">
        {label} 
        </div>
     );
}
 
export default MenuItem;