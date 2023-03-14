import { ContactComponent } from "../components/ContactComponent";
import { MapFrameComponent } from "../components/MapFrameComponent";

export let ContactPage = () => {
    return (
        <>
            <div className="cover-page">
                <div className="tit">
                    <h1>contact us</h1>
                    <ul className="breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li><a href="#" className="active">contact us</a></li>
                    </ul>
                </div>
            </div>
            <ContactComponent />
            <MapFrameComponent />
        </>
    );
}