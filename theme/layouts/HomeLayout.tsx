import type React from "react";

interface HomeProps {
  // Define any props you want to pass to the HomeLayout component
  name: string;
}

const HomeLayout: React.FC<HomeProps> = ({ name }) => {
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

export default HomeLayout;
