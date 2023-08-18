import React from "react";
import { Icon } from '@iconify/react';

function contactMe(){
    return  <div className="">
    <div className="flex gap-x-6 justify-center  bg-black h-20 p-8">
    <div >
                <a href="">
                  <Icon className="h-8 w-8 " icon="logos:linkedin-icon" />
                </a>
              </div>
              <div >
                <a href="">
                  <Icon className="h-9 w-9 " icon="logos:google-gmail" />
                </a>
              </div>
              <div >
                <a href="https://twitter.com/officeneeraj07?t=8Mr57cl5ionfGOFNCOypgw&s=09">
                  <Icon className="h-9 w-9" icon="devicon:twitter" />
                </a>
              </div>
              <div >
                <a href="#">
                  <Icon className="h-9 w-9" icon="logos:facebook" />
                </a>
              </div>
              <div ><a href="https://www.linkdin.com/in/neeraj-saini-34643424b">
                <Icon className="h-9 w-9 text-white" icon="bi:github" />
              </a>
              </div>
      <p className="text-white text-xl font-semibold">copyright@2023 officeneerajsaini</p>
    </div>
  </div>;
}
export default contactMe ;