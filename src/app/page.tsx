import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="banner">
        <h1>This is my website</h1>
        <div className="button">
          <button type="submit">Submit</button>
        </div>
        <Image
          src="/Rectangle 6 (3).png"
          alt="image"
          width={770}
          height={829}
          className="bannerimage"
        />
      </div>
      <div className="image-container">
        <Image
          src="/Group 13 (1).png"
          alt="image"
          width={1170}
          height={465}
          className="bannerimage"
        />
        <Image
          src="/Group 20.png"
          alt="image"
          width={1170}
          height={268}
          className="bannerimage"
        />
      </div>
      <div className="container">
        <Image
          src="/Group 79.jpg"
          alt="image"
          width={1170}
          height={765}
          className="bannerimage"
        />
      </div>
      <div className="container">
        <Image
          src="/Group 82 (6).png"
          alt="image"
          width={1170}
          height={603}
          className="bannerimage"
        />
      </div>
      <div className="container">
        <Image
          src="/Footer.png"
          alt="image"
          width={1440}
          height={417}
          className="bannerimage"
        />
      </div>
    </div>
  );
}
