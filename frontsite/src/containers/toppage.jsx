import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

class TopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isClicked: this.props.clicked,
    };
    // this.handleTopPageClick = this.handleTopPageClick.bind(this);
  }

  render() {
    const style = {
      // 未選択
      wrap: {
        width: '96%',
        margin: '20px 2% 0',
        textAlign: 'left',
      },
    };

    return (
      <div>
        <AppBar
          title="Management Tool"
          iconElementLeft={<div />}
          iconElementRight={<div />}
        />
        <Paper style={style.wrap} zDepth={1}>
          test
        </Paper>
      </div>
    );
  }
}

export default TopPage;
