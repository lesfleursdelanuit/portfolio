import * as React from "react";
import { graphql } from "gatsby";
import StarField from "../components/StarField/StarField.js";
import Header from "../components/Header/Header.js";
import PhotographListGridView from "../components/PhotographListGridView/PhotographListGridView.js";
import PhotographListCarouselView from "../components/PhotographListCarouselView/PhotographListCarouselView.js";
import "./style.scss";

// markup
const IndexPage = ({ data }) => {
  return (
    <div>
      <StarField />
      <Header />
      <div className="main-body">
        <PhotographListCarouselView data={data.allDatoCmsPhotograph.nodes} />
      </div>
    </div>
  );
};

export const query = graphql`
  {
    allDatoCmsPhotograph(
      filter: { tags: { elemMatch: { name: { eq: "favorite" } } } }
    ) {
      nodes {
        id
        image {
          gatsbyImageData
          url
          path
          filename
          colors {
            alpha
            blue
            green
            hex
            red
            rgb
          }
          resolutions {
            srcSet
            src
          }
          smartTags
        }
        tags {
          name
          id
        }
        colors {
          name
          id
        }
        locations {
          id
          name
        }
      }
    }
  }
`;

export default IndexPage;
