"use client"
import React, { useState } from 'react'
import {LinkIcon} from "@heroicons/react/20/solid"
const ShareLinkButton = () => {
    const [clicked,setclicked]=useState(false)
    const handleclick=()=>{
      navigator.clipboard.writeText(window.location.href)
      setclicked(true)
      setTimeout(()=>setclicked(false),1500)
    }
  return (
    <button onClick={handleclick} className="border flex gap-1  px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700 ">
        <LinkIcon className="h-4 w-4 " />
      { clicked ?  "Link copied" :"Share Link"}
    </button>
  )
}

export default ShareLinkButton