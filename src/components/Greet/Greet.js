/* src/components/GreetingPage/greetingPage.js */

import React from "react";
import { string } from 'prop-types';

const hi = {
    textAlign: "center",
    margin: "1rem"
};
const wave = {
    ...hi,
    fontSize: "5rem"
};

const Greet = (props) => {
    const {name} = props;

    return (
        <div>
            <h1 style={hi}>Hello, {name}!</h1>
            <h1 style={wave}>{"\uD83D\uDC4B"}</h1>
        </div>
    );
}

export default Greet;

Greet.propTypes = {
    name : string.isRequired
}
