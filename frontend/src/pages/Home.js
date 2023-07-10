import React from 'react'
import { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutsForm from '../components/WorkoutsForm'

const Home = () => {
    const [workouts, setWorkouts] = useState(null)


    useEffect(() => {
        const fetchWorkouts = async ()=> {
            const response = await fetch("/api/workouts")
            const json = await response.json()

            if(response.ok) {
                setWorkouts(json)
            }
        }


        fetchWorkouts()
    }, [])



  return (
    <div className='home'>
        <div className="workouts">
            {
                workouts && workouts.map(workout => (
                    <WorkoutDetails workout={workout} key={workout._id}/>
                ))
            }
            
        </div>
        <WorkoutsForm/>
    </div>
  )
}

export default Home