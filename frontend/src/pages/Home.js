import React from 'react'
import { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutsForm from '../components/WorkoutsForm'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()


    useEffect(() => {
        const fetchWorkouts = async ()=> {
            const response = await fetch("/api/workouts")
            const json = await response.json()

            if(response.ok) {
                dispatch({type: "SET_WORKOUTS", payload: json})
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