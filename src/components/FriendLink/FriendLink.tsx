import type React from "react";
import "./FriendLink.css";

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
const fallbackAvatar = (event: React.SyntheticEvent<HTMLImageElement>) => {
  const target = event.target as HTMLImageElement;
  target.onerror = null; // Prevent infinite loop
  target.src = "/momo.png"; // Fallback URL
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
            onError={(event) => fallbackAvatar(event)}
          />
        </div>

        <div className="friend-link-info">
          <div className="friend-name-div">
            <span className="friend-name">{name}</span>
            <i className="i-hugeicons-cursor-magic-selection-02 px-3" />
          </div>
          <p className="friend-bio">{bio}</p>
        </div>
      </div>
    </a>
  );
};

export default FriendLink;
