import axios from "axios";
import { useState } from "react";
import { Facebook,Instagram, Reddit } from "react-bootstrap-icons";
import { Input, Form, Button } from "reactstrap";
import '../component/footerbar.css'

axios.defaults.baseURL = "http://localhost:8000/";

const FooterBar = ()=>{
    const [mail,setMail] = useState({email:""});
    var name,value;

    const handleChange = (e)=>{
        name = e.target.name;
        value = e.target.value;
        setMail({[name]:value})
        console.log(mail);   
    }

    // const submitChange = async ()=>{
    //     console.log("Axios time")
    //     await axios.post(
    //         "subscribe",{ mail}
    //     ).then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }
    
    return(
        <div className="footer-section">
            <footer>
                <div className="footer-seg" id="footer-seg-1">
                    <h3>About us</h3>
                    <p>We are dedicated to collect and preserve the folktales from around the world.</p>
                </div>
                <div className="footer-seg" id="footer-seg-2">
                    <h3>Contact us</h3>
                    <p><a href="/"><Facebook /> Facebook</a></p>
                    <p><a href="/"><Instagram /> Instagram</a></p>
                    <p><a href="/"><Reddit /> Reddit</a></p>
                </div>
                <div className="footer-seg" id="footer-seg-3">
                    <h3>Subscribe to our Newsletter</h3>
                    <div >
                    <Form method="post" action="http://localhost:8000/subscribe">
                    <Input name="email" value={mail.email} type="email" onChange={handleChange}></Input>
                    <Button color="primary" id="footer-seg-3-btn" type="submit" >Subscribe</Button>
                    </Form>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterBar;