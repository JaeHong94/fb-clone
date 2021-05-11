import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      <Post
        profilePic='https://avatars.githubusercontent.com/u/74242937?v=4'
        message='WOW this works!'
        timestamp='This is a tiemstamp'
        username='JaeHong'
        image='https://user-images.githubusercontent.com/74242937/117707948-27ad0680-b20a-11eb-96a8-b35590d765a9.png'
      />
      <Post
        profilePic='https://avatars.githubusercontent.com/u/74242937?v=4'
        message='WOW this works!'
        timestamp='This is a tiemstamp'
        username='JaeHong'
        image='https://user-images.githubusercontent.com/74242937/117707948-27ad0680-b20a-11eb-96a8-b35590d765a9.png'
      />
      <Post
        profilePic='https://avatars.githubusercontent.com/u/74242937?v=4'
        message='WOW this works!'
        timestamp='This is a tiemstamp'
        username='JaeHong'
        image='https://user-images.githubusercontent.com/74242937/117707948-27ad0680-b20a-11eb-96a8-b35590d765a9.png'
      />
    </div>
  );
}

export default Feed;
