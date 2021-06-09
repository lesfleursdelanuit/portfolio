import * as React from "react";
import { graphql } from "gatsby";
import AppManager from "../models/AppManager.js";
import StarField from "../components/StarField/StarField.js";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import PhotographListGridView from "../components/PhotographListGridView/PhotographListGridView.js";
import PhotographListCarouselView from "../components/PhotographListCarouselView/PhotographListCarouselView.js";
import "./style.scss";

const appManager = new AppManager();
// markup
const IndexPage = ({ data }) => {
  const [whichView, setWhichView] = React.useState(appManager.getView());
  const [whichFilterType, setWhichFilterType] = React.useState(
    appManager.getFilterType()
  );
  const [whichFilter, setWhichFilter] = React.useState(appManager.getFilter());
  const [filterChanges, setFilterChanges] = React.useState(0);
  let appManagerId = null;
  Object.keys(data).forEach((key) => {
    data[key].nodes.forEach((node) => {
      appManager.lookupTable[node.id] = node;
    });
  });

  React.useEffect(() => {
    appManagerId = appManager.registerListener((changed) => {
      let changedSet = new Set(changed);
      if (changedSet.has("filter")) {
        setWhichFilter(appManager.getFilter());
        setWhichFilterType(appManager.getFilterType());
        setFilterChanges(filterChanges + 1);
      }
      if (changedSet.has("view")) setWhichView(appManager.getView());
    });

    return () => {
      appManager.unregisterListener(appManagerId);
    };
  });

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
          manager={appManager}
        />
      );
    return (
      <PhotographListGridView
        data={filtered}
        view={whichView}
        filter={whichFilter}
        manager={appManager}
      />
    );
  };

  return (
    <div>
      <StarField />
      <Header selectedPage="gallery" manager={appManager} />
      <div className="main-body">{determineWhichView()}</div>
      <Footer
        locations={data.allDatoCmsLocation}
        colors={data.allDatoCmsColor}
        tags={data.allDatoCmsTag}
        whichFilter={whichFilter}
        whichFilterType={whichFilterType}
        manager={appManager}
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
