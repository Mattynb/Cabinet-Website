import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/home/BrowseRange.css";

const BrowseRange = () => {
  return (
    <section className="browse-range">
      <div className="browse-title">
        <h1>Browse The Range</h1> 
      </div>
      <div className="image-container">
        <div className="image-wrapper">
          <Link to="../shop">
          <img className="imageL" src="https://media.discordapp.net/attachments/1073422681808048231/1232378496760811671/ImageL.png?ex=66293d6a&is=6627ebea&hm=d7fad4efa05dd9960285b9d57cbdf08d968f86f2064866c6b6175b785f938b15&=&format=webp&quality=lossless&width=762&height=960" alt="" />
            <div className="title-bar">Framed</div>
          </Link>
          <Link to="../shop">
            <img className="imageM" src="https://media.discordapp.net/attachments/1073422681808048231/1232378498220429403/FramelessCollec.png?ex=66293d6a&is=6627ebea&hm=0ad8147af9b629c81ab5218a80f05cb5496a7b17495833ab9ce9cf3d0296e1f5&=&format=webp&quality=lossless&width=1790&height=1006" alt="" />
            <div className="title-bar">Frameless</div>
          </Link>
          <Link to="../shop">
            <img className="imageR" src="https://media.discordapp.net/attachments/1073422681808048231/1227323910966476800/kitchenC2.png?ex=6627fd76&is=66158876&hm=4ef65d9ecf13672d28f551788f3d5ee5bae3ebb09e17f3107d764a6d61abb1d4&=&format=webp&quality=lossless&width=1410&height=822" alt="" />
            <div className="title-bar">Universal Design</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;
