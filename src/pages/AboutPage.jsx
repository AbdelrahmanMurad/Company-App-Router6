import { Fragment } from "react";
import { ImagesComponent } from "../components/ImagesComponents";
import img3 from "../resources/img/3.jpg";
import { LoremComponent } from "../components/LoremComponent";
import { NavLink } from "react-router-dom";


export let AboutPage = () => {
    return (
        <Fragment>
            <div className="cover-page">
                <div className="tit">
                    <h1>about us</h1>
                    <ul className="breadcrumb">
                        <li><NavLink className={(props) => props.isActive ? "active" : ""} to={"/"} >Home</NavLink></li>
                        <li><NavLink className={(props) => props.isActive ? "active" : ""}>About us</NavLink></li>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum,
                        nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
                        congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis
                        sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc
                        sagittis dictum nisi, sed ullamcorper ipsum dignissim .
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum,
                        nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
                        congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis
                        sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc
                        sagittis dictum nisi, sed ullamcorper ipsum dignissim .
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum,
                        nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
                        congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis
                        sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc
                        sagittis dictum nisi, sed ullamcorper ipsum dignissim .
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum,
                        nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
                        congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis
                        sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc
                        sagittis dictum nisi, sed ullamcorper ipsum dignissim .
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum,
                        nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
                        congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis
                        sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc
                        sagittis dictum nisi, sed ullamcorper ipsum dignissim .
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum,
                        nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
                        congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis
                        sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc
                        sagittis dictum nisi, sed ullamcorper ipsum dignissim .
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum,
                        nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
                        congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis
                        sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc
                        sagittis dictum nisi, sed ullamcorper ipsum dignissim .
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum,
                        nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
                        congue eget, auctor vitae massa.

                    </p>
                </div>
            </section>
        </Fragment>
    );
}