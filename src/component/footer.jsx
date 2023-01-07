import React from "react";
import { Facebook, Instagram, Reddit } from "react-bootstrap-icons";
import './footer.css';

const Footer =()=>{

    return(
        <>
        <div>
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-5 border-top bg-dark">
                <div class="col-md-4 px-3 d-flex align-items-center">
                    <span class="text-muted footer-main">Copyright © 2023 Ternatom, All Rights Reserved</span>
                </div>
                <div>
                    <a className="footer-icon" href="/"><Facebook color="black" size={25} /></a>
                    <a className="footer-icon" href="/"><Instagram color="black" size={25} /></a>
                    <a className="footer-icon" href="/"><Reddit color="black" size={25} /></a>
                </div>

            </footer>
        </div>
        </>
    )
}

export default Footer;