import React from "react";
import htmlIcon from "../photos/file-type-html.svg";
import cssIcon from "../photos/file-type-css.svg";
import bootstrapIcon from "../photos/bootstrap.svg";
import tailwindcssIcon from "../photos/tailwindcss-dark.svg";
import javascriptIcon from "../photos/javascript.svg";
import jqueryIcon from "../photos/jquery.svg";
import nodeIcon from "../photos/nodejs.svg"
import gitIcon from "../photos/git.svg";
import githubIcon from "../photos/github-fill.svg";
import reactIcon from "../photos/react-dark.svg";
import pythonIcon from "../photos/python-dark.svg";
import apiIcon from "../photos/api.svg";
import figmaIcon from "../photos/figma-light.svg";

function aboutMe() {
    return <div className="mt-40">
        <h2 className="text-center font-bold">About Me</h2>
        <h4 className="text-center mt-12 font-bold">What technologies i Know ?</h4>
        <div className="mt-6">
            <div>
                <div class="flex flex-nowrap justify-center" >

                    <div className=" m-6">
                        <img className="h-24 w-24 text-black" src={htmlIcon} />
                        <p className="paraTag font-bold text-lg">HTML</p>
                    </div>
                    <div className=" m-6">
                        <img className="h-24 w-24 text-black" src={cssIcon} />
                        <p className="paraTag font-bold text-lg">CSS</p>
                    </div>
                    <div className=" m-6">
                        <img className="h-24 w-24 text-black" src={bootstrapIcon} />
                        <p className="paraTag font-bold text-lg">Booptstrap</p>
                    </div>
                    <div className=" m-6">
                        <img className="h-24 w-24 text-black" src={tailwindcssIcon} />
                        <p className="paraTag font-bold text-lg">Tailwind CSS</p>
                    </div>
                    <div className=" m-6">
                        <img className="h-24 w-24 text-black" src={javascriptIcon} />
                        <p className="paraTag font-bold text-lg">Javascript js</p>
                    </div>
                    <div className=" m-6">
                        <img className="h-24 w-24 text-black" src={jqueryIcon} />
                        <p className="paraTag font-bold text-lg">Jquery</p>
                    </div>
                    <div className=" m-6">
                        <img className="h-24 w-24 text-black" src={nodeIcon} />
                        <p className="paraTag font-bold text-lg">Node js</p>
                    </div>

                </div>


            </div>
        </div>

        <div>
            <div>
                <div class="flex flex-nowrap justify-center " >
                    <div className=" m-6">
                        <img className="h-24 w-24 text-black" src={gitIcon} />
                        <p className="paraTag font-bold text-lg">Git</p>
                    </div>

                    <div className=" m-6 ">
                        <img className="h-24 w-24 text-black" src={githubIcon} />
                        <p className="paraTag font-bold text-lg">Github</p>
                    </div>
                    <div className=" m-6">
                        <img className="h-24 w-24 text-black" src={reactIcon} />
                        <p className="paraTag font-bold text-lg">React</p>
                    </div>
                    <div className=" m-6">
                        <img className="h-24 w-24 text-black" src={pythonIcon} />
                        <p className="paraTag font-bold text-lg">Python</p>
                    </div>
                    <div className=" m-6">
                        <img className="h-24 w-24 text-black" src={apiIcon} />
                        <p className="paraTag font-bold text-lg">API</p>
                    </div>
                    <div className=" m-6">
                        <img className="h-24 w-24 text-black" src={figmaIcon} />
                        <p className="paraTag font-bold text-lg">Figma</p>
                    </div>


                </div>
            </div>

            <div className="mt-20">

                <div className="mx-20 ">
                    <p className="mx-40 text-lg border-solid border-1 border-gray-800 shadow shadow-gray-200 rounded-3xl p-10 text-white bg-gray-900 font-medium" >Welcome to my web portfolio! I'm a front-end developer with expertise in HTML, CSS, Bootstrap, Tailwind CSS, and JavaScript. I specialize in crafting visually appealing and responsive web interfaces. My notable skills include React, where I excel in component-based development and virtual DOM manipulation, along with React hooks for efficient state management.<br /><br />

                        I've also worked with jQuery for DOM manipulation, improving user experiences on websites. On the server-side, I'm proficient in Node.js, enabling me to build robust back-end systems. Git and GitHub are essential tools I use for version control and collaboration in software development.<br /><br />

                        Currently, I'm diving deeper into React, exploring advanced topics and cutting-edge frameworks like Next.js and Three.js. My passion for staying up-to-date with the latest technologies ensures I can deliver exceptional user experiences.<br /><br />

                        Thank you for visiting my portfolio, and I'd love to discuss how my expertise can contribute to your next web development project!</p>
                </div>
            </div>
        </div>
    </div>;
}
export default aboutMe;