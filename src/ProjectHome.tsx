import React from 'react'
import { useParams } from 'react-router-dom'
type Props = {}

const ProjectHome = (props: Props) => {

    const obj = useParams();

    console.log(obj)

  return (
    <div>ProjectHome</div>
  )
}

export default ProjectHome