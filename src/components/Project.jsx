import React from "react";
import "react-bootstrap";
import "../App.css";
import keeper from "../photos/keeper.png";
import drumKit from "../photos/DrumkitWebsite.png";
import eCommerce from "../photos/E-CommerceWebsite.png";

function project() {
    return <section className=" projectGradient mt-40 pb-20" id="projectPage">
    {/* text-gradient bg-gradient-to-r from-red-500 to-blue-500 */}
        <h4 className="text-center font-bold pt-20 mb-20">Projects</h4>
        <div className="grid  gap-y-12 grid-cols-2 mx-20">
            <div className="flex justify-center">
                <div className="card w-5/6 ">
                    <img src={keeper} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Keeper - Notes and Lists</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#0" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="card w-5/6 ">
                    <img src={drumKit} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#0" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="card w-5/6 ">
                    <img src={eCommerce} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#0" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div> <div className="flex justify-center">

                <div className="card w-5/6 ">
                    <img src={eCommerce} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#0" class="btn btn-primary">Go somewhere</a>

                    </div>
                </div>
            </div>
            </div>
        </div>

    </section>;
}

export default project;