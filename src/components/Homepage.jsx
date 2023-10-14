import React from "react";
import { Icon } from '@iconify/react';
import profile from "../photos/myProfile.jpg";

function homePage() {
  return <div > <section className="bg-gradient-animation pt-1">
    <div className="" id="homePage">
      <div >
        <div className="grid grid-cols-2  mt-40">
          <div className="text-center mt-28">
            <p className="text-5xl font-serif">Hi ,I am <br /><h1 className="font-semibold">Neeraj Saini</h1></p>
            <p className="text-center text-2xl">I am a Front-End React Developer</p>
            <div className="flex gap-x-6 justify-center mt-10">
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
            {/* <button type="button" className="rounded-full bg-yellow-500 px-4 py-2 place-item-center">About me</button> */}
          </div>
          <div className=" flex justify-center item-center h-screen"  >
            <img className="rounded-full h-96 " src={profile} alt="profile"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>;
}
export default homePage;