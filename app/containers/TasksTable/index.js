import React, { Component } from 'react';
import { compose } from 'redux';
import withTasks from 'containers/WithTasks';
import PropTypes from 'prop-types';

class TasksTable extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.tasks.map(item => (
          <div key={item._id}>{item.description}</div>
        ))}
      </React.Fragment>
    );
  }
}

TasksTable.propTypes = {
  tasks: PropTypes.array,
};

export default compose(withTasks)(TasksTable);
