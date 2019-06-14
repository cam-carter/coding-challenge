import _ from 'lodash'
import moment from 'moment'

export const RECEIVE_TASKS = 'RECEIVE_TASKS'
export const COMPLETE_TASK = 'COMPLETE_TASK'

const receiveTasks = (tasks, state) => {
  return {...state, tasks: _.unionBy(state.tasks, tasks, 'id')}
}

const completeTask = (task, state) => {
  task.completedAt = moment()
  let updatedTasks = [...state.tasks]

  updatedTasks = _
    .chain(updatedTasks)
    .map((updatedTask) => {
      const dependencyIds = _
        .reject(updatedTask.dependencyIds, (id) => {
          return id === task.id
        })
      return _.set(updatedTask, 'dependencyIds', dependencyIds)
    })
    .value()

  updatedTasks = _.unionBy(updatedTasks, [task], 'id')
  return { ...state, tasks: updatedTasks }
}

export const taskReducer = (state, action) => {
  switch (action.type) {
    case RECEIVE_TASKS:
      return receiveTasks(action.tasks, state)
    case COMPLETE_TASK:
      return completeTask(action.task, state)
    default:
      return state
  }
}
