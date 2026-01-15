import { A } from "@solidjs/router";
import SpotifyPlaylist from "../components/SpotifyPlaylist";

export default function Home() {
  return (
    <main>
      <div class="section">
        <h3>
          Sam D • Brooklyn, NY
        </h3>
        <p>
          Interested in software that eliminates distractions, sick beats (dnb, house and psyjazz fusion among others) and meditation and attention research. Currently looking for an interesting project, <A href="/resume">see my resume</A>.
        </p>
      </div>

      <div class="projects section">
        <h3>Some projects</h3>
        <div class="project-links">
          <a href="https://jam.438d.xyz" target="_blank" rel="noopener noreferrer">
            Melodic improvisation keyboard
          </a>
          <a href="https://github.com/samdesota/MacBar/tree/main" target="_blank" rel="noopener noreferrer">
            MacBar - macOS taskbar and window manager
          </a>
          <a href="https://matterbox.app" target="_blank" rel="noopener noreferrer">
            Matterbox - an email client
          </a>
        </div>
      </div>

      <div class="section">
        <h3>What I'm listening to</h3>
        <SpotifyPlaylist playlistId="2CMAgsjL0fbtdZRybaWMd5" />
      </div>
    </main>

  );
}



