import Heading from "./common/Heading";
import Text from "./common/Text";
import Github from "./svgs/Github";
import Instagram from "./svgs/Instagram";

export default function Contact() {
  return (
    <div
      className="centered-block flex flex-col items-center justify-center py-12 sm:py-16 lg:py-24"
      id="contact"
    >
      <Heading className="mb-3">Contact</Heading>
      <Text className="mb-3 text-center text-lg">
        Hit me up if you&apos;re interested in working together.
      </Text>
      <Text className="mb-3 font-semibold">
        <a href="mailto:lougie.quisel@gmail.com">lougie.quisel@gmail.com</a>
      </Text>
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
  );
}
