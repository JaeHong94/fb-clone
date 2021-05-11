import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
        image='https://user-images.githubusercontent.com/74242937/117701869-b7e74d80-b202-11eb-9635-93cb99098338.png'
        profileSrc='https://user-images.githubusercontent.com/74242937/117701077-c41edb00-b201-11eb-8abf-b1f1f866c323.png'
        title='브라운'
      />
      <Story
        image='https://user-images.githubusercontent.com/74242937/117701916-c6ce0000-b202-11eb-8aed-6b7a10e5dc76.png'
        profileSrc='https://user-images.githubusercontent.com/74242937/117701186-e7498a80-b201-11eb-99bc-7f96efce8a45.png'
        title='코니'
      />
      <Story
        image='https://user-images.githubusercontent.com/74242937/117701961-d5b4b280-b202-11eb-9075-4e8d4ed0dc42.png'
        profileSrc='https://user-images.githubusercontent.com/74242937/117701261-fa5c5a80-b201-11eb-8905-36da530e30b1.png'
        title='샐리'
      />
      <Story
        image='https://user-images.githubusercontent.com/74242937/117702040-f41aae00-b202-11eb-8b11-e043caeb2b3a.png'
        profileSrc='https://user-images.githubusercontent.com/74242937/117701310-09430d00-b202-11eb-8f70-3877a6abbcce.png'
        title='초코'
      />
      <Story
        image='https://user-images.githubusercontent.com/74242937/117702011-e82eec00-b202-11eb-8749-4c32d80354c9.png'
        profileSrc='https://user-images.githubusercontent.com/74242937/117701349-16f89280-b202-11eb-8dbd-703e26990763.png'
        title='문'
      />
    </div>
  );
}

export default StoryReel;
