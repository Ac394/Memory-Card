import Tilt from "react-parallax-tilt";

export default function Card({ name, imgUrl, flip, handleClick }) {
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <Tilt
        className="flip-card w-56 h-80 transform-style-3d will-change-transform duration-[1500ms] ease-[cubic-bezier(0.03,0.98,0.52,0.99)]"
        glareEnable={true}
        glareBorderRadius="16px"
        flipHorizontally={flip}
        transitionSpeed={1500}
      >
        <div className="flip-card-front absolute size-full p-2.5 bg-yellow-minion rounded-2xl">
          <div className="relative flex size-full rounded-xl border-2 border-blue-dark-minion bg-white/95">
            <img src={imgUrl} className="absolute size-full object-contain" />
            <p className="w-full mt-auto pb-2 text-xl text-center font-semibold first-letter:capitalize">{name}</p>
          </div>
        </div>

        <div
          className="flip-card-back backface-hidden size-full rotate-y-180 p-2.5 rounded-2xl bg-yellow-minion"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="flex size-full rounded-lg overflow-hidden">
            <img src={"../assets/img/minions/minions_goggle.jpg"} className="size-full object-cover" />
          </div>
        </div>
      </Tilt>
    </div>
  );
}
