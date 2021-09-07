import './SongPlayer.css';
import { useRef, useState } from 'react';
import { Heading } from './Heading';

export function SongPlayer({ 
  showControls = false, 
  song,
  onPreviousSong, 
  onNextSong
}) {
  const audioRef = useRef();
  const { audioUrl, coverUrl } = song;

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  function handlePreviousSong() {
    onPreviousSong();
    setIsAudioPlaying(false);
  }
  function handleNextSong() {
    onNextSong();
    setIsAudioPlaying(false);
  }

  return (
    <section className="SongPlayer">
      <Heading title="Music Player" />
      <img
        width="250"
        height="250"
        src={coverUrl}
        alt="Song cover" />
      <audio
        ref={audioRef}
        key={audioUrl}
        controls={showControls}>
        <source src={audioUrl} />
      </audio>
      <div>
        <button
          className="PrevButton"
          onClick={handlePreviousSong}
        >|◄
        </button>
        {isAudioPlaying ? (
          <button
            className="PauseButton"
            onClick={() => {
              audioRef.current.pause();
              setIsAudioPlaying(false);
            }}
          > | | </button>
        ) : (
          <button
            className="PlayButton"
            onClick={() => {
              audioRef.current.play();
              setIsAudioPlaying(true);
            }}
          > ► </button>
        )}
        <button
        className="NextButton" 
        onClick={handleNextSong}
        >►|
        </button>
      </div>
    </section>
  );
}
