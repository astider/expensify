import React from 'react'

const EditExpensePage = (props) => {

  console.log(props.match.params.id)

  return (
    <div>
      Editing the expense with id of {props.match.params.id}
    </div>
  )
}

export default EditExpensePage
