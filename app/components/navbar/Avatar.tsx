import Image from "next/image";
const Avatar = () => {
    return ( 
        <Image  
        src="/images/avatar.png"
        alt="avatar" 
        className="rounded-full" 
        height="30" 
        width="30"/>
     );
}
 
export default Avatar;