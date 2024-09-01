'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import FormField from '../components/FormField';

const PricePage = () => {
    const [openForm,setOpenForm] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setOpenForm(true)
        },15000)
    },[openForm])
  return (
    <main className="w-full h-full relative">
        <Image
          src={"/image/background2.jpg"}
          className="w-full h-full"
          alt="image"
          width={1500}
          height={1100}
          priority={true}
          // loading="lazy"
        />
        

        <div className="absolute top-0 bottom-0 right-0 left-0">
            <div className='h-24 w-full flex justify-center items-center'>
                <Image
                src={"/image/congragulations.png"}
                alt="image"
                width={1000}
                height={200}
                priority={true}
                // loading="lazy"
                className='-mb-3'
                />
            </div>
            <div className='w-full'>
                <Image
                src={"/image/title2.png"}
                alt="image"
                width={1000}
                height={200}
                priority={true}
                // loading="lazy"
                />
            </div>
            <div className='w-full relative'>
                <div className='w-[75%] mx-auto'>
                    <Image
                        src={"/image/bikeprice1.png"}
                        alt="bike"
                        width={1000}
                        height={200}
                        priority={true}
                        // loading="lazy"
                    />
                </div>
                <div className='absolute top-20'>
                    <Image
                    src={"/image/stand.png"}
                    alt="bike"
                    width={1000}
                    height={200}
                    priority={true}
                    // loading="lazy"
                    />
                </div>
            </div>
            <div className='text-white flex flex-col justify-center items-center text-center px-6 bottom-0 absolute gap-2 '>
                <p>Just Save</p>
                <p className='font-bold text-5xl text-yellow-400 drop-shadow-2xl'>Rs.3,333.00</p>
                <p className='text-lg'>In Mutual Fund & Buy your Dream Bike in</p>
                <p className='font-bold text-4xl pb-4'>Next 3 Years</p>
            </div>
        </div>

        {/* <div className="absolute top-0 bottom-0 right-0 left-0">
          <Image
              src={"/image/stand.png"}
              className="w-full h-full bg-contain "
              alt="image"
              width={1500}
              height={1100}
              priority={true}
              // loading="lazy"
            />
        </div> */}


        {/* <div className="fixed top-0 bottom-0 right-0 left-0 h-full">
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
        </div> */}

        {
            openForm && <FormField/>
        }
    </main>
  )
}

export default PricePage
