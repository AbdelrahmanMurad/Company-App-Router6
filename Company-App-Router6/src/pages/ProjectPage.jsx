import img1 from "../resources/img/1.jpg";
import img6 from "../resources/img/6.jpg";
import img2 from "../resources/img/2.jpg";
import img3 from "../resources/img/3.jpg";
import img5 from "../resources/img/5.jpg";
import main from "../resources/img/main-cover.png";
import { ImagesComponent } from "../components/ImagesComponents";

export let ProjectPage = () => {
    return (
        <>
            <div className="cover-page">
                <div className="tit">
                    <h1>Project</h1>
                    <ul className="breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li><a href="#" className="active">project</a></li>
                    </ul>
                </div>
            </div>
            <section id="project">
                <div className="flex project pt-30">
                    <ImagesComponent image={img2} title={"project title can be here"} />
                    <ImagesComponent image={img3} title={"project title can be here"} />
                    <ImagesComponent image={main} title={"project title can be here"} />
                </div>
                <div className="flex project pt-30">
                    <ImagesComponent image={img5} title={"project title can be here"} />
                    <ImagesComponent image={img6} title={"project title can be here"} />
                    <ImagesComponent image={main} title={"project title can be here"} />
                </div>
                <div className="flex project pt-30">
                    <ImagesComponent image={img2} title={"project title can be here"} />
                    <ImagesComponent image={main} title={"project title can be here"} />
                    <ImagesComponent image={img5} title={"project title can be here"} />
                </div>
                <div className="flex project pt-30">
                    <ImagesComponent image={img2} title={"project title can be here"} />
                    <ImagesComponent image={img6} title={"project title can be here"} />
                    <ImagesComponent image={main} title={"project title can be here"} />
                </div>
                <div className="flex project">
                    <ImagesComponent image={main} title={"project title can be here"} />
                    <ImagesComponent image={img3} title={"project title can be here"} />
                    <ImagesComponent image={img2} title={"project title can be here"} />
                </div>
            </section>
        </>
    );
}