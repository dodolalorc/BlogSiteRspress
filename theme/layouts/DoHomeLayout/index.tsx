import type React from "react";
import type { Tag, HomeProps, Action } from "../../types";
import { Button, HomeFeature } from "rspress/theme";
import "./HomeLayout.css";

const DoHomeLayout: React.FC<HomeProps> = ({
  name,
  text,
  tagline,
  avatar = "",
  tags = [] as Tag[],
  actions = [] as Action[],
}) => {
  return (
    <div className="home-layout">
      <header className="home-layout-header">
        <div className="home-layout-intro">
          <h1>{name}</h1>
          <h2>{text}</h2>
          {tagline && <p>{tagline}</p>}
          {actions && (
            <div>
              {actions.map((action, i) => (
                <Button
                  className="home-layout-action"
                  key={`action-${action.text}-${i}`}
                  text={action.text}
                  href={action.link}
                  theme={
                    action.theme === "alt" || action.theme === "brand"
                      ? action.theme
                      : "alt"
                  }
                />
              ))}
            </div>
          )}
        </div>
        {/* 若传入avatar则渲染 */}
        {avatar && (
          <div className="home-avatar-shell">
            <div className="home-avatar">
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={`avatatSpan-${
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    i
                  }`}
                  style={{ "--i": i + 1 } as React.CSSProperties}
                />
              ))}
            </div>
            <div className="home-avatar-bg" />
            <img
              src={avatar}
              alt={`${name}'s avatar`}
              className="home-avatar-img"
            />
            {/* TODO:styles */}
            {tags && (
              <div className="home-tags">
                {tags.map((tag) => (
                  <div
                    key={`tag-${tag.name}`}
                    className="home-tag"
                    style={{ backgroundColor: tag.color }}
                  >
                    <i className={tag.icon} />
                    <span>{tag.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </header>
      <main className="home-layout-main">
        {/* {features && (
          <div className="home-layout-feature">
            <HomeFeature
              title={feature.title}
              description={feature.description}
              image={feature.image}
              link={feature.link}
            />
          </div>
        )} */}
      </main>
      <footer className="home-layout-footer">
        <p>&copy; 2023 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DoHomeLayout;
