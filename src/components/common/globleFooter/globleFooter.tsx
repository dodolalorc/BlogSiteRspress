import type { FooterProps } from "@theme/types";
import { usePageData } from "rspress/runtime";
import { Badge } from "rspress/theme";
import "./globleFooter.css";

const globleFooter: React.FC<FooterProps> = () => {
  const pageData = usePageData();
  const footer = pageData.page.footer as FooterProps;
  const { enable, copyright, poweredBy, since, icp, license, custom } = footer;
  return (
    <footer className="home-layout-footer">
      {icp && (
        <p className="beian">
          <Badge type="info">
            <i className="i-hugeicons-identity-card" />
            <span>备案号</span>
          </Badge>
          {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
          <span dangerouslySetInnerHTML={{ __html: icp }} />
        </p>
      )}
      {poweredBy && (
        <p className="home-layout-footer-text">
          <Badge type="info">
            <i className="i-hugeicons-energy-ellipse" />
            <span>Powered by</span>
          </Badge>
          {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
          <span dangerouslySetInnerHTML={{ __html: poweredBy }} />
        </p>
      )}
      {copyright && (
        <p>
          <Badge type="info">
            <i className="i-hugeicons-energy-ellipse" />
            <span>Copyright</span>
          </Badge>
          {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
          <span dangerouslySetInnerHTML={{ __html: copyright }} />
        </p>
      )}
    </footer>
  );
};

export default globleFooter;
