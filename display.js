import React, { useState } from 'react';
import HappyImage from './happy.png';
import LikeImage from './like.png';
import SadImage from './sad.png';
 
function EmojiDisplay() {
  const [inputText, setInputText] = useState('');
  const [imageSrc, setImageSrc] = useState('');
 
  // Function to update the image based on input text
  const handleInputChange = (event) => {
    const text = event.target.value.toLowerCase();
    setInputText(text);
 
    // Check input and update the image source
    if (text == 'happy') {
      setImageSrc(HappyImage);
    } else if (text == 'like') {
      setImageSrc(LikeImage);
    } else if (text =='sad') {
      setImageSrc(SadImage);
    } else {
      setImageSrc(''); // Clear the image if input doesn't match
    }
  };
 
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Emoji Display</h2>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type 'happy', 'like', or 'sad'"
        style={{ padding: '10px', fontSize: '16px', width: '250px' }}
      />
      <div style={{ marginTop: '20px' }}>
        {imageSrc ? (
          <img src={imageSrc} alt={inputText} style={{ width: '100px', height: '100px' }} />
        ) : (
          <p>Type "happy", "like", or "sad" to see an emoji</p>
        )}
      </div>
    </div>
  );
}
 
export default display;
