/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import navValues from "../helpers/navValues";
import { navigationContext } from "./app";
import { logo } from "./banner.module.css";
import { subtitleStyle } from "./banner.module.css";



const Banner = ({ children }) => {
    const { navigate } = useContext(navigationContext);
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src="./GloboLogo.png"
                    alt="logo"
                    className={logo}
                    onClick={() => navigate(navValues.home)}
                />
            </div>
            <div className="col-7 mt-5" >
                <div className={subtitleStyle}>
                    {children}
                </div>
            </div>
        </header>
    );
};

export default Banner;