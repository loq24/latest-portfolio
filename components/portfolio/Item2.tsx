export default function Item2() {
  return (
    <div className="relative h-[50vh] w-[40vw] flex-shrink-0 overflow-hidden hover:cursor-pointer">
      <img
        className="image absolute h-full w-full select-none object-cover duration-500 ease-in-out hover:scale-105"
        src="/images/Delonghi.jpg"
        alt=""
        draggable={false}
      />
      <h2 className="absolute left-4 top-4 font-anek-bangla text-5xl font-semibold text-white">
        Delonghi
      </h2>
    </div>
  );
}
