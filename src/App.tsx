import "./index.css";
import video from './assets/Logo.mp4';
import Logo from './assets/Logo_Image.png'
import Grid from "./scenes/grid";


let vfx:Record<string,string>[] = [
  {'url': 'https://www.youtube.com/watch?v=CUuzGBi2loI', 'dir' : 'images/BlueBeetle.jpg', 'title' : 'THE BLUE BEETLE'},
  {'url': 'https://www.youtube.com/watch?v=ceF8STF_dyw', 'dir' : 'images/Batman.jpg', 'title' : 'THE BATMAN | TRAILER'},
  {'url': 'https://www.youtube.com/watch?v=eNZvQ9WFECg', 'dir' : 'images/Iceman.jpg', 'title' : 'ICEMAN | TRAILER'},
  {'url': 'https://youtu.be/muv_Z_AB4l4', 'dir' : 'images/HumanTorch.jpg', 'title' : 'THE HUMAN TORCH | INFINITY WAR'},
];

let anim:Record<string,string>[] = [
  {'url': 'https://www.youtube.com/watch?v=zNjEgbe3sa8', 'dir' : 'images/LionKing.jpg', 'title' : "THE LION KING - SIMBA'S ROAR"},
  {'url': 'https://www.youtube.com/watch?v=67A19iWGN7E', 'dir' : 'images/Spiderman.jpg', 'title' : 'SPIDERMAN | TRAILER'},
  {'url': 'https://www.youtube.com/watch?v=sYodoTm4uVA', 'dir' : 'images/LeoMessi.jpg', 'title' : 'FIFA 22 | TRAILER'},
  {'url': 'https://youtu.be/1jXRQZJ74Cs', 'dir' : 'images/Neymar.jpg', 'title' : 'NIKE FOOTBALL | NEYMAR'},
];

let cine:Record<string,string>[] = [
  {'url': 'https://youtu.be/3wQr-AFQ3ac', 'dir' : 'images/Running.jpg', 'title' : "RUNNING FILM"},
  {'url': 'https://youtu.be/gJVL0fQUIbo', 'dir' : 'images/Turkey.jpg', 'title' : 'TURKEY TRAVEL VIDEO'},
];

let reels:Record<string,string>[] = [
  {'url': 'https://www.youtube.com/watch?v=0c7an164Qvw', 'dir' : 'images/Reel2022.jpg', 'title' : 'VFX REEL 2022'},
  {'url': 'https://www.youtube.com/watch?v=3uFNmd22cuw', 'dir' : 'images/Reel2021.jpg', 'title' : 'VFX REEL 2021'},
  {'url': 'https://www.youtube.com/watch?v=LJU5rF7h6Ng', 'dir' : 'images/Reel2020.jpg', 'title' : 'VFX REEL 2020'},
];

let vfxEd:Record<string,string>[][] = [];
let animEd:Record<string,string>[][] = [];
let cineEd:Record<string,string>[][] = [];
let reelsEd:Record<string,string>[][] = [];




let empt:Record<string,string>[] = [];
let i = 0;

for (i = 0; i < vfx.length; i++){
  empt.push(vfx[i])
  if (i%2){
    vfxEd.push(empt);
    empt = [];
  }
}
if (empt.length){
  vfxEd.push(empt);
  empt = [];
  i = 0;
}

for (i = 0; i < anim.length; i++){
  empt.push(anim[i])
  if (i%2){
    animEd.push(empt);
    empt = [];
  }
}
if (empt.length){
  animEd.push(empt);
  empt = [];
  i = 0;
}

for (i = 0; i < cine.length; i++){
  empt.push(cine[i])
  if (i%2){
    cineEd.push(empt);
    empt = [];
  }
}
if (empt.length){
  cineEd.push(empt);
  empt = [];
  i = 0;
}

for (i = 0; i < reels.length; i++){
  empt.push(reels[i])
  if (i%2){
    reelsEd.push(empt);
    empt = [];
  }
}
if (empt.length){
  reelsEd.push(empt);
  empt = [];
  i = 0;
}

function App() {

  const topScroll = () => {
    const element = document.getElementById('top');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const animScroll = () => {
    const element = document.getElementById('anim');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const vfxScroll = () => {
    const element = document.getElementById('vfx');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cineScroll = () => {
    const element = document.getElementById('cine');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const reelScroll = () => {
    const element = document.getElementById('reel');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div className="app">
      <div className = 'navBarContainer fixed'>
          <img onClick={() => topScroll()} className='navBarImg z-30' src={Logo} width={30}/>
          <div className = 'navBarButtons'>
            <button onClick={animScroll} className='navText'>Animated Films</button>
            <button onClick={vfxScroll} className='navText'>VFX Films</button>
            <button onClick={cineScroll} className='navText'>Cinematic Films</button>
            <button onClick={reelScroll} className='navText'>Reels</button>
          </div>
          <a href='https://www.youtube.com/c/BaqirIbrahim' target='_blank'>
            <button className='subButton'>Subscribe</button>
          </a>
      </div>
      <div className = 'vidCon bg-black' id="top">
        <video className = 'logovid' src={video} autoPlay muted>
        </video>
      </div>
      <div className="scrollView" id="anim">
        <Grid title = 'ANIMATED FILMS' array = {animEd} bg = 'bg-white' txtcol = 'text-black'/>
      </div>
      <div className="scrollView" id="vfx">
        <Grid title = 'VFX FILMS' array = {vfxEd} bg = 'bg-black' txtcol = 'text-white'/>
      </div>
      <div className="scrollView" id="cine">
        <Grid title = 'CINEMATIC FILMS' array = {cineEd} bg = 'bg-white' txtcol = 'text-black'/>
      </div>
      <div className="scrollView" id="reel">
        <Grid title = 'REELS' array = {reelsEd} bg = 'bg-black' txtcol = 'text-white'/>
      </div>
    </div>
  );
}

export default App;
