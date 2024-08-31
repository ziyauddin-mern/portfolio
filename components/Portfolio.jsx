"use client";

const Portfolio = () => {
  const portfolios1 = [
    {
      src: "/images/portfolio/1.webp",
      techs: "Travel Landing , UX/UI",
      projectName: "Chul urina",
      bgColor: "#FFF4F4",
    },
    {
      src: "/images/portfolio/2.webp",
      techs: "Travel Landing , UX/UI",
      projectName: "Aura Dione",
      bgColor: "#EEF5FA",
    },
    {
      src: "/images/portfolio/3.webp",
      techs: "Travel Landing , UX/UI",
      projectName: "T-Shirt Design",
      bgColor: "#EEF5FA",
    },
  ];

  const portfolios2 = [
    {
      src: "/images/portfolio/4.webp",
      techs: "Travel Landing , UX/UI",
      projectName: "Packaging Box",
      bgColor: "#FFF4F4",
    },
    {
      src: "/images/portfolio/5.webp",
      techs: "Travel Landing , UX/UI",
      projectName: "Modern Bag Design",
      bgColor: "#FFF4F4",
    },
    {
      src: "/images/portfolio/6.webp",
      techs: "Travel Landing , UX/UI",
      projectName: "Chul urina",
      bgColor: "#EEF5FA",
    },
  ];

  return (
    <div className="bg-white rounded-lg">
      <div className="lg:p-16 p-6">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold">Portfolio</h1>
          <img src="/images/line.jpg" alt="line" />
        </div>

        <div className="flex gap-2 justify-between  mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 py-8">
            {portfolios1.map((item, index) => (
              <div key={index}>
                <div>
                  <div
                    className="flex flex-col py-6 gap-3 px-6 items-center rounded-lg portfolio-box"
                    style={{ background: item.bgColor }}
                  >
                    <img src={item.src} alt={item.src} className="rounded-lg" />
                    <div className="w-9/12 mt-3">
                      <p className="text-xs text-gray-500">{item.techs}</p>
                      <h1 className="text-base font-semibold text-gray-800">
                        {item.projectName}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 py-8">
            {portfolios2.map((item, index) => (
              <div key={index}>
                <div>
                  <div
                    className="flex flex-col py-6 gap-3 px-6 items-center rounded-lg portfolio-box"
                    style={{ background: item.bgColor }}
                  >
                    <img src={item.src} alt={item.src} className="rounded-lg" />
                    <div className="w-9/12 mt-3">
                      <p className="text-xs text-gray-500">{item.techs}</p>
                      <h1 className="text-base font-semibold text-gray-800">
                        {item.projectName}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-8 bg-[#F8FBFB]">
        <p className="text-center text-gray-500">
          © 2024 All Rights Reserved by elite-themes24.
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
