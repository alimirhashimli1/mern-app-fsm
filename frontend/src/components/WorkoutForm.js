import React, { useState } from 'react'

const WorkoutForm = () => {
  const [title, setTitle] = useState("")
  const [reps, setReps] = useState("")
  const [load, setLoad] = useState("")
  const [error, setError] = useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {title, reps, load}

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const json = response.json()

    if(!response.ok)  {
      setError(json.error)
    }

    if(response.ok) {
      setTitle("")
      setLoad("")
      setReps("")
      setError(null)
    }
  }



  return (
    <form onSubmit={handleSubmit}>
      <label>Exercise Title:</label>
      <input type="text" onChange={(e) => setTitle(e.target.value)}/>

      <label>Load (in kg):</label>
      <input type="number" onChange={(e) => setLoad(e.target.value)}/>

      <label>Reps (x):</label>
      <input type="number" onChange={(e) => setReps(e.target.value)}/>
      <button>Submit</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm