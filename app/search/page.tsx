'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SearchComponent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      <p>Showing results for: {query}</p>
      {/* Implement actual search functionality here */}
    </div>
  )
}

export default function Search() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchComponent />
    </Suspense>
  )
}
