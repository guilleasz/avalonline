import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import RoundDisplay from '../components/RoundDisplay';

class RoundDisplayContainer extends React.Component {

  render() {
    const { roundHistory } = this.props;
    return (
      <div>
        <h1>Round Pass/Fail</h1>
        <div className="flex-container">
          {
            roundHistory.map((info, i) => (<RoundDisplay key={i} roundNumber={i + 1} roundInfo={info} />))
          }
        </div>
      </div>
    );
  }
}

const wrappedRoundDisplayContainer = firebaseConnect(['/'])(RoundDisplayContainer);

export default connect(({ firebase }, ownProps) => ({
  roundHistory: dataToJS(firebase, `${ownProps.lobbyId}/gameState/roundHistory`),
}))(wrappedRoundDisplayContainer);
