import React from "react";
import { Icon } from '@iconify/react';

function contactMe(){
    return  <div className="" id="contactPage">
    <h4 className="text-center mt-14 mb-10 font-bold">Contact</h4>
    <p className="text-center font-bold text-14">Want to get in touch? Contact me on any of the platform</p>
    <div className="flex gap-x-6 justify-center mt-4">
              <div >
                <a href="https://api.whatsapp.com/send?phone=919950961742">
                <Icon  className="h-9 w-9" icon="logos:whatsapp-icon" />
                </a>
              </div>
              <div >
                <a href="https://www.linkdin.com/in/neeraj-saini-34643424b">
                  <Icon className="h-8 w-8 " icon="logos:linkedin-icon" />
                </a>
              </div>
              <div >
                <a href="mailto:officeneerajsaini@gmail.com">
                  <Icon className="h-9 w-9 " icon="logos:google-gmail" />
                </a>
              </div>
              <div >
                <a href="https://twitter.com/officeneeraj07?t=8Mr57cl5ionfGOFNCOypgw&s=09">
                  <Icon className="h-9 w-9" icon="devicon:twitter" />
                </a>
              </div>
              <div ><a href="https://github.com/officeneerajsaini">
                <Icon className="h-9 w-9 text-black" icon="bi:github" />
              </a>
              </div>
              {/* <div >
                <a href="">
                  <Icon className="h-9 w-9" icon="ri:instagram-fill" />
                </a>
              </div> */}
            </div>
    <div className="flex gap-x-6 justify-center  bg-black h-20 p-8 mt-5">
      <p className="text-white text-xl font-semibold">officeneerajsaini@2023</p>
    </div>
  </div>;
}
export default contactMe ;