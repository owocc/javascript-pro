/* eslint-disable react-refresh/only-export-components */
import "./ViewStyle.scss";
import bg from "../../assets/song/bg-music.wav";
import { useState } from "react";

// 风格化按钮
function GButton(props: React.HTMLAttributes<HTMLButtonElement>) {
  const baseClass = "bg-gray-200 text-black py-2 px-4 ";
  return (
    <button className={baseClass + props.className}>{props.children}</button>
  );
}
// 游戏信息
function GameInfo() {
  return (
    <div className="w-full mt-20 flex justify-center text-center flex-col items-center">
      <h1 className="text-[4vmin]">Guess My Numbers!</h1>
      <div className="line h-[15vmin] mt-15 flex justify-center before:bg-gray-200">
        <h1 className="h-[15vmin] px-2 relative min-w-[15vmin] bg-gray-200  relative text-dark-500  text-center  leading-[15vmin]  text-[10vmin]">
          ?
        </h1>
      </div>
    </div>
  );
}
const audioPlayer = new Audio();
audioPlayer.src = bg;
audioPlayer.loop = true;
function MusicPlayer() {
  const [playStatus, setPlayStatus] = useState(false);
  function play() {
    if (playStatus) {
      console.log("p");

      audioPlayer.pause();
    } else {
      console.log("play");

      audioPlayer.play();
    }
    setPlayStatus(!playStatus);
  }

  return (
    <button
      onClick={() => {
        play();
      }}
      className="w-20"
    >
      {playStatus ? "pause" : "play"}
    </button>
  );
}

// 游戏顶部栏
function GameTopBar() {
  return (
    <div className="w-full flex justify-between">
      <GButton>Again</GButton>
      <div className="flex gap-5 items-center">
        <h2>{"<Between 1 and 20>"}</h2>
        <MusicPlayer />
      </div>
    </div>
  );
}

export default function () {
  return (
    <div className="select-none p-5 guess-page bg-dark-800 text-white h-screen w-screen">
      <GameTopBar />
      <GameInfo />

      <div className="w-2/3 m-auto flex  mt-12 justify-between">
        <div className="flex flex-col gap-10 items-center">
          <input
            type="number"
            placeholder="Enter your guess"
            className="appearance-none p-2 border-5  border-gray-200 text-dark-700 focus:outline-white focus:outline-dashed"
          />
          <GButton className="">Check</GButton>
        </div>
        <div className="flex flex-col gap-5">
          <h2>Start guessing...</h2>
          <p className="mt-10">🍎 Score:2</p>
          <p>🏅️ Score:2</p>
        </div>
      </div>
    </div>
  );
}
