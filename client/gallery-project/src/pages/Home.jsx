import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Home.css"
import Footer from "../components/Footer.jsx";

export default function Home() {
    const date = new Date();
    const fullDate = date.toLocaleDateString("id-ID",{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
    return (
        <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <Navbar />
        <div className="main">
           <div className="text-main h3">We Are No Counter</div>
           <div className="line-header"></div>
           <div className="date-time h5"><span className="h1 date-animate">.  </span>{fullDate}</div>
           <div className="to-gallery"><Link to="/gallery" className="link-header">To Gallery {">"}</Link></div>
           {/* <img src="https://picsum.photos/seed/picsum/500/300" alt="images" className="img" id="img-1" /> */}
           <hr  className="hr"/>
        </div>
        <div className="container page-2">
            <div className="vertical-line"></div>
            <h1 className="header-text">Struktur Kelas</h1>
            <div className="roadmap">
                 <div className="roadmap-line"></div>
            <div className="roadmap-radio-1"></div>
            <div className="roadmap-radio-2"></div>
            <div className="roadmap-radio-3"></div>
            </div>
            <div className="content-roadmap">
                <div className="walkel-title">Wali Kelas <br /><span className="content-title">Ibu Hj Sukeni</span></div>
                <div className="ketkel-title">Ketua Kelas <br /> <span className="content-tile">Agus Maulana</span></div>
                <div className="wakel-title">Wakil Ketua Kelas <br /> <span className="content-tile">Widiyanti</span></div>
            </div>
            <div className="roadmap-1">
                 <div className="roadmap-line-1"></div>
            <div className="roadmap-radio-1-1"></div>
            <div className="roadmap-radio-2-1"></div>
            </div>
            <div className="content-roadmap-1">
                <div className="walkel-title-1">Bendahara <br /><span className="content-title">Jessica Anastasya - Ilma Amalia</span></div>
                <div className="ketkel-title-1">Sekretaris <br /> <span className="content-tile">Alisyah Fitri - Cintia Bella</span></div>
            </div>
        </div>
        <hr />
        <Footer />
        </>
    );
}

