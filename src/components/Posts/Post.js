import React from 'react';
import './posts.scss';

function Post({photo, name, nickname, date, content, image}) {
    return (
        <div className='postContent'>
            <img className='ava' src={photo} />
            <div className='content'>
                <div className='contentText'>
                    <p className='name'>{name}</p>
                    <p className='nickName'> {nickname}</p>
                    <p className='date'> • {date}</p>
                </div>
                <p className='content'>{content}</p>
                <img className='image' src={image} />
            </div>
        </div>
    )
}

export default Post;