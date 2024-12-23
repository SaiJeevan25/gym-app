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
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-lg sm:text-2xl'>{title}</h4>
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

    <SectionWrapper id='generate'
      header={"generate your workout"} title={['It\'s', "Huge", 'o\'clock']}>

      <Header index={"01"} title={'Pick your Poison'} description={"Select the workout to endure"} />
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
            className= {'rounded-md text-md text-white border-[3px] hover:border-blue-700 border-blue-400 px-5 py-4 bg-slate-950 duration-150 ' + (type === poison ? "border-blue-700":"border-blue-400")} key={typeIndex}>
                <p className='capitalize'>{type.replace('_', ' ')}</p>
              </button>
          )
        })}
      </div>

      <Header index={"02"} title={'Lock on targets'} description={"Select the muscles judged for annihilation"} />
      <div className='bg-slate-950  rounded-lg border-blue-400 border border-solid flex flex-col'>
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
                    className={'hover:text-blue-400 duration-150 ' + (muscle.includes(muscleGroup) ? ' text-blue-400' : " ")} 
                  >
                    <p className='uppercase'>{muscleGroup.replace('_'," ")}</p>
                  </button>
                )
            })}
          </div>
        }
      </div>


      <Header index={"03"} title={'Become Juggernaut'} description={"Select your ultimate objective"} />
      <div className='grid gird-cols-2 sm:grid-cols-3 gap-6'>
        {Object.keys(SCHEMES).map((scheme,schemeIndex) => {
          return(
            <button 
              onClick={
                ()=>{
                  setGoal(scheme)
                }
              }
            className= {'rounded-md text-md text-white border-[3px] hover:border-blue-700 border-blue-400 px-3 py-4 bg-slate-950 duration-150 ' + (scheme === goal ? "border-blue-700":"border-blue-400")} key={schemeIndex}>
                <p className='capitalize'>{scheme.replace('_', ' ')}</p>
              </button>
          )
        })}
      </div>
      <Button func={updateWorkout} text='Formulate' />
    </SectionWrapper>
          
  
)
}
