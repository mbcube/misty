import { FadeIn } from "@/faderIn";
import {
  DocumentCurrencyDollarIcon,
  GiftIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Exclusive NFTs",
    description:
      "Collect one-of-a-kind aquatic-themed NFTs that are designed to be rare and interactive. Each Misty NFT holds unique traits, giving you endless possibilities for trading and evolving your digital companions.",
    href: "#",
    icon: DocumentCurrencyDollarIcon,
  },
  {
    name: "Community-Driven",
    description:
      "As a Misty NFT holder, you gain the power to influence the direction of our growing universe. Through community voting and collaborative projects, your voice helps shape the future of our aquatic world.",
    href: "#",
    icon: UserGroupIcon,
  },
  {
    name: "Perks & Rewards",
    description:
      "Get access to exclusive NFT drops, special events, and insider updates when you join the Misty community. We reward our collectors with ongoing perks, keeping the experience fun and engaging!",
    href: "#",
    icon: GiftIcon,
  },
];

export default function About() {
  return (
    <FadeIn id="about">
      <div className="bg-sky-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-sky-400">
              Welcome to the world of Misty where
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-700 sm:text-5xl lg:text-balance">
              Creativity meets the future of digital collectibles
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Misty brings you into a vibrant aquatic universe where digital
              collectibles meet community-driven experiences. Join us as we
              redefine creativity in the NFT space with rare, interactive
              companions.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-700">
                    <feature.icon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-sky-400"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-700">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      {/* <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-sky-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a> */}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
