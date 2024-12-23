import React from 'react'
import SectionWrapper from './SectionWrapper'
import { useState } from 'react'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import Button from './Button'

function Header(props) {
  const { index, title, description } = props
  return(
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-red-900'>{index}</p>
        <h4 className='text-lg sm:text-2xl text-white'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

export default function Generator(props) {
  const {poison, setPoison, muscle, setMuscle, goal, setGoal, updateWorkout} = props
  const [showModel, setShowModel] = useState(false)
  
  function handleToggleState() {
    setShowModel(!showModel)
  }

  function updateMuscle(muscleGroup) {

    if (muscle.includes(muscleGroup)){
      setMuscle(muscle.filter(val => val !== muscleGroup))
      return
    }
    
    if (muscle.length > 2)  return

    if (poison !== "individual"){
      setMuscle([muscleGroup])
      setShowModel(false)
      return
    }

    setMuscle([...muscle, muscleGroup])
    if (muscle.length === 2){
      setShowModel(false)
    }
 }

  return (
// Create Your Workout Plan" "It's Time to Go Big Push harder, get STRONGER!
    <SectionWrapper id='generate' header={"Create Your Workout Plan"} title={['It\'s Time', "To Go", 'Big!!']}>

      <Header index={"01"} title={'Choose Your Split'} description={"Select the workout to endure"} />
      <div className='grid gird-cols-2 sm:grid-cols-4 gap-6'>
        {Object.keys(WORKOUTS).map((type,typeIndex) => {
          return(
            <button 
            onClick={
              ()=>{
                setMuscle([])
                setPoison(type)
              }
            }
            className= {'rounded-md text-md text-white border-[2px] hover:border-red-800 border-red-700 px-4 py-4 bg-slate-800 duration-150 ' + (type === poison ? "border-red-700" : "border-slate-800")} key={typeIndex}>
                <p className='capitalize'>{type.replace('_', ' ')}</p>
              </button>
          )
        })}
      </div>

      <Header index={"02"} title={'Set Your Focus'} description={"Decide which muscles will face the burn."} />
      <div className='bg-slate-800 border-[2px] rounded-lg border-red-700 border-solid flex flex-col'>
        <button 
        onClick={handleToggleState}
        className='relative p-3 flex items-center justify-center '>
          <p className='capitalize'>{muscle.length===0 ? 'Select muscle groups' : muscle.join(' ')}</p>
          <i className="absolute right-3 top-1/2 -translate-y-1/2 fa-solid fa-caret-down"></i>
        </button>
        {showModel && 
          <div className='flex flex-col'>
            {(poison == 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                return(
                  <button 
                    onClick={
                      () => {updateMuscle(muscleGroup)}
                    }
                    key={muscleGroupIndex} 
                    className={'hover:text-red-600 duration-150 ' + (muscle.includes(muscleGroup) ? ' text-red-600' : " ")} 
                  >
                    <p className='m-1 uppercase'>{muscleGroup.replace('_'," ")}</p>
                  </button>
                )
            })}
          </div>
        }
      </div>


      <Header index={"03"} title={'Unlock Your Potential'} description={"Select your ultimate objective"} />
      <div className='grid gird-cols-2 sm:grid-cols-3 gap-6'>
        {Object.keys(SCHEMES).map((scheme,schemeIndex) => {
          return(
            <button 
              onClick={
                ()=>{
                  setGoal(scheme)
                }
              }
            className= {'rounded-md text-md text-white border-[3px] hover:border-red-800 border-red-700 p-3 bg-slate-800 duration-150 ' + (scheme === goal ? "border-red-700" : "border-slate-800")} key={schemeIndex}>
                <p className='capitalize'>{scheme.replace('_', ' ')}</p>
              </button>
          )
        })}
      </div>
      <Button func={() => {
        updateWorkout()
        setTimeout(() => {window.location.href = '#workout'}, 50)
      }} text='Formulate' />
    </SectionWrapper>
          
  
)
}
