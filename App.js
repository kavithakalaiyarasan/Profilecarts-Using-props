import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css';

function App() {
  const user1 = {
    name: "Dhuruvan",
    imgSrc: "data:image/jpeg;base64,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",
    
    jobTitle: "Frontend Developer",
  };

  const user2 = {
    name: "Dhiya",
    imgSrc: "data:image/jpeg;base64,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",
    jobTitle: "UI/UX Designer",
  };

  return (
    <div className="App">
      <h1>Profile Cards</h1>
      <div className="profile-cards">
        <ProfileCard name={user1.name} imgSrc={user1.imgSrc} jobTitle={user1.jobTitle} />
        <ProfileCard name={user2.name} imgSrc={user2.imgSrc} jobTitle={user2.jobTitle} />
      </div>
    </div>
  );
}

export default App;