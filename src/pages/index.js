import * as React from "react";
import { graphql } from "gatsby";
import StarField from "../components/StarField/StarField.js";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import PhotographListGridView from "../components/PhotographListGridView/PhotographListGridView.js";
import PhotographListCarouselView from "../components/PhotographListCarouselView/PhotographListCarouselView.js";
import "./style.scss";

// markup
const IndexPage = ({ data }) => {
  const [whichView, setWhichView] = React.useState("carousel");
  const [whichFilter, setWhichFilter] = React.useState("favorite");

  const handleViewChange = (view) => {
    setWhichView(view);
  };

  const determineWhichView = () => {
    if (whichView === "carousel")
      return (
        <PhotographListCarouselView
          data={data.allDatoCmsPhotograph.nodes}
          view={whichView}
          filter={whichFilter}
          onViewChange={handleViewChange}
        />
      );
    return (
      <PhotographListGridView
        data={data.allDatoCmsPhotograph.nodes}
        view={whichView}
        filter={whichFilter}
        onViewChange={handleViewChange}
      />
    );
  };

  return (
    <div>
      <StarField />
      <Header />
      <div className="main-body">{determineWhichView()}</div>
      <Footer />
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
