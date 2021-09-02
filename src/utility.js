// create unique action
export const createActionName = (reducerName, actionName) => {
  return `${reducerName}/${actionName}`
}
