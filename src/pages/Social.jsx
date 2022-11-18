import videoBg from "../assets/background.mp4";
import { Link, Route, Routes } from "react-router-dom";
import "./sosial.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

export function Social () {
    return (
        <div className="container">
            <video src={videoBg} autoPlay loop muted/>
            <div className="wrapper">
                <div className="judul animate__animated animate__bounceInDown">
                    <div className="media">Media Sosial</div>
                </div>
                <div className="card1 animate__animated animate__bounceInLeft animate__delay-1s">
                    <h1>Instagram</h1>
                    <div className="icons">
                        <a href="https://www.instagram.com/adhiyaksa_24/" className="iconsig">
                        <BsInstagram/>
                        </a>
                    </div>
                    <a>Click Icon Instagram</a>
                </div>
                <div className="card2 animate__animated animate__bounceInRight animate__delay-3s">
                    <h1>Facebook</h1>
                    <div className="icons">
                        <a href="https://www.facebook.com" className="iconsfb">
                        <BsFacebook/>
                        </a>
                    </div>
                    <a>Click Icon Facebok</a>
                </div>
                <div className="card3 animate__animated animate__bounceInLeft animate__delay-2s">
                    <h1>Discord</h1>
                    <div className="icons">
                        <a href="https://discord.gg/VTwKusPh3P" className="iconsds">
                        <FaDiscord/>
                        </a>
                    </div>
                    <a>Click Icon Discord</a>
                </div>
                <div className="card4 animate__animated animate__bounceInLeft animate__delay-4s">
                    <h1>Youtube</h1>
                    <div className="icons">
                        <a href="https://youtube.com" className="iconsyt">
                        <BsYoutube/>
                        </a>
                    </div>
                    <a>Click Icon Youtube</a>
                </div>
            </div>
            <div className="home">
                <p><Link to="/">Home</Link></p>
            </div>
        </div>
    )
}