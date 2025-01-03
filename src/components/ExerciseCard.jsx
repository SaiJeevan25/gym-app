import React from 'react'
import { useState } from 'react'

export default function ExcersieCard(props) {
  const {index, exercise} = props
  const [setsCompleted, setSetsCompleted] = useState(0)

  function handleSetIncrement() {
    setSetsCompleted((setsCompleted + 1) % 6)
  }

  return (
    <div className='p-4 rounded-md flex flex-col gap-4 bg-slate-800 sm:flex-wrap'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4'>
        <h4 className='text-3xl sm:inline sm:text-4xl md:text-5xl font-semibold text-red-900'>
          0{index+1}
        </h4>
        <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg md:text-2xl flex-1 md:text-center'>{exercise.name.replaceAll("_", " ")}</h2>
        <p className='capitalize text-sm text-slate-400'>{exercise.type}</p>
      </div>
      <div className='flex flex-col'>
        <h3 className='text-gray-200 text-sm'>Muscle Groups</h3>
        <p className='capitalize text-red-600'>{exercise.muscles.join(' & ')}</p>
      </div>

      <div className='flex flex-col bg-slate-800 rounded gap-2  '>
        {exercise.description.split('___').map((val) => {
          return (
            <div className='text-sm'>
              {val}
            </div>
          )
        })}
      </div>

        
      <div className='grid gird-cols-2 sm:grid-cols-4 sm:place-items-center gap-1'>
        {['reps','rest','tempo'].map(info => {
          return (
            <div key={info} className='flex flex-col p-2 rounded border-[2px] boder-solid border-gray-700 w-full'>
              <h3 className='capitalize text-slate-400 text-sm'>{info === 'reps' ? `${exercise.unit}`:info}</h3>
              <p className='font-md'>{exercise[info]}</p>
            </div>
          )
        })}
        <button onClick={handleSetIncrement}
        className='flex flex-col p-2 rounded border-[2px] duration-200 border-solid border-red-900 hover:border-red-600 '>
          <h3 className='text-slate-400 text-sm capitalize'>Sets Completed</h3>
          <p className='font-md '>{setsCompleted} / 5</p>
        </button>
      </div>
    </div>
  )
}