/* eslint-disable @typescript-eslint/no-explicit-any */
const navigation = [
  {
    name: "X",
    href: "https://x.com/mistyonsui",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 496 512" {...props}>
        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/MISTYonsu1",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 496 512" {...props}>
        <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-sky-100 text-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className=" hover:text-sky-700">
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="h-10 w-10" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-2xl leading-5 ">
            Bloop Bloop Bloop &copy; 2024 Misty.
          </p>
        </div>
      </div>
    </footer>
  );
}
