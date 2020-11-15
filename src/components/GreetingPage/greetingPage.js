/* src/components/GreetingPage/greetingPage.js */

import React from "react";
import { useParams } from "react-router-dom";
import Greet from "../Greet/Greet";

const hi = {
    textAlign: "center",
    margin: "1rem"
};
const wave = {
    ...hi,
    fontSize: "5rem"
};

const GreetingPage = () => {
    const { who = "nobody" } = useParams();
    return (
        <Greet name={who}/>
    );
}

export default GreetingPage;
