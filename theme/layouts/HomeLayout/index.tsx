import type React from "react";
import type { HomeProps } from "@theme/types";
import { Button } from "rspress/theme";
import { usePageData } from "rspress/runtime";
import "./HomeLayout.css";

const HomeLayout: React.FC = () => {
  const pageData = usePageData();
  const homeData = pageData.page.frontmatter.home as HomeProps;
  const { name, text, tagline, avatar, emoji, signature, tags, actions } =
    homeData;

  return (
    <div className="home-layout">
      <header className="home-layout-header">
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
                  className="home-avatar-wave"
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
            <div className="signature">
              <span className="signature-emoji">{emoji}</span>
              <span className="signature-text">{signature}</span>
            </div>

            {/* TODO:styles */}
            {tags && (
              <div className="home-tags">
                {tags.map((tag, index) => {
                  const angle = (index * 360) / tags.length;
                  const radius = 80; // 环绕半径
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <div
                      key={`tag-${tag.name}`}
                      className="orbit-tag"
                      style={{
                        transform: `translate(calc(50% + ${x}px), calc(50% + ${y}px))`,
                        animation: `float 3s ease-in-out ${index * 0.1}s infinite alternate`,
                      }}
                    >
                      <div
                        className="tag-bubble"
                        style={{ backgroundColor: tag.color }}
                      >
                        <i className={tag.icon} />
                        <span>{tag.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
        <div className="divider divider-dot" />
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
    </div>
  );
};

export default HomeLayout;
