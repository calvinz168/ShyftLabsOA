import React from 'react'

const Student = ({ student }) => {
  return (
    <div className="student">
        <h1>{student.text} {student.text2}</h1>
    </div>
  )
}

export default Student