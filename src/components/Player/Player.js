import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { playerTimeFormatter } from '../../utils';
import backIcon from '../../img/back-icon.svg';
import playIcon from '../../img/play-icon.svg';
import pauseIcon from '../../img/pause-icon.svg';
import './Player.scss';

const Player = ({
  modifier,
  style,
  started,
  paused,
  mainButtonAction,
  backButtonAction,
  timer,
  duration,
  progressBarWidth
}) => (
  <div className={classNames('player', modifier)} style={style}>
    <div className="player__content">
      <button
        className="player__back-button"
        type="button"
        onClick={backButtonAction}
      >
        <img
          className="player__back-button-icon"
          src={backIcon}
          alt={'Rewind episode'}
        />
      </button>
      <button
        className="player__main-button"
        type="button"
        onClick={mainButtonAction}
      >
        {!started || paused ? (
          <img
            className="player__main-button-icon"
            src={playIcon}
            alt={'Play episode'}
          />
        ) : (
          <img
            className="player__main-button-icon"
            src={pauseIcon}
            alt={'Pause episode'}
          />
        )}
      </button>
      <div className="player__timer">{playerTimeFormatter(timer)}</div>
      <div className="player__duration">{playerTimeFormatter(duration)}</div>
    </div>
    <div className="player__progress-bar">
      <div
        className="player__progress-bar-line"
        style={{ width: progressBarWidth + '%' }}
      />
    </div>
  </div>
);

Player.propTypes = {
  modifier: PropTypes.string,
  style: PropTypes.object,
  started: PropTypes.bool,
  paused: PropTypes.bool,
  mainButtonAction: PropTypes.func,
  backButtonAction: PropTypes.func,
  timer: PropTypes.number,
  duration: PropTypes.number,
  progressBarWidth: PropTypes.number
};

Player.defaultProps = {
  started: false,
  paused: false
};

export default Player;
