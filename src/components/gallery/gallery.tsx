/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import iOSDevelopment from "../../../public/images/swift-logo@logotyp.us.svg";
import AndroidDevelopment from "../../../public/images/android-logo@logotyp.us.svg";
import ReactDevelopment from "../../../public/images/react-logo@logotyp.us.svg";
import MicroservicesArchitecture from "../../../public/images/flutter-logo@logotyp.us.svg";
import JiraSoftware from "../../../public/images/jira-software-logo@logotyp.us.svg";
import PythonDesktopAI from "../../../public/images/python-logo@logotyp.us.svg";

const Gallery = () => {
  const images = [
    { src: iOSDevelopment, alt: 'iOS Development' },
    { src: AndroidDevelopment, alt: 'Android Development' },
    { src: ReactDevelopment, alt: 'React Development' },
    { src: MicroservicesArchitecture, alt: 'Microservices Architecture' },
    { src: JiraSoftware, alt: 'Jira Software' },
    { src: PythonDesktopAI, alt: 'Python Desktop AI' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-6xl px-4">
      {images.map((image, index) => (
        <div key={index}>
          <Image src={image.src} alt={image.alt} className="h-auto max-w-full rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
