import type React from "react";
import { Tag,HomeProps } from '../types';

const DoHomeLayout: React.FC<HomeProps> = ({ name,text,tagline,avatar,tags, }) => {
  return (
    <div className="home-layout">
      <header className="home-header">
        <h1>Welcome to My Blog</h1>
      </header>
      <main className="home-content">
        <div className="welcome-message">
          <h2>Hello, {name}!</h2>
          <p>Welcome back to my blog. Here are some of my latest posts:</p>
        </div>
      </main>
      <footer className="home-footer">
        <p>&copy; 2023 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DoHomeLayout;
