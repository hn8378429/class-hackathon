import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="parent">
      {/* Left section with logo and text */}
      <div className="logo-container">
        <Image 
          src="/header_img.png" 
          alt="Logo" 
          width={50} 
          height={50} 
          className="logo" 
        />
        
        <p>DIGITAL PROJECT</p>
      </div>
      
      <ul className="child">
      <Link href={"/"}>
        <li className="main">MAIN</li>
      </Link>
      <Link href={"/"}>
        <li className="main">GALLERY</li>
      </Link>
      <Link href={"/"}>
        <li className="main">PROJECTS</li>
      </Link>
      <Link href={"/"}>
        <li className="main">CERTIFICATIONS</li>
      </Link>
      <Link href={"/"}>
        <li className="main">CONTACTS</li>
      </Link>
    </ul>
    </div>
  );
}