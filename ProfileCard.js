import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';

function ProfileCard({ name, imgSrc, jobTitle }) {
  return (
    <div className="profile-card">
      <ProfileImage imgSrc={imgSrc} altText={name} />
      <ProfileInfo name={name} jobTitle={jobTitle} />
    </div>
  );
}

export default ProfileCard;
