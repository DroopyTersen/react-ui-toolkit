import React from "react";
import { Layout } from "~global/layout/Layout";
import Card from "~ui-toolkit/components/Card/Card";

export const HomeView = () => {
  return (
    <Layout>
      <div className="p-5">
        <Card
          className="inline-block shadow-lg border-none"
          title="Vite + React"
          subtitle="And a little bit of Storybook"
        >
          <ul>
            <li>
              Look at <code>App.tsx</code> to see how React Router is configured.
            </li>
            <li>Edit any file to see Hot Module Reloading.</li>
            <li>
              Look at <code>DogDetailsView.tsx</code> to see how to do data fetching.
            </li>
            <li>
              See <code>BreedsGrid.tsx</code> for an example of using custom hooks to create complex
              UI interactions (filtering, sorting, paging).
            </li>
            <li>
              Project aliases are configured in <code>vite.config.js</code> and{" "}
              <code>tsconfig.json</code>
            </li>
          </ul>
        </Card>
      </div>
    </Layout>
  );
};
