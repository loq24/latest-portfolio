export default function Mouse() {
  return (
    <div className="absolute bottom-0 left-0 right-0 mx-auto h-[55px] w-[34px]">
      <div className="h-full w-[3px] rounded-[25px] border-2 border-raisin-black px-[15px] py-[10px] opacity-75">
        <div className="h-[10px] w-[3px] animate-scroll rounded-[25%] bg-raisin-black"></div>
      </div>
    </div>
  );
}
