'use client'

import { useSearchParams } from 'next/navigation'

export default function Search() {
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

