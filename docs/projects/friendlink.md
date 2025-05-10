---
title: 友链制作
---

```jsx
import type React from "react";

interface FriendProps {
  name: string;
  url: string;
  avatar: string;
  bio: string;
}

const getRandomBackgroundColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const alpha = 0.5; // Semi-transparent
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const FriendLink: React.FC<FriendProps> = ({ name, url, avatar, bio }) => {
  return (
    <a
      target="_blank"
      href={url}
      title={name}
      className="friend-link"
      style={{
        backgroundColor: getRandomBackgroundColor(),
        textDecoration: "none",
        color: "inherit",
      }}
      rel="noopener noreferrer"
    >
      <div className="friend-link-div">
        <div className="friend-link-avatar">
          <img
            src={avatar}
            alt={`${name}'s avatar`}
          />
        </div>

        <div className="friend-link-info">
          <div className="friend-name-div">
            {/* <i className="fas fa-user-circle fa-fw"></i> */}
            <span className="friend-name">{name}</span>
          </div>
          <p className="friend-bio">{bio}</p>
        </div>
      </div>
    </a>
  );
};

export default FriendLink;
```