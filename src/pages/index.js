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
  const [whichFilterType, setWhichFilterType] = React.useState("tags");
  const [whichFilter, setWhichFilter] = React.useState("favorite");
  let lookupTable = {};
  Object.keys(data).forEach((key) => {
    data[key].nodes.forEach((node) => {
      lookupTable[node.id] = node;
    });
  });

  const handleViewChange = (view) => {
    setWhichView(view);
  };

  const filteredData = () => {
    if (whichFilter === "all") return data.allDatoCmsPhotograph.nodes;
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

  const handleFilterChange = (input) => {
    if (input.type !== "all") {
      const name = lookupTable[input.id].name;
      const filterType = input.type;
      setWhichFilter(name);
      setWhichFilterType(filterType);
    } else {
      setWhichFilter("all");
      setWhichFilterType("all");
    }
  };

  return (
    <div>
      <StarField />
      <Header selectedPage="gallery" />
      <div className="main-body">{determineWhichView()}</div>
      <Footer
        locations={data.allDatoCmsLocation}
        colors={data.allDatoCmsColor}
        tags={data.allDatoCmsTag}
        whichFilter={whichFilter}
        whichFilterType={whichFilterType}
        onFilterChange={handleFilterChange}
        selectedPage="gallery"
      />
    </div>
  );
};

export const query = graphql`
  {
    allDatoCmsPhotograph {
      nodes {
        id
        image {
          gatsbyImageData
          url
          path
          filename
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
    allDatoCmsTag {
      nodes {
        id
        name
      }
    }
    allDatoCmsColor {
      nodes {
        id
        name
        hexcode {
          hex
          rgb
        }
      }
    }
    allDatoCmsLocation {
      nodes {
        id
        name
      }
    }
  }
`;

export default IndexPage;
