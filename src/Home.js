import React from 'react';
import { connect } from 'react-redux';
import './Home.css';
import { setMessage } from './actions/app';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
          <div className="App-intro">
              <p>
                  Redux: { this.props.message }
              </p>
          </div>
          <button onClick={() => {this.props.updateMessage(Date.now())}}>Dispatch message</button>
      </div>
    );
  }
}

export default connect(
    ({ app }) => ({
        message: app.message,
    }),
    dispatch => ({
        updateMessage: (messageText) => dispatch(setMessage(messageText)),
    })
)(Home);
