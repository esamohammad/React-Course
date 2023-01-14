import React from 'react';
import { FaBeer   } from 'react-icons/fa';
import { AiFillAlert ,AiFillCar,AiFillCrown,AiFillDingtalkSquare } from "react-icons/ai";
import { FcDislike } from "react-icons/fc";

const ReactIcons = () => {
    return (
        <div>
            <h1> Lets go for a <FaBeer />? </h1>
            <h1> Lets go for a <AiFillAlert />? </h1>
            <h1> Lets go for a <AiFillCar />? </h1>
            <h1> Lets go for a <AiFillCrown />? </h1>
            <h1> Lets go for a <AiFillDingtalkSquare />? </h1>
            <h1> Don`t Love <FcDislike />? </h1>
        </div>
    );
};

export default ReactIcons;

//icon use kora r joono ... npm packege nilam ar por documentation ache ... sei onujayi kaj korlei hobe'
// https://react-icons.github.io/react-icons/icons?name=fc
// prottek catagorir jonno akta link import korte hobe;