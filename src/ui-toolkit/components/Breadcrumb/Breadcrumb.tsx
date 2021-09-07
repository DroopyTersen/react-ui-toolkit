import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const { pathname } = useLocation();
  const sections = pathname.split("/");
  const breadcrumbs = sections.reduce((crumbs, section, index) => {
    if (index === 0) {
      crumbs.push({ to: "/", text: "home" });
    } else {
      const prev = crumbs[index - 1];
      crumbs.push({
        text: section,
        to: prev.to + "/" + section,
      });
    }
    return crumbs;
  }, []);
  return (
    <ul className="breadcrumb">
      {breadcrumbs.slice(0, breadcrumbs.length - 1).map((crumb) => (
        <li className="breadcrumb-item" key={crumb.to}>
          <Link to={crumb.to}>{crumb.text}</Link>
        </li>
      ))}
      <li className="breadcrumb-item text-bold">{breadcrumbs[breadcrumbs.length - 1]?.text}</li>
    </ul>
  );
}

export default React.memo(Breadcrumb);
