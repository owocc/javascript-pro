import React from "react";
import { motion } from "framer-motion";
// 背景和主面板
// 动态引入TbRefresh图标

export default function OddsPage() {
  return (
    <div className="select-none h-screen w-screen  bg-gradient-to-r to-[#BB4E75] from-[#FF9D6C] flex justify-center items-center font-mono">
      <motion.div
        layout
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        className="grid grid-cols-2 h-[60vmin] w-[100vmin] relative  rounded-lg overflow-hidden shadow-lg"
      >
        <GOptions />
        <PlayerPanel />
        <PlayerPanel />
      </motion.div>
    </div>
  );
}

function GOptions() {
  return (
    <div className="absolute z-10 h-4/5  top-1/10 left-0 right-0 m-auto w-40 flex flex-col justify-between">
      <div className="flex items-center flex-col">
        <GButton>🕹️ New Game</GButton>
      </div>
      <Dice />
      <div className="flex items-center flex-col gap-5">
        <GButton>🎲 ROLL DICE</GButton>
        <GButton>💾 HOLD</GButton>
      </div>
    </div>
  );
}

function GButton(prop: React.HtmlHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      whileTap={{ scale: 0.9 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.05 },
      }}
      className="font-black flex items-center gap-2 justify-center shadow-md py-2 px-5 rounded-full bg-white hover:bg-light-700 transition-all duration-150"
    >
      {prop.children}
    </motion.button>
  );
}

function Dice() {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      className="h-40 w-40 bg-light-300 m-auto rounded-lg shadow-2xl"
    ></motion.div>
  );
}

// 玩家面板
function PlayerPanel() {
  return (
    <div className="w-full bg-white bg-opacity-70 flex h-full justify-around items-center flex-col">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-4xl font-semibold"
      >
        PLAYER 1
      </motion.h1>
      <motion.h2
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-8xl text-red-800"
      >
        7
      </motion.h2>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        className="w-45 h-30 gap-5 bg-red-500 text-white flex flex-col items-center justify-center rounded-lg"
      >
        <p className="text-lg">current</p>
        <span className="text-4xl">0</span>
      </motion.div>
    </div>
  );
}
