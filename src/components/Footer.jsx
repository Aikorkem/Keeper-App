import React from 'react';

function Footer() {
    const date = new Date();
    let year = date.getFullYear();
    return (<footer><p>by Aikorkem ⓒ {year}</p></footer>);
}

export default Footer;