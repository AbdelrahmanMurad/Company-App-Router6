import { Fragment } from "react";
import { ImagesComponent } from "../components/ImagesComponents";
import { LoremComponent } from "../components/LoremComponent";
import img1 from "../resources/img/1.jpg";
import img6 from "../resources/img/6.jpg";
import img2 from "../resources/img/2.jpg";
import img3 from "../resources/img/3.jpg";
import img5 from "../resources/img/5.jpg";
import { ContactComponent } from "../components/ContactComponent";
import { NavLink } from "react-router-dom";

export let HomePage = () => {
    return (
        <Fragment>
            <div className="main-cover">
                <div className="overllay">
                    <div className="Cover-content">
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing </h1>
                        <p>
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris
                        </p>
                        <NavLink to={"/about"}>about us</NavLink>
                    </div>
                </div>
            </div>
            <section id="about">
                <div className="about flex main-container">
                    <ImagesComponent image={img3} title={"project title can be here"} />
                    <div className="item pt-30">
                        <span className="green u-text-sup">ABOUT US</span>
                        <h2>
                            Lorem ipsum dolor sit amet</h2>
                        <LoremComponent />

                        <div>
                            <NavLink className={"green-btn"} to={"/about"}>Read More</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section id="project">
                <div className="text-center">
                    <span className="green u-text-sup  ">Project</span>
                    <h2>We Offer Quality Service For Your Business </h2>
                </div>
                <div className="flex project pt-30">
                    <ImagesComponent image={img1} title={"project title can be here"} />
                    <ImagesComponent image={img6} title={"project title can be here"} />
                    <ImagesComponent image={img2} title={"project title can be here"} />
                </div>
                <div className="flex project">
                    <ImagesComponent image={img3} title={"project title can be here"} />
                    <ImagesComponent image={img5} title={"project title can be here"} />
                    <ImagesComponent image={img6} title={"project title can be here"} />
                </div>
            </section>
            <ContactComponent />
        </Fragment>
    );
}