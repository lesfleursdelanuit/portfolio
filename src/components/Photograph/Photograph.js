import React from "react";
import PhotographProperties from "../PhotographProperties/PhotographProperties.js";
import Modal from "@material-ui/core/Modal";
import "./Photograph.scss";

class Photograph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.determineUseModal = this.determineUseModal.bind(this);
  }
  makeProperties() {
    let props = [
      { name: "Tags", data: this.props.tags },
      { name: "Colors", data: this.props.colors },
      { name: "Locations", data: this.props.locations },
    ];
    if (this.props.showProperties) {
      return (
        <ul className="photograph-properties">
          {props.map((prop) => {
            return <PhotographProperties {...prop} />;
          })}
        </ul>
      );
    }

    return null;
  }
  makeClasses() {
    let classes = ["photograph-element", "pane"];
    if (this.props.isVisible !== undefined && this.props.isVisible)
      classes.push("visible");
    if (this.props.isSelected !== undefined && this.props.isSelected)
      classes.push("selected");

    return classes.join(" ");
  }

  handleCloseModal(e) {
    e.stopPropagation();
    this.setState((state, props) => {
      return { modalOpen: false };
    });
  }

  handleOpenModal(e) {
    e.target.blur();
    this.setState((state, props) => {
      return { modalOpen: true };
    });
  }

  determineUseModal() {
    if (this.props.disableModal !== undefined && this.props.disableModal)
      return null;
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal-image"
      >
        <img src={this.props.image.gatsbyImageData.images.fallback.src} />
      </Modal>
    );
  }

  render() {
    return (
      <div className={this.makeClasses()} onClick={this.handleOpenModal}>
        <div className="photograph">
          <img src={this.props.image.gatsbyImageData.images.fallback.src} />
        </div>
        {this.makeProperties(this.props.showProperties)}
        {this.determineUseModal()}
      </div>
    );
  }
}

export default Photograph;
