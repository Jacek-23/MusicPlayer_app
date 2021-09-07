import './SongListItem.css';
export function SongListItem({ song, isCurrent, onSelect }) {
  const background = isCurrent ? "darkslategrey" : "none";
  const style = { background };
  function handleClick() {
    onSelect(song);
  }
  return (
    <li className={`SongListItem ${isCurrent ? "selected" : ""}`}
      style={style}
      onClick={handleClick}>
      <img className="songCover" src={song.coverUrl} alt="cover" />
      <div className="songInfo">
        <span className="songTitle">{song.title}</span>
        <span className="songArtist">{song.artist}</span>
      </div>
    </li>
  );
}
