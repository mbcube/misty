export default function Dex() {
  const stats = [
    { id: 1, name: "Team", value: "6%" },
    { id: 2, name: "Exchange", value: "5%" },
    { id: 3, name: "Airdrop", value: "6%" },
    { id: 4, name: "Marketing", value: "6%" },
    { id: 5, name: "Community", value: "78%" },
  ];

  return (
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
