import React from 'react'

const LearnMap = () => {
    const names = ['sunil', 'mari', 'sankar', 'bharat']
  return (
    <>
        <h2>LearnMap</h2>
        <ul>
            {names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    </>
  )
}

export default LearnMap