import { Button } from '@material-tailwind/react'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className="bg-red-500 text-white p-4 flex">
    <h1 className="text-3xl font-bold">Hello, Tailwind!</h1>
    <Button>Click</Button>
  </div>
    </div>
  )
}
