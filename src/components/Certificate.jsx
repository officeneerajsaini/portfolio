import React from "react";
import webCertificate from "../photos/web_develoment_cert.jpg";
import metaPythonCertificate from "../photos/meta_python.jpg";
import ibmPythonCertificate from "../photos/Ibm_python.jpg";
import skillIndiaWebCertificate from "../photos/webDesign.jpg";
import "../App.css";

function cartificate() {
    return <div id="certificatePage">
        <h4 className="text-center mt-20 mb-20 font-bold">Certificates</h4>
        <div className="grid  gap-y-12 grid-cols-2 mx-20">
            <div className="flex justify-center">
                <div className="card w-5/6 bg-secondary text-light bg-secondary text-light">
                    <img src={webCertificate} className="card-img-top scale-95" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title font-bold">Udemy :- The Complete 2023 Web Development Bootcamp by Dr. Angela Yu</h5>
                        <p className="card-text"><span className="font-bold">Skills :-</span> <span className="font-medium">Front-End Web Development -</span> HTML 5, CSS 3, Bootstrap 5, Javascript ES6 , DOM Manipulation, jQuery, Bash Command Line, Git, GitHub and Version Control<br/> 
                        <span className="font-semibold">Backend Web Development -</span> Node.js, NPM, EJS, REST, APIs, React.js </p>
                        <a href="https://www.udemy.com/certificate/UC-aeff1a71-6a58-4ebe-a865-513b4f86ea0c/" class="btn btn-primary">view Certificate</a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="card w-5/6 bg-secondary text-light ">
                    <img src={metaPythonCertificate} className="card-img-top scale-95" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Meta :- Programming in Python</h5>
                        <p className="card-text">Variable , Data types , control flow and conditionals , Function and Data Structure , Errors Exceptions and file handling , Procedural programming ,  Functional Programming , Object Oriented Programming , Modules , Popular Packages , Libraries and Frameworks , Testing tools , Graded Assignment , Course wrap up or so much more ....</p>
                        <a href="https://coursera.org/share/af9a697f8122bb58be8b6fd636e5d791" class="btn btn-primary">view Certificate</a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="card w-5/6 bg-secondary text-light ">
                    <img src={ibmPythonCertificate} className="card-img-top scale-95" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">IBM :- Python for Data Science, Ai & Development </h5>
                        <p className="card-text">Types , Expressions  and variables , String Operations , Python Data Structure , Lists and Tuples , Dictionaries , Sets , Python Programming Fundamentals , Conditions  and Branching , Loops , Functions , Exception Handling , Objects and Classes , Practice Lab , Working with Data in Python ,    Reading and Writing Files with Open , NPM Panda , Npm Numpy in Python , APIs  and Data Collection , Simple APIs , REST APIs , Webscraping and Working , Final Exam , Course Wrap up or so much more ..</p>
                        <a href="https://coursera.org/share/4d36a3ce9d7bdfcf6b41c0bbb0c4e9b8" class="btn btn-primary">view Certificate</a>
                    </div>
                </div>
            </div>
            <div> <div className="flex justify-center">

                <div className="card w-5/6 bg-secondary text-light ">
                    <img src={ skillIndiaWebCertificate} className="card-img-top scale-95" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Certificate of Participation</h5>
                        <p className="card-text">Web Design & Web Development</p>
                        <a href="#0" class="btn btn-primary">view Certificate</a>

                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>;
}

export default cartificate;