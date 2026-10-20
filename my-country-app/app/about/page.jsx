'use client'

import React from 'react'

const page = () => {

  return (
    <div className="p-10 text-center">

      <h1 className="text-4xl font-bold text-blue-700">
        ABOUT COUNTRY EXPLORER
      </h1>

      <p className="mt-5 text-lg">
        Country Explorer is a Next.js project that
        provides information about countries around
        the world using the REST Countries API.
      </p>

      <h2 className="text-2xl font-bold mt-8">
        Technologies Used
      </h2>

      <div className="mt-4">

        <p>Next.js</p>

        <p>React</p>

        <p>Axios</p>

        <p>Tailwind CSS</p>

        <p>REST Countries API</p>

      </div>

    </div>
  )
}

export default page