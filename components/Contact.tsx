import Heading from "./common/Heading";
import Text from "./common/Text";
import Github from "./svgs/Github";
import Instagram from "./svgs/Instagram";

export default function Contact() {
  return (
    <div
      className="centered-block flex flex-col items-center justify-center py-24"
      id="contact"
    >
      <Heading className="mb-3">Contact</Heading>
      <Text className="mb-3 text-lg">
        Hit me up if you're interested in working together.
      </Text>
      <Text className="mb-3 font-semibold">
        <a href="mailto:">lougie.quisel@gmail.com</a>
      </Text>
      <ul className="flex items-start gap-2 text-neutral-600">
        <li className="mt-1">
          <a href="">
            <Github />
          </a>
        </li>
        <li>
          <a href="">
            <Instagram />
          </a>
        </li>
      </ul>
      <div className="hidden flex-1">
        <h2 className="mb-4 text-2xl font-normal text-raisin-black">
          Socials:
        </h2>
        <ul className="flex items-start gap-2 text-neutral-600">
          <li className="mt-1">
            <a href="https://github.com/loq24">
              <Github />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/loq24/">
              <Instagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
