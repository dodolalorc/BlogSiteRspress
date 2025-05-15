import type React from "react";
import type { Tag, HomeProps } from "../types";

const DoHomeLayout: React.FC<HomeProps> = ({
  name,
  text,
  tagline,
  avatar,
  tags,
}) => {
  return (
    <div className="home-layout">
      <header className="flex justify-center items-center">
        <div className="row-span-2 flex justify-center items-center">
          <h1>{name}</h1>
          <h2>{text}</h2>
          <p>{tagline}</p>
        </div>
        <div className="flex justify-center items-center bg-gray-200 rounded-full w-24 h-24">
          <img
            src={avatar}
            alt="Avatar"
            className="w-full h-full round-full relative border-2 border-gray-300"
          />
        </div>
      </header>
      <main className="home-content">
        <div>占位</div>
      </main>
      <footer className="home-footer">
        <p>&copy; 2023 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DoHomeLayout;
