import videoBg from "../assets/background.mp4";
import { Link, Route, Routes } from "react-router-dom";
import "./about.css";

export function About () {
    return (
        <div className="container">
            <video src={videoBg} autoPlay loop muted/>
            <div className="content">
                <h3 className="animate__animated animate__bounceInLeft animate__delay-1s">Kosong</h3>
                <p className="animate__animated animate__bounceInLeft animate__delay-2s">Males Ngisi nya</p>
            </div>
            <div className="home">
                <p><Link to="/">Home</Link></p>
            </div>
        </div>
    )
}