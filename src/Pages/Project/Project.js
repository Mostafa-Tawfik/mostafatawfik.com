import React from 'react'
import { useParams } from 'react-router-dom'
// import AppData from '../../AppData'

export default function Project() {
  const params = useParams()

  const [showProject, setShowProject] = React.useState([])

  React.useEffect(()=>{
    setShowProject(params)
  },[params])

  console.log(showProject)
  return (
    <div>
      <h1>{showProject.title}</h1>
    </div>
  )
}
