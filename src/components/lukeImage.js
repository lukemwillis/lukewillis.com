import React from "react";
import image from "../assets/luke.jpg";
 
export default function LukeImage() {
    return (
        <img style={{ borderRadius: "50%", float: "right", height: "10em", margin: "0.5em" }} src={image} alt="Luke Willis" />
    );
}