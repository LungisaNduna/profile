import React, { Component } from 'react'
import PropTypes from 'prop-types';
import GrowthPlan from '../../Resources/CareerPlan.png'

export class ImageModal extends Component {

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      margin: '0 auto',
      padding: 20
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <h1 style={{marginTop: '0px'}}>Growth Plan</h1>
          <img id="growthPlan" src={GrowthPlan} alt="my personal growth plan"/>
          <span className="ImageSpaceError">The Picture resolution of the image will not work for this screen size</span>

          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ImageModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

    
    export default ImageModal;
