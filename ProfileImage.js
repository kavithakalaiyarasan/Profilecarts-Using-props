import React from 'react';

function ProfileImage({ imgSrc, altText }) {
  return <img src={imgSrc} alt={altText} className="profile-img" />;
}

export default ProfileImage;
