import Image from 'next/image'
import React from 'react'

const FormField = () => {
  return (
    <div className='fixed top-0 bottom-0 right-0 left-0  bg-white bg-opacity-5 backdrop-blur-sm flex justify-center items-center p-6'>
      <div className='bg-white rounded-md w-full h-[calc(100vh-100px)] flex flex-col items-center gap-3'>
            <div className='text-xl font-bold py-4 '>
                <p>
                    Just Fill in your details.
                </p>
                <p>
                    We'll get back to you.
                </p>
            </div>
            <form className='grid gap-5'>
                <div className='grid'>
                    <label htmlFor='name' className='ml-2'>Name</label>
                    <input
                        type='text'
                        id='name'
                        className='border border-black rounded-lg text-base p-2 px-4 w-full' 
                    />
                </div>
                <div className='grid'>
                    <label htmlFor='Mobile' className='ml-2'>Mobile No.</label>
                    <input
                        type='text'
                        id='Mobile'
                        className='border border-black rounded-lg text-base p-2 px-4 w-full' 
                    />
                </div>
                <div className='grid'>
                    <label htmlFor='Email' className='ml-2'>Email</label>
                    <input
                        type='text'
                        id='email'
                        className='border border-black rounded-lg text-base p-2 px-4 w-full' 
                    />
                </div>

                <button className='bg-[#024da8] hover:bg-[#06448f] text-white py-2 text-lg font-semibold rounded-lg max-w-[180px] min-w-[180px] block mx-auto'>
                    Submit
                </button>
            </form>
            <div className='mt-10'>
                <Image
                    src={"/image/logoform.jpg"}
                    className=""
                    alt="formlogo"
                    width={180}
                    height={80}
                    priority={true}
                    // loading="lazy"
                />
            </div>
      </div>
    </div>
  )
}

export default FormField
