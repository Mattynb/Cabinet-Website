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
          <img className="imageL" src="https://media.discordapp.net/attachments/1215179484110790706/1226253331023003790/ImageL.jpg?ex=66241868&is=6611a368&hm=f9b040ffad011854fe5216b19f5cbf12bb663176410d351ddbbafc861a07b010&=&format=webp&width=936&height=702" alt="" />
            <div className="title-bar">Framed</div>
          </Link>
          <Link to="../shop">
            <img className="imageM" src="https://media.discordapp.net/attachments/1215179484110790706/1226253330083221547/TGW-OSCC.jpg?ex=66241868&is=6611a368&hm=6367f7eb96a3a14d069106184be3a6f9e70f65d31def58740430e6c38fe8875c&=&format=webp&width=1248&height=702" alt="" />
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
