import React from "react";

function Footer(props){
    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Menu</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our address</h5>
                        <address>
                            Khu Giáo dục và Đào tạo – Khu Công nghệ cao Hòa Lạc – Km29 Đại lộ Thăng Long, H. Thạch Thất, TP. Hà Nội <br/>
                            <i className="fa fa-phone fa-lg"></i>: 024 7300 1866 <br/>
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:daihocfpt@fpt.edu.vn">daihocfpt@fpt.edu.vn</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://"><i className="fa fa-google-plus fa-lg"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://"><i className="fa fa-facebook fa-lg"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://"><i className="fa fa-youtube fa-lg"></i></a>
                            <a className="btn btn-social-icon" href="http://"><i className="fa fa-envelope fa-lg"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>@ Copyright @2021 - FPTU</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;