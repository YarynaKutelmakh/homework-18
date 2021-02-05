import React from 'react';
import Post from './Post';
import ALINA_IMAGE from '../img/alina.webp';
import ALINA_POST from '../img/city.jpg';
import VERONIKA_POST from '../img/post-veronika.jpg';
import VERONIKA_IMAGES from '../img/veronika-images.jfif';

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";


const authors = [
    {
        name: "Anakin Skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader",
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        image: RAY_IMAGE,
        date: "26 квт."
    }, {
        name: "Alina ",
        photo: ALINA_IMAGE,
        nickname: "@alinnaaaa209",
        content: "Good Morning ...)",
        image: ALINA_POST,
        date: "2 бер."
    }, {
        name: "Veronika Volker",
        photo: VERONIKA_IMAGES,
        nickname: "@ver_vol",
        content: "Studying time:)",
        image: VERONIKA_POST,
        date: "16 лют."
    }
]

function Posts() {
    return(
        <div>
            {authors.map((post, i) => <Post {...post} key={i} />)}
        </div>
    );
}
export default Posts;