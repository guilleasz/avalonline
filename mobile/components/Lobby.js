import React from 'react';
import PlayerBoardContainer from '../containers/PlayerBoardContainer';

const Lobby = ({
  handleChange,
  setNickname,
  name,
  nickname,
  started,
  params,
  onUploadFile,
  error
}) => (
  !started ?
    <div className="mobile-background">
      <h1>Welcome: {nickname}</h1>
      <h4>Choose your nickname!</h4>
      <input type="text" placeholder="Enter Name" onChange={e => handleChange(e.target.value)} value={name} />
      <p style={{color: 'red'}}>{error ? 'Nickname is already picked' : null}</p>
      <button className="margin-btn btn btn-success" onClick={setNickname}>Submit</button>
      <div>
        <h4>Upload a Selfie!</h4>
      </div>
      <div>
        <input
          className="camera-upload"
          type="file"
          accept="image/*"
          onChange={onUploadFile}
        />
      </div>
      <p>Waiting to Start...</p>
    </div> : <PlayerBoardContainer params={params} />
);

export default Lobby;
