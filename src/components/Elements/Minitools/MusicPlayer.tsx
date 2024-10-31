import React from "react";

interface Song {
  info: {
    url: string;
    title: string;
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const Songs = {
  songA: {
    info: {
      url: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Johann_Sebastian_Bach_first_movement_Organ_Sonata_in_E_minor_BWV_528_Christoph_Albrecht_Silbermann-Organ.mp3",
      title: "songA",
    }
  },
};

type MusicPlayerProps = {
  song: Song;
};

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ song }) => {

  return (
    <div>
      <h2>Now Playing: {song.info.title}</h2>
      <audio controls>
        <source src={song.info.url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
