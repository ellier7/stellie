import React from "react";
import type { HeadFC } from "gatsby";
import Engagement from "../components/Gallery/Engagement";
import Layout from "../components/Layout/Layout";
import Proposal from "../components/Gallery/Proposal";

const GalleryPage = () => {
  return (
    <Layout>
      <Proposal />
      <Engagement />
    </Layout>
  );
};

export default GalleryPage;

export const Head: HeadFC = () => <title>Stellie 10.28.23</title>;
