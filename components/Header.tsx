export default function Header() {
  return (
    <div className="centered-block fixed left-0 right-0 mt-16 flex h-36 flex-wrap justify-between">
      <a href="">
        <button className="h-6 w-6 rounded-full bg-white hover:cursor-none"></button>
      </a>
      <div>
        <ul className="flex flex-wrap justify-between font-inter tracking-wide text-white">
          <li className="px-4">
            <a href="">About</a>
          </li>
          <li className="px-4">
            <a href="">Work</a>
          </li>
          <li className="px-4">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
