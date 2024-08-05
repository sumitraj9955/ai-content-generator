import React from 'react'

function Hero() {
  return (
<section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
       AI Content <span className='font-extrabold text-primary'>Generator</span>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Revolutionize your content with our AI-powered app,delivering engaging and high-quality text in seconds
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/sign-in"
        >
          Get Started
        </a>

      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
