import { Fragment } from "react";
import { ImagesComponent } from "../components/ImagesComponents";
import img3 from "../resources/img/3.jpg";
import { LoremComponent } from "../components/LoremComponent";


export let AboutPage = () => {
    return (
        <Fragment>
            <div className="cover-page">
                <div className="tit">
                    <h1>about us</h1>
                    <ul className="breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li><a href="#" className="active">About us</a></li>
                    </ul>
                </div>
            </div>
            <section id="about">
                <div className="about flex main-container mt-30">
                    <div className="item">
                        <ImagesComponent image={img3} title={"title can be here"} />
                    </div>
                    <div className="item pt-30">
                        <span className="green u-text-sup">ABOUT US</span>
                        <h2>
                            Lorem ipsum dolor sit amet</h2>
                        <LoremComponent />
                    </div>
                </div>
                <div className="about">
                    <p className="mt-30">
                        <LoremComponent />
                        <LoremComponent />
                        <LoremComponent />
                        <LoremComponent />
                        <LoremComponent />
                        <LoremComponent />
                        <LoremComponent />
                        <LoremComponent />
                    </p>
                </div>
            </section>
        </Fragment>
    );
}