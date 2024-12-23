import React from 'react'

export default function Button(props) {
  const {text, func} = props
  return (
    <button onClick={func} className="px-8 mx-auto py-4 rounded-md border-[1px] bg-slate-950 blueshadow border-blue-400 border-solid duration-150">
        <p>{text}</p>
    </button>
  )
}
