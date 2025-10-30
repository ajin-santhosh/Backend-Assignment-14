import React from 'react'
import TaskPage from './taskPage'

function Home() {
  return (
   <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-lg font-bold text-center text-blue-600">
        Welcome to the Home Page!
        <TaskPage />
      </h1>
    </div>
  )
}

export default Home