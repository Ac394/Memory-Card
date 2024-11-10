export default function Result({ result, handleClick }) {
  const bgUrl =
    result === "lose"
      ? "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHg2bzhydnZxdXVldW1obGk5ZHYzdGV2bzluZjUzbDU1bG14cGx1ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TW5RIonnbxx2Lgn0i1/giphy.webp"
      : "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHFmOXdxbHB6a3V1bnVoMXdma21ybGdkb3A2MmlrZG8wb3EydXkxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mBj4vm2vKTOXhoQ0jc/giphy.webp";

  return (
    <div className="flex items-center justify-center fixed left-0 top-0 w-screen h-screen bg-black/40">
      <div
        style={{ backgroundImage: `url("${bgUrl}")` }}
        className="flex flex-col justify-between items-center w-2/5 aspect-video p-12 rounded-3xl bg-blue-light-minion bg-no-repeat bg-cover"
      >
        <h2 className="text-black text-5xl font-bold p-6 bg-white/50 backdrop-blur-sm rounded-2xl">
          {result === "lose" ? "You lose!" : "You win!"}
        </h2>
        <button
          onClick={handleClick}
          className="text-2xl text-white font-semibold p-4 bg-blue-dark-minion/80 rounded-xl"
        >
          Restart
        </button>
      </div>
    </div>
  );
}
