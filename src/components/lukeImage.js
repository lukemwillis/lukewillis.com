import React from "react";
import image from "../images/luke.jpg";
 
export default function LukeImage() {
    return (
        <img style={{ borderRadius: "50%", float: "right", height: "10em" }} src={image} alt="Picture of Luke Willis" />
    );
}