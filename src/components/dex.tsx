import { FadeIn } from "@/faderIn";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Dex() {
  const stats = [
    { id: 1, name: "Team", value: "6%" },
    { id: 2, name: "Exchange", value: "5%" },
    { id: 3, name: "Airdrop", value: "6%" },
    { id: 4, name: "Marketing", value: "6%" },
    { id: 5, name: "Community", value: "78%" },
  ];

  return (
    // <div id="dex">
    //   <div className="bg-sky-50 py-16 sm:py-24 lg:py-32">
    //     <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
    //       <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
    //         Looking to trade or exchange your Misty NFTs?
    //       </h2>
    //       <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
    //         <div className="flex gap-x-4">
    //           <label htmlFor="email-address" className="sr-only">
    //             Email address
    //           </label>
    //           <input
    //             id="email-address"
    //             name="email"
    //             type="email"
    //             required
    //             placeholder="Enter your email"
    //             autoComplete="email"
    //             className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
    //           />
    //           <button
    //             type="submit"
    //             className="flex-none rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
    //           >
    //             Join
    //           </button>
    //         </div>
    //         <p className="mt-4 text-sm leading-6 text-gray-900">
    //           Get more details and access to our DEX once it&apos;s ready.
    //           {/* <a
    //           href="#"
    //           className="font-semibold text-sky-600 hover:text-sky-500"
    //         >
    //           privacy&nbsp;policy
    //         </a> */}
    //           .
    //         </p>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="dex py-24 sm:py-32 bg-[url('/img/banner-2x.png')] bg-cover">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center flex items-center justify-center ">
            <h2 className="text-balance text-5xl font-semibold tracking-tight text-sky-900 sm:text-7xl bg-sky-50/50 py-2 px-3">
              SUI
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-5 bg-sky-50/90">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-sky-400/5 p-8">
                <dt className="text-4xl font-semibold leading-6 text-sky-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-5xl font-semibold tracking-tight text-sky-700">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
