import { useEffect, useState } from "react";
import Player from "./Components/Player";


function App() {
  const [songs] = useState([
    {
      title: "Shambhu Sharane Padi",
      artist: "Narayanswami",
      img_src: "https://i.postimg.cc/1twcr7Wg/wp6046733-mahakal-4k-wallpapers.jpg",
      src: "./songs/Shambhu Sharne Padi.mp3"
    }, {
      title: "Rang Dariya",
      artist: "Yasser Desai",
      img_src: "https://i.postimg.cc/25Mtsfsg/Rang-dariya.webp",
      src: "./songs/Rang Dariya [Slowed  Reverb]  Chehre  Emraan Hashmi  Zee Music Company  Music World.mp3"
    }, {
      title: "Rasiya",
      artist: "Tushar Joshi , Shreya Ghoshal",
      img_src: "https://i.postimg.cc/qRKF050q/Rasiya.webp",
      src: "./songs/Rasiya - Lofi (Slowed  Reverb)  Tushar Joshi, Shreya Ghoshal  SR Lofi.mp3"
    }, {
      title: "Tere Hawale",
      artist: "Shilpa Rao , Tushar Joshi",
      img_src: "https://i.postimg.cc/vHhNQ9Rr/Tere-hawale.webp",
      src: "./songs/Tere Hawaale (Full Video) Laal Singh Chaddha  Aamir,Kareena  Arijit,Shilpa  Pritam,Amitabh,Advait.mp3"
    }, {
      title: "Tera Hua",
      artist: "Atif Aslam",
      img_src: "https://i.postimg.cc/KvxWSfWc/Tera-hua.webp",
      src: "./songs/Tera Hua [Slowed  Reverb] Atif Aslam  Bollywood hindi lofi song.mp3"
    }, {
      title: "Phir Aur Kya Chahiye",
      artist: "Arijit Singh",
      img_src: "https://i.postimg.cc/t4rwz62q/Phir-aur-kya-chahiye.webp",
      src: "./songs/Phir Aur Kya Chahiye [SlowedReverb] Arijit Singh  Zara Hatke Zara Bachke  Lofi Music Channel.mp3"
    }, {
      title: "Mannat",
      artist: "Sonu Nigam , Shreya Ghoshal",
      img_src: "https://i.postimg.cc/pdrbNCp5/Mannat.webp",
      src: "./songs/Mannat [Slowed  Reverb] Sonu Nigam, Shreya Ghoshal Daawat -E- Ishq.mp3"
    }, {
      title: "Apna Bana Le",
      artist: "Arijit Singh",
      img_src: "https://i.postimg.cc/LXgc5skH/Apna-bana-le.webp",
      src: ""
    }, {
      title: "Raabta",
      artist: "Arijit Singh",
      img_src: "https://i.postimg.cc/mrtqpr5Q/Raabta.webp",
      src: "./songs/Raabta (Slowed and Reverb)  Kehte he khuda ne  lofi mix  Arijit Singh.mp3"
    }, {
      title: "Kabira",
      artist: "Rekha Bhardwaj , Tochi Raina",
      img_src: "https://i.postimg.cc/MHyg0rrN/Kabira.webp",
      src: "./songs/Kabira  Lofi Flip (Rewerbed) @HXRSHYAA.mp3"
    }, {
      title: "Tere Hona Lage Hoon",
      artist: "Atif Aslam , Alisha Chinai",
      img_src: "https://i.postimg.cc/RCcYDyXb/Tera-hona-laga-hoon.webp",
      src: "./songs/Tera Hone Laga Hoon [SlowedReverb]  Atif Aslam  Lofi  Textaudio.mp3"
    }, {
      title: "Ajab si",
      artist: "KK",
      img_src: "https://i.postimg.cc/sgwd0qDR/Ajab-si.webp",
      src: "./songs/Aankhon mein teri ajab si [Slowed  Reverb] KK  Lofi Eve.mp3"
    }, {
      title: "Sun Mere Humsafar",
      artist: "Akhil Sachdeva , Mansheel Gujral",
      img_src: "https://i.postimg.cc/brHFSSZj/Sun-mera-humsafar.webp",
      src: "./songs/Sun Mere Humsafar - Slowed and Reverbed (Magical)  Badrinath Ki Dulhania  Lofi Vibes.mp3"
    }, {
      title: "Ye Tere Do Naina",
      artist: "Gourov-Roshin",
      img_src: "https://i.postimg.cc/x1dFqCYW/Ye-tere-do-naina.webp",
      src: "./songs/Tere Do Naina Lofi [SlowedReverb]  Ankit Tiwari  Aparshakti Khurana.mp3"
    }, {
      title: "Lag Ja Gale",
      artist: "Lata Mangeshkar",
      img_src: "https://i.postimg.cc/J7ZwWG4x/Lag-ja-gale.webp",
      src: "./songs/Lag Ja Gale [ slowed  reverb ] Lofi song.mp3"
    }, {
      title: "I Love You",
      artist: " Ash King , Clinton Cerejo",
      img_src: "https://i.postimg.cc/9FYvrK9q/I-love-you.webp",
      src: "./songs/I Love You (Slowed  Reverb) - Bodyguard  Pritam  Ash King, Clinton Cerejo.mp3"
    }, {
      title: "Taaron Ke Shehar",
      artist: "Jubin Nautiyal , Neha Kakkasr",
      img_src: "https://i.postimg.cc/prt6dJXZ/Taaron-Ke-Shehar.webp",
      src: "./songs/Taaron Ke Shehar [SlowedReverb] - Neha Kakkar  Jubin Nautiyal  Jaani  lofi lover  T Series.mp3"
    }, {
      title: "Le Aauga",
      artist: "Arijit Singh",
      img_src: "https://i.postimg.cc/kXm0Mq2m/Le-aauga.webp",
      src: "./songs/Le Aaunga (Slowed  Reverb)  Arijit Singh  Satyaprem Ki Katha  SR Lofi.mp3"
    }, {
      title: "Naseeb Se",
      artist: "Vishal Mishra,Payal Dev",
      img_src: "https://i.postimg.cc/YSPctFWn/Naseeb-se.webp",
      src: "./songs/Naseeb Se (Slowed  Reverb)  Payal Dev, Vishal Mishra  Satyaprem Ki Katha  SR Lofi.mp3"
    }, {
      title: "Pehle Pyaar",
      artist: "Armaan Malik",
      img_src: "https://i.postimg.cc/sgfbSmPH/Pehle-Pyaar.webp",
      src: "./songs/Pehla Pyaar - Slowed  Reverb.mp3"
    }, {
      title: "Humsafar",
      artist: "Akhil Sachdeva , Mansheel Gujral",
      img_src: "https://i.postimg.cc/QCLRTrSc/Humsafar.webp",
      src: "./songs/Humsafar ( Slowed and Reverb) Akhil Sachdeva  Badrinath ki dulhania  Nexus Music.mp3"
    }   
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0
      }
      else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex, songs.length])

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs} />
    </div>
  );
}

export default App;
