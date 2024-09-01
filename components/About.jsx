"use client";
import Image from "next/image";

const About = () => {
  const abouts = [
    {
      icon: "/images/about/1.svg",
      title: "Ui/Ux Design",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
      bgColor: "#FFF4F4",
    },
    {
      icon: "/images/about/2.svg",
      title: "App Development",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
      bgColor: "#EEF5FA",
    },
    {
      icon: "/images/about/3.svg",
      title: "Photography",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
      bgColor: "#EEF5FA",
    },
    {
      icon: "/images/about/4.svg",
      title: "Web Development",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
      bgColor: "#FFF4F4",
    },
  ];

  const clients = [
    "/images/about/diana-hill.webp",
    "/images/about/penny.webp",
    "/images/about/cheryl.webp",
    "/images/about/sophia.webp",
  ];

  return (
    <div className="bg-white rounded-lg">
      <div className="lg:p-16 p-6">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold">About</h1>
          <div>
            <Image width={211} height={15} src="/images/line.jpg" alt="line" />
          </div>
        </div>
        <p className="flex flex-col gap-4 lg:w-10/12 py-6 text-gray-500">
          <span>
            I'm Creative Director and UI/UX Designer from Sydney, Australia,
            working in web development and print media. I enjoy turning complex
            problems into simple, beautiful and intuitive designs.
          </span>
          <span>
            My aim is to bring across your message and identity in the most
            creative way. I created web design for many famous brand companies.
          </span>
        </p>

        <h1 className="text-3xl font-semibold">What I do!</h1>
        <div className=" grid lg:grid-cols-2 gap-8 mt-8">
          {abouts.map((item, index) => (
            <div
              key={index}
              className={`flex rounded-lg p-6 gap-4`}
              style={{
                background: item.bgColor,
              }}
            >
              <div className="h-fit">
                <Image width={40} height={40} src={item.icon} alt={item.icon} />
              </div>
              <div className="flex-1">
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <p className="text-gray-500 tracking-wider leading-relaxed mt-4">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#F8FBFB] py-8">
        <h1 className="text-center font-semibold text-3xl">Client</h1>
        <div className="py-8 flex lg:flex-row flex-col justify-around lg:items-start items-center lg:gap-4 gap-12">
          {clients.map((item, index) => (
            <div key={index}>
              <Image
                layout="responsive"
                width={100}
                height={100}
                src={item}
                alt={item}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="py-8">
        <p className="text-center text-gray-500">
          © 2024 All Rights Reserved by elite-themes24.
        </p>
      </div>
    </div>
  );
};

export default About;
