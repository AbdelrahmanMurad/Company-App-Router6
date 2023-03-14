export let ContactComponent = () => {
    return (
        <>
            <section id="contactus">
                <div className="flex ">
                    <div className="item w-40">
                        <div>
                            <span className="green u-text-sup">CONTACT US
                            </span>
                            <h2>Feel Free To Contact Us</h2>
                        </div>
                        <div className="flex ">
                            <div className="item contact-info mt-30">
                                <div className="flex">
                                    <div className="item">
                                        <i className="fa fa-phone"></i> <a href="https://www.google.com/">00 7625 98626</a>
                                    </div>
                                    <div className="item">
                                        <i className="fa fa-envelope"></i> <a href="https://www.gmail.com/">info@info.com</a>
                                    </div>
                                </div>
                                <div className="flex mt-30">
                                    <div className="item">
                                        <i className="fa fa-map"></i> <a href="https://www.google.com/">address of company can be here</a>
                                    </div>
                                    <div className="item">
                                        <i className="fa fa-fax"></i> <a href="https://www.google.com/">00 7625 98626</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item w-60">
                        <div className="">
                            <div>
                                <span className="green u-text-sup"> Get in touch
                                </span>
                                <h2>Please submit your request so that one of our consultants will contact you soon!</h2>
                            </div>
                            <form>
                                <input type="text" id="name" name="name" placeholder="Your name.." />
                                <input type="text" id="lname" name="lastname" placeholder="Your Subject.." />
                                <input type="tel" id="phone" name="lastname" placeholder="Your phone.." />
                                <textarea id="subject"
                                    name="subject"
                                    placeholder="Write something.."
                                //   style="height:200px"
                                ></textarea>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}