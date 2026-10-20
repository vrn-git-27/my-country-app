'use client'

import React from 'react'

const page = () => {

  return (
    <div className="text-center p-10">

      <h1 className="text-5xl font-bold text-blue-700">
        COUNTRY EXPLORER
      </h1>

      <p className="text-xl mt-5">
        Explore countries around the world
      </p>

      <p className="mt-3">
        Search for countries and view their important information.
      </p>

      <a
        href="/countries"
        className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded"
      >
        Explore Countries
      </a>

    </div>
  )
}

export default page