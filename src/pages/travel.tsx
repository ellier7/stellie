import React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout/Layout";
import Travel from "../components/Travel/Travel";

const TravelPage = () => {
  return (
    <Layout>
      <Travel />
    </Layout>
  );
};

export default TravelPage;

export const Head: HeadFC = () => <title>Stellie 10.28.23</title>;
