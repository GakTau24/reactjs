import videoBg from "../assets/background.mp4";
import "./Home.css";
import 'animate.css';
import { Link, Route, Routes } from "react-router-dom";

export function Home () {
    return (
        <div className="container">
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop/>
            <div className="content">
            <h1 className="animate__animated animate__tada animate__infinite">WELCOME
             <span className="to">TO</span></h1>
            <div className="link">
            <a className="animate__animated animate__bounceInLeft animate__delay-1s">
                <Link to="/profile" >Profile</Link></a>
            <a className="animate__animated animate__bounceInLeft animate__delay-2s">
                <Link to="/media-sosial">Sosial Media</Link></a>
            <a className="animate__animated animate__bounceInLeft animate__delay-3s">
                <Link to="/about">About Me</Link></a>
            </div>
            </div>
            <div className="home">
                <p><Link to="/">Home</Link></p>
            </div>
            <footer className="footer">
                Made By ❤
            </footer>
        </div>
    )
}