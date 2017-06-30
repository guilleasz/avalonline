import React from 'react';
import PlayerBoardContainer from '../containers/PlayerBoardContainer';
import ImageUpload from './ImageUpload';

const Lobby = ({ handleChange, setNickname, name, nickname, started, params, onUploadFile }) => (
  !started ?
    <div>
      <h1>Welcome: {nickname}</h1>
      <h4>Choose your nickname!</h4>
      <input placeholder="Enter Name" onChange={e => handleChange(e.target.value)} value={name} />
      <button className="btn btn-success" onClick={setNickname}>Submit</button>
      <div>
        <h4>Upload a Selfie!</h4>
        <input type="file" accept="image/*" onChange={onUploadFile}/>
        <button name="selfie" className="btn btn-primary">Upload</button>
      </div>
      <p>Waiting to Start...</p>
    </div> : <PlayerBoardContainer params={params} />
);

export default Lobby;
