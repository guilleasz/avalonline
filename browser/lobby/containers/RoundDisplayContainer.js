import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import RoundDisplay from '../components/RoundDisplay';

class RoundDisplayContainer extends React.Component {

  render() {
    const { roundHistory } = this.props;
    const votes = [];
    for (let i = 0; i < 5; i++) {
      if (roundHistory && roundHistory[i]) votes.push(roundHistory[i][0]);
      else votes.push('');
    }
    return (
      <div className="round-display-container">
        <div className="flex-container">
          {
            votes.map((info, i) => (<RoundDisplay key={i} roundNumber={i + 1} roundInfo={info} />))
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
