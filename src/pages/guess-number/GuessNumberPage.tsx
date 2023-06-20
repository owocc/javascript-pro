import "./ViewStyle.scss";

function GButton({ className }: { className?: string }) {
  const baseClass = "bg-gray-200 text-black py-2 px-4 ";
  return <button className={baseClass + className}>Again!</button>;
}

function GameInfo() {
  return (
    <div className="w-full mt-20 flex justify-center text-center flex-col items-center">
      <h1 className="text-[4vmin]">Guess My Numbers!</h1>
      <div className="h-[15vmin] w-[15vmin] bg-gray-200 mt-15 relative line"></div>
    </div>
  );
}

function GameTopBar() {
  return (
    <div className="w-full flex justify-between">
      <GButton />
      <h2>{"<Between 1 and 20>"}</h2>
    </div>
  );
}

export default function () {
  return (
    <div className="p-5 guess-page relative bg-black text-white h-screen w-screen">
      <GameTopBar />

      <GameInfo />
    </div>
  );
}
