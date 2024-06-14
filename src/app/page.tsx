import Ripple from "@/components/ui/ripple";
import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/gradient-animation";
import Link from "next/link";
import { icons, socialMedia } from "@/data";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import meem from "../../public/meeem.png";

export default function Index() {
  return (
    <div className="max-w-7xl w-full p-4 md:p-8 mx-auto">
      {/*  //! HERO - I  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-1 lg:col-span-2 h-full bg-gray-200/60 min-h-[500px] lg:min-h-[300px] rounded-2xl p-8">
          <h1 className="text-3xl lg:text-6xl font-medium">
            Hey I am Adarsh ⭐
          </h1>
          <h1 className="text-muted-foreground lg:text-lg mt-8">
            A passionate self-learner and pre-final year student with a strong
            interest in continuously up-skilling. Dedicated to applying acquired
            knowledge and skills to tackle real-world challenges and create
            impactful solutions
          </h1>

          {/* // ! add mailto: here */}
          <a href="#" className="relative inline-block text-lg group mt-8">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Get in Touch!</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>

        <div className="relative col-span-1 object-cover rounded-2xl bg-gray-200/60">
          <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
            <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
              Welcome
            </p>
            <Ripple />
          </div>
        </div>
      </div>

      {/*  //! HERO - II  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
        <div className="w-full relative col-span-1 h-full">
          <BackgroundGradientAnimation>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold px-4 text-2xl text-center md:text-3xl lg:text-5xl z-50">
              <Link
                className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
                href="chat"
              >
                Chat With My Portfolio
              </Link>
            </div>
          </BackgroundGradientAnimation>
        </div>
        <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
          <Card className="bg-gray-200/60 border-none">
            <CardHeader>
              <CardTitle>Explore my stack</CardTitle>
              <CardDescription>Check out the tools I use daily</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              {icons.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="Icon"
                  className="w-16 h-16"
                />
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
            {socialMedia.map((item) => (
              <Card
                key={item.id}
                className="p-4 flex flex-col lg:items-center sm:items-start bg-gray-200/60 border-none"
              >
                <Image
                  src={item.icon}
                  alt="Icon"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
                <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
                <p className="text-muted-foreground">{item.username}</p>
                <Button className="mt-4" size="sm" asChild>
                  <a href={item.link}>Follow</a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/*  //! HERO - III  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
        <Card className="col-span-1 lg:col-span-2 border-none bg-gray-200/60 p-10 flex flex-col">
          <h1 className="text-3xl lg:text-6xl">
            Dedicated Pre-final Year Student and Aspiring Web Developer
          </h1>
          <p className="mt-8 text-muted-foreground lg:text-lg">
            I am a pre-final year college student with a passion for web
            development. I enjoy learning new technologies and frameworks, and
            I&apos;m dedicated to creating efficient and user-friendly web
            applications. I aim to solve real-world problems through innovative
            solutions and continuously improve my skills to stay up-to-date in
            the ever-evolving tech landscape.
          </p>

          <a
            href="mailto:"
            className="relative inline-block text-lg group mt-8 w-fit"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Get in Touch!</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </Card>

        <div className="col-span-1 flex">
          <div className="w-full bg-gray-200/60 flex items-center justify-center rounded-lg">
            <Image src={meem} alt="Profile Picture" width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}
