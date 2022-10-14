import React from "react";
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
