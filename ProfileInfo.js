import React from 'react';

function ProfileInfo({ name, jobTitle }) {
  return (
    <div className="profile-info">
      <h2>{name}</h2>
      <p>{jobTitle}</p>
    </div>
  );
}

export default ProfileInfo;
