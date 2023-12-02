import * as React from "react";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";

const pageTitle = "Berkay Alparslan";

const IndexPage = () => {
  return (
    <Layout pageTitle={pageTitle}></Layout>
  );
};

export default IndexPage;

export const Head = () => <title>{pageTitle}</title>;
