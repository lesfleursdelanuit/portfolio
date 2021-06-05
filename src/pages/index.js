import * as React from "react";
import { graphql } from "gatsby";
import AnimatedText from "../components/AnimatedText/AnimatedText.js";
import Photograph from "../components/Photograph/Photograph.js";
import StarField from "../components/StarField/StarField.js";
import NavigationMenu from "../components/NavigationMenu/NavigationMenu.js";
import "./style.scss";

// markup
const IndexPage = ({ data }) => {
  return (
    <div>
      <StarField />
      <header>
        <AnimatedText />
        <NavigationMenu />
      </header>
      <div className="main-body">
        {data.allDatoCmsPhotograph.nodes.map((props) => {
          return (
            <Photograph
              {...props}
              showProperties={false}
              photographWidth={500}
            />
          );
        })}
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
