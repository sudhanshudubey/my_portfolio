import gsap from "gsap";
import { Dock, Home, MobileNavbar, Navbar, Welcome } from "#components";
import {
  Contact,
  Finder,
  Photos,
  Resume,
  Safari,
  Terminal,
  TextFile,
  ImageFile,
  MobileSafari,
} from "#windows";

import { Draggable } from "gsap/Draggable";
import MobileContact from "#windows/mobile/Contact";
import MobilePhotos from "#windows/mobile/Photos";
import MobileText from "#windows/mobile/file/Text";
import MobileImage from "#windows/mobile/file/Image";
import MobileHome from "#components/mobile/Home";
import MobileResume from "#windows/mobile/Resume";
import MobileFinder from "#windows/mobile/Finder";
import MobileTerminal from "#windows/mobile/Terminal";
gsap.registerPlugin(Draggable);

const wallpaper = `url(${import.meta.env.BASE_URL}images/wallpaper-bg.jpg)`;

const App = () => (
  <main style={{ backgroundImage: wallpaper, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
    <Navbar />
    <MobileNavbar />

    <Welcome />
    <Dock />

    <Terminal />
    <MobileTerminal />

    <Safari />
    <MobileSafari />

    <Resume />
    <MobileResume />

    <Finder />
    <MobileFinder />

    <TextFile />
    <MobileText />

    <ImageFile />
    <MobileImage />

    <Contact />
    <MobileContact />

    <Home />
    <MobileHome />

    <Photos />
    <MobilePhotos />
  </main>
);

export default App;
