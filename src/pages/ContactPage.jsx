import { NavLink } from "react-router-dom";
import { ContactComponent } from "../components/ContactComponent";
import { MapFrameComponent } from "../components/MapFrameComponent";

export let ContactPage = () => {
    return (
        <>
            <div className="cover-page">
                <div className="tit">
                    <h1>contact us</h1>
                    <ul className="breadcrumb">
                        <li><NavLink className={(props) => props.isActive ? "active" : ""} to={"/"} >Home</NavLink></li>
                        <li><NavLink className={(props) => props.isActive ? "active" : ""}>contact us</NavLink></li>
                    </ul>
                </div>
            </div>
            <ContactComponent />
            <MapFrameComponent />
        </>
    );
}