import React from 'react';
import Image from "next/image";
import iOSDevelopment from "../../../public/images/swift-logo@logotyp.us.svg";
import AndroidDevelopment from "../../../public/images/android-logo@logotyp.us.svg";
import ReactDevelopment from "../../../public/images/react-logo@logotyp.us.svg";
import MicroservicesArchitecture from "../../../public/images/flutter-logo@logotyp.us.svg";
import JiraSoftware from "../../../public/images/jira-software-logo@logotyp.us.svg"
import PythonDesktopAI from "../../../public/images/python-logo@logotyp.us.svg"

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-6xl px-4">
      <div>
        <Image src={iOSDevelopment} alt="" className="h-auto max-w-full rounded-lg" />
      </div>
      <div>
        <Image src={AndroidDevelopment} alt="" className="h-auto max-w-full rounded-lg" />
      </div>
      <div>
        <Image src={ReactDevelopment} alt="" className="h-auto max-w-full rounded-lg" />
      </div>

      <div>
        <Image src={MicroservicesArchitecture} alt="" className="h-auto max-w-full rounded-lg" />
      </div>
    
      <div>
        <Image src={JiraSoftware} alt="" className="h-auto max-w-full rounded-lg" />
      </div>
      
      <div>
        <Image src={PythonDesktopAI} alt="" className="h-auto max-w-full rounded-lg" />
      </div>
    </div>
  );
};

export default Gallery;
