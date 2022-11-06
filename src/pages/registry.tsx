import React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout/Layout";
import Registry from "../components/Registry/Registry";

const RegistryPage = () => {
  return (
    <Layout>
      <Registry />
    </Layout>
  );
};

export default RegistryPage;

export const Head: HeadFC = () => <title>Stellie 10.28.23</title>;
