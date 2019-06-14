import React from 'react'
import { Link } from 'react-router-dom'

const TaskGroup = (props) => {
  const {
    group,
    tasks
  } = props;

  const completedTasks = tasks.filter((task) => task.completedAt)

  return (
    <Link to={`/${group}`} className="has-text-black">
      <div key={group}>
        <img src={`${process.env.PUBLIC_URL}/group.svg`} alt="task group"></img>
        <h1 className="is-size-4 is-inline-block">{group}</h1>
        <div className="has-margin-left-md">{completedTasks.length} of {tasks.length} complete</div>
      </div>
      <hr/>
    </Link>
  )
}

export default TaskGroup
