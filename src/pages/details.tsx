import React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout/Layout";
import Details from "../components/Details/Details";

const DetailsPage = () => {
  return (
    <Layout>
      <Details />
    </Layout>
  );
};

export default DetailsPage;

export const Head: HeadFC = () => <title>Stellie 10.28.23</title>;
