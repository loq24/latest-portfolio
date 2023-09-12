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
      </div>
    </div>
  );
}
