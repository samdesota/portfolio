interface SpotifyPlaylistProps {
  playlistId: string;
  height?: number;
}

export default function SpotifyPlaylist(props: SpotifyPlaylistProps) {
  const height = props.height || 580;

  return (
    <iframe
      style={{
        "border-radius": "12px",
        width: "100%",
        height: `${height}px`,
      }}
      src={`https://open.spotify.com/embed/playlist/${props.playlistId}?utm_source=generator`}
      frameborder="0"
      allowfullscreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
}

