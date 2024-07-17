import React from "react";
import { AboutUsWrapper, Card, AboutUsLogo, AvatarLogo } from "./design.styled";
import GitHub from './images/github.png';
import Avatar from './images/avatar.png';
const AboutUs = () => {
    return (
        <div>
        <AboutUsWrapper>
            <Card>
                <AvatarLogo src={Avatar} alt="avatar"/>
                <h1>Eldar Catovic</h1>
                <h4>Novi Pazar, Serbia</h4>
                <p>Eldar is certified frontend developer</p>
                <a href="https://github.com/eldarcatovic13"><AboutUsLogo src={GitHub} alt="logo"/></a>
            </Card>
            <Card>
                <AvatarLogo src={Avatar} alt="avatar"/>
                <h1>Davud Halitovic</h1>
                <h4>Novi Pazar, Serbia</h4>
                <p>Davud is certified frontend developer</p>
                <a href="https://github.com/davudhalitovic"><AboutUsLogo src={GitHub} alt="logo"/></a>
            </Card>
            <Card>
                <AvatarLogo src={Avatar} alt="avatar"/>
                <h1>Dzenis Fejzovic</h1>
                <h4>Novi Pazar, Serbia</h4>
                <p>Dzenis is certified frontend developer</p>
                <a href="https://github.com/DzenisFejzovic"><AboutUsLogo src={GitHub} alt="logo"/></a>
            </Card>
            <Card>
                <AvatarLogo src={Avatar} alt="avatar"/>
                <h1>Enes Korac</h1>
                <h4>Novi Pazar, Serbia</h4>
                <p>Enes is certified frontend developer</p>
                <a href="https://github.com/koracenes"><AboutUsLogo src={GitHub} alt="logo"/></a>
            </Card>
        </AboutUsWrapper>
    </div>
    );
}

export default AboutUs;