import React from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { useState } from'react'
import { generateWorkout } from './utils/functions' 

export default function App() {
  const [text, setText] = useState('Accept and Begin')
  const [showGenerator, setGenerator] = useState(false)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscle] = useState([])
  const [goal, setGoal] = useState('strength_power')
  const [workout, setWorkout] = useState(null)

  function updateWorkout() {
    if (muscles.length < 1) return
    let newWorkout = generateWorkout({poison, muscles, goal})
    console.log(newWorkout)
    setWorkout(newWorkout)
    window.location.href = '#workout'
  }

  function updateGenerator() {
    setGenerator(!showGenerator)
    setTimeout(() => {
      setText(showGenerator ? 'Accept and Begin': 'Deny')
    }, 100)
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero updateGenerator = {updateGenerator} text={text}/>
      {showGenerator && (<Generator 
      poison = {poison} 
      setPoison = {setPoison}
      muscle = {muscles}
      setMuscle = {setMuscle}
      goal = {goal}
      setGoal = {setGoal}
      updateWorkout = {updateWorkout}
      />)  }
      {workout && (<Workout workout = {workout}/>)}
    </main>
  )
}
