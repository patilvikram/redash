import React from 'react';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import { react2angular } from 'react2angular';


export function EditVisualizationButton(props) {
  return (
    <Button
      data-test="EditVisualization"
      className="edit-visualization"
      onClick={() => props.openVisualizationEditor(props.selectedTab)}
    >
      <Icon type="form" />
      <span className="hidden-xs hidden-s hidden-m">
        Edit Visualization
      </span>
    </Button>
  );
}

EditVisualizationButton.propTypes = {
  openVisualizationEditor: PropTypes.func.isRequired,
  selectedTab: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

EditVisualizationButton.defaultProps = {
  selectedTab: '',
};

export default function init(ngModule) {
  ngModule.component('editVisualizationButton', react2angular(EditVisualizationButton));
}

init.init = true;
