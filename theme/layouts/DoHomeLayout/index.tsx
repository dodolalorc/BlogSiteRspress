import type React from "react";
import type { Tag, HomeProps, Action } from "../../types";
import { Button, HomeFeature } from "rspress/theme";
import { Badge } from "rspress/theme";
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
        <p className="beian">
          <Badge type="info">
            <i className="i-hugeicons-identity-card" />
            <span>备案号</span>
          </Badge>
          <img
            className="beian-icon"
            src="/img/icons/govbeian.png"
            alt="Government Beian Icon"
          />
          <a
            className="gov"
            href="https://beian.mps.gov.cn/#/query/webSearch?code=33010902003733"
            rel="noreferrer"
            title="浙公网安备33010902003733"
            target="_blank"
          >
            浙公网安备33010902003733
          </a>
          <a
            className="icp"
            href="https://beian.miit.gov.cn/#/Integrated/index"
            target="_blank"
            rel="noreferrer"
            title="浙ICP备2023048052号-1"
          >
            浙ICP备2023048052号-1
          </a>
        </p>
        <p className="home-layout-footer-text">
          <Badge type="info">
            <i className="i-hugeicons-energy-ellipse" />
            <span>Powered by</span>
          </Badge>
          <a
            href="https://rspress.dev"
            target="_blank"
            rel="noreferrer"
            title="RSPRESS"
          >
            Rspress
          </a>
        </p>
        <p>
          <Badge type="info">
            <i className="i-hugeicons-energy-ellipse" />
            <span>Copyright</span>
          </Badge>
          2023 <i className="i-hugeicons-at" /> dodola's Blog. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default DoHomeLayout;
