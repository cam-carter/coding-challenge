import React, { useContext } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import TaskContext from '../context/TaskContext'
import TaskCheckbox from '../components/TaskCheckbox'

const TaskDetail = (props) => {
  const { tasks, completeTask } = useContext(TaskContext)
  const group = props.match.params.group

  return (
    <div className="container is-mobile">
      <div className="columns">
        <span className="column">
          <h1 className="is-size-1 is-pulled-left">{group}</h1>
        </span>
        <div className="column">
          <Link to='/' className="is-pulled-right">ALL GROUPS</Link>
        </div>
      </div>
      <hr/>
      {
        _.chain(tasks)
         .filter((task) => task.group === group)
         .map((task) => {
           const taskName = () => {
             if (task.completedAt) {
               return <strike>{task.task}</strike>
             } else if (task.dependencyIds.length > 0) {
               return <span className="has-text-grey">{task.task}</span>
             } else {
               return <span>{task.task}</span>
             }
           }
           return (
             <div key={task.id}>
                 <TaskCheckbox task={task} completeTask={completeTask} />
                 <span> {taskName()}</span>
             </div>
           )
         })
         .value()
      }
    </div>
  )
}

export default TaskDetail
