import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(workout.title)
  const [newReps, setNewReps] = useState(workout.reps)
  const [newLoad, setNewLoad] = useState(workout.load)
  const [error, setError] = useState("")

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }


  const handleEdit = async (id, title, load, reps) => {
    const response = await fetch(`api/workouts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title, load, reps})
    })
    const json = await response.json()


    if(!response.ok)  {
      setError(response.error)
    }

    if(!response.ok)  {
      dispatch({type: "EDIT_WORKOUT", payload: json})
      setEditing(false)
    }
  }

  const changeEditing = () => {
    setEditing(true)
  }

  const handleSave = () => {
    handleEdit(workout._id, newTitle, newLoad, newReps)
    setEditing(false)
  }




  return (
    <div className="workout-details">
     
      {editing ? 
      (
        <>
        <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
        <input type="number" value={newLoad} onChange={e => setNewLoad(e.target.value)} />
        <input type="number" value={newReps} onChange={e => setNewReps(e.target.value)} />
        <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
        <span className='edit' onClick={handleSave}>save</span>
        </>
      ) : 
      
      
      (
        <>
        <h4>{newTitle}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Number of reps: </strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
        <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
        <span className='edit' onClick={changeEditing}>edit</span>
        </>
      )
      
    
    }
    </div>
  )
}

export default WorkoutDetails