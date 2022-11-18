import videoBg from "../assets/background.mp4";
import Animeted from "../assets/animated.gif";
import "./profile.css"
import { Link, Route, Routes } from "react-router-dom";

export function Profile () {
    return (
        <div className="container">
            <video src={videoBg} autoPlay loop muted/>
            <div className="logo">
                <img src={Animeted} alt="" />
            <div className="overlay">
            </div>
            </div>
            <div className="nama">
                <h3 className="animate__animated animate__zoomIn animate__infinite">GakTau</h3>
            </div>
            <div className="game">
            <p className="animate__animated animate__bounceInLeft animate__delay-1s">★ Minecraft</p>
            <p className="animate__animated animate__bounceInLeft animate__delay-2s">★ Valorant</p>
            <p className="animate__animated animate__bounceInLeft animate__delay-3s">★ Pubg Mobile</p>
            <p className="animate__animated animate__bounceInLeft animate__delay-4s">★ Point Blank</p>
            </div>

            <div className="home">
                <p><Link to="/">Home</Link></p>
            </div>
        </div>
        
    )
}