import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full relative">
        <Image
          src={"/image/Bg.jpg"}
          className="w-full h-full"
          alt="image"
          width={1500}
          height={1100}
          priority={true}
          // loading="lazy"
        />

        <div className="absolute top-0 bottom-0 right-0 left-0">
            <Image
              src={"/image/Tittle.png"}
              className="w-full h-full bg-contain"
              alt="image"
              width={1500}
              height={1100}
              priority={true}
              // loading="lazy"
            />
        </div>

        <div className="absolute top-0 bottom-0 right-0 left-0">
          <Image
              src={"/image/bike.png"}
              className="w-full h-full bg-contain"
              alt="image"
              width={1500}
              height={1100}
              priority={true}
              // loading="lazy"
            />
        </div>


        <div className="fixed top-0 bottom-0 right-0 left-0 h-full">
            <div className="flex flex-col justify-end  h-full text-white text-center">
              <form className="grid gap-2  lg:max-w-sm mx-auto mt-auto ">
                    <div className="flex items-center min-w-full gap-2">
                      <div className="grid w-full">
                        <label className="text-neutral-400 text-sm ml-2">Select Your Dream Bike</label>
                        <div className="w-full">
                          <select className=" text-center bg-transparent mt-1 px-3 py-2 border rounded-2xl text-neutral-200 w-full">
                            <option value={""} disabled >select your dream bike</option>
                            <option value={"HONDA CBR"}>HONDA CBR</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid w-full">
                        <label className="text-neutral-400 text-sm ml-2">In next how many years?</label>
                        <div className="w-full">
                          <select className="bg-transparent mt-1 px-3 py-2 border rounded-2xl text-neutral-200 w-full text-center">
                            <option value={""} disabled >select years</option>
                            <option value={3}>3 years</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <Link href={"/price-page"} className="text-white border-none outline-none py-4 px-1 mt-2 bg-black font-bold">
                      Next
                    </Link>
              </form>
            </div>
        </div>



    </main>
  );
}
