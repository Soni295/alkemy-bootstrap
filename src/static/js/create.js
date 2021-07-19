export const create = (type, status={}, children=[]) => {
  const element = document.createElement(type)
  for(const propety in status) element[propety] = status[propety]
  for(const child of children) element.appendChild(child)
  return element
}
