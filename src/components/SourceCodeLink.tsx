import React from "react";
import { GIT_REPO } from "../common/config";

const BASE_URL = GIT_REPO + "/blob/main/src/ui-toolkit/";

export function SourceCodeLink({ path, children }) {
  return (
    <a href={BASE_URL + path} target="_blank">
      {children || "View Source"}
    </a>
  );
}
