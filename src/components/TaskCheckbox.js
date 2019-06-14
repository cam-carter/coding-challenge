import React, { useState, useEffect } from 'react'
import _ from 'lodash'

const TaskCheckbox = ({task, completeTask}) => {
  const taskDependencyIds = _.get(task, 'dependencyIds')

  function taskStatus() {
    if (taskDependencyIds.length > 0) {
      return 'locked'
    } else if (task.completedAt) {
      return 'completed'
    } else {
      return 'incomplete'
    }
  }

  const [checkboxSrc, setCheckbox] = useState(`${process.env.PUBLIC_URL}/${taskStatus()}.svg`)
  useEffect(() => {
    setCheckbox(`${process.env.PUBLIC_URL}/${taskStatus()}.svg`)
  })
  function handleCheckboxClick(e) {
    completeTask(task)
  }

  return (
    <img id={`${task.id}-checkbox`} src={checkboxSrc} alt={taskStatus()} onClick={handleCheckboxClick}></img>
  )
}

export default TaskCheckbox
