'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Page = () => {
  const [country, setCountry] = useState(null)
  const [name, setName] = useState("India")
  const [loading, setLoading] = useState(false)

  const API_KEY = "rc_live_e67bbeb8b2d6495c8b7d2967e5bb9331"

  const getCountry = async () => {
    if (!name.trim()) return

    try {
      setLoading(true)

      const response = await axios.get(
        `https://api.restcountries.com/countries/v5?q=${name}`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`
          }
        }
      )

      console.log("RESPONSE:", response.data)
      
      const objects = response.data?.data?.objects || []

      // Smart search match to pin down the exact country
      const foundCountry = objects.find(obj => 
        obj?.names?.common?.toLowerCase() === name.toLowerCase()
      ) || objects.find(obj => 
        obj?.names?.common?.toLowerCase().includes(name.toLowerCase())
      ) || objects[0]

      setCountry(foundCountry || null)

    } catch (error) {
      console.log("ERROR:", error.response?.data || error.message)
      setCountry(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCountry()
  }, [])

  return (
    <div className="p-8 min-h-screen bg-slate-900 text-white">
      <h1 className="text-4xl text-center text-blue-400 font-bold mb-6">
        MY COUNTRY APP
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter country"
          className="border border-gray-600 p-2 text-black rounded-l bg-white focus:outline-none"
        />

        <button
          onClick={getCountry}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r font-semibold transition"
        >
          Search
        </button>
      </div>

      {loading && (
        <p className="text-center mt-5 text-gray-300">
          Loading...
        </p>
      )}

      {country && (
        <div className="max-w-md mx-auto p-5 border border-gray-700 rounded-lg bg-slate-800 shadow-lg">
          <div className="flex justify-center bg-slate-700 p-2 mb-4 items-center rounded">
            <h2 className="text-xl text-center text-red-400 mr-2 font-semibold">CURRENT COUNTRY:</h2>
            <p className="text-2xl text-center text-blue-400 font-bold">
              {country?.names?.common}
            </p>
          </div>

          <p className="mb-2 text-gray-200">
            <strong className="text-gray-400">Population:</strong> {country?.population?.toLocaleString() || "N/A"}
          </p>

          <p className="mb-2 text-gray-200">
            <strong className="text-gray-400">Capital:</strong> {
              typeof country?.capitals?.[0] === 'object'
                ? country?.capitals?.[0]?.name
                : (country?.capitals?.[0] || "N/A")
            }
          </p>

          <p className="mb-2 text-gray-200">
            <strong className="text-gray-400">Region:</strong> {country?.region || "N/A"}
          </p>
        </div>
      )}
    </div>
  )
}

export default Page