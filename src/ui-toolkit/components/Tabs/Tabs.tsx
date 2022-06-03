import React, { useEffect, useState } from "react";

const Tabs = ({ children, activeTabId = null, setActiveTabId = null }) => {
  const hasActiveTabs = activeTabId && setActiveTabId;
  const enhancedChildren = !hasActiveTabs
    ? children
    : React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          activeTabId,
          setActiveTabId,
        });
      });

  return <>{enhancedChildren}</>;
};

const TabList = ({
  children,
  className = null,
  activeTabId = null,
  setActiveTabId = null,
  ...rest
}) => {
  const hasActiveTabs = activeTabId && setActiveTabId;
  const tabs = !hasActiveTabs
    ? children
    : React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          activeTabId,
          setActiveTabId,
        });
      });

  return (
    <ul
      role="tablist"
      className={`nav nav-pills ui-toolkit-tablist text-uppercase ${className}`}
      {...rest}
    >
      {tabs}
    </ul>
  );
};

const Tab = ({
  id,
  children,
  className = null,
  activeTabId = null,
  setActiveTabId = null,
  ...rest
}) => {
  return (
    <li className="nav-item">
      <button
        type="button"
        onClick={() => setActiveTabId(id)}
        className={`btn text-neutral-300 bg-transparent text-uppercase rounded-0 text-small fw-bold text-spaced text-neutral-800 ${className}`}
        role="tab"
        aria-selected={activeTabId === id}
        {...rest}
      >
        {children}
      </button>
      <div className={activeTabId === id ? "active-tab" : ""}></div>
    </li>
  );
};

const TabPanel = ({ id, children = null, className = null, activeTabId = null, ...rest }) => {
  return (
    <div role="tabpanel" className={className}>
      {activeTabId === id && children}
    </div>
  );
};

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;

interface useTabsProps {
  activeTabId: string;
}

// Based off of https://codesandbox.io/s/compount-components-with-a-hook-txolo?from-embed=&file=/table/table.hooks.js:0-844
export function useTabs({ activeTabId: initialActiveId = "" }: useTabsProps) {
  const [activeTabId, setActiveTabId] = useState(initialActiveId);
  useEffect(() => setActiveTabId(initialActiveId), [initialActiveId]);

  return {
    activeTabId,
    setActiveTabId: setActiveTabId,
  };
}

export default Tabs;
