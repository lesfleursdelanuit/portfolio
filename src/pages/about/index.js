import * as React from "react";
import { graphql } from "gatsby";
import StarField from "../../components/StarField/StarField.js";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import PhotographListGridView from "../../components/PhotographListGridView/PhotographListGridView.js";
import PhotographListCarouselView from "../../components/PhotographListCarouselView/PhotographListCarouselView.js";
import "../style.scss";

// markup
const IndexPage = ({ data }) => {
  const [whichView, setWhichView] = React.useState("carousel");
  const [whichFilterType, setWhichFilterType] = React.useState("tags");
  const [whichFilter, setWhichFilter] = React.useState("favorite");

  const handleViewChange = (view) => {
    setWhichView(view);
  };

  const filteredData = () => {
    return data.allDatoCmsPhotograph.nodes.filter((node) => {
      let t = node[whichFilterType];
      for (let i = 0; i < t.length; i++)
        if (t[i].name === whichFilter) return true;

      return false;
    });
  };

  const determineWhichView = () => {
    let filtered = filteredData();

    filtered = filtered.sort((a, b) => {
      if (a.order === null) a.order = -1;
      if (b.order === null) b.order = -1;
      return a.order < b.order;
    });

    if (whichView === "carousel")
      return (
        <PhotographListCarouselView
          data={filtered}
          view={whichView}
          filter={whichFilter}
          onViewChange={handleViewChange}
        />
      );
    return (
      <PhotographListGridView
        data={filtered}
        view={whichView}
        filter={whichFilter}
        onViewChange={handleViewChange}
      />
    );
  };

  return (
    <div>
      <StarField />
      <Header selectedPage="about" />
      <div className="main-body">{determineWhichView()}</div>
      <Footer />
    </div>
  );
};

/*export const query = graphql`
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
        order
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
`;*/

export const query = graphql`
  {
    allDatoCmsPhotograph {
      nodes {
        id
        order
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
