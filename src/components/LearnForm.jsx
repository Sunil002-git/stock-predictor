import React, { useState } from 'react'

const LearnForm = () => {
    const [firstName, setFirstName] = useState('Sunil')
    const [lastName, setLastName] = useState('Marri')

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }
  return (
    <>
        <form action="">
            First name: <input type="text" name='firstName' onChange={handleFirstName} value={firstName}/>
            <br></br>
            Last name: <input type="text" name='firstName' onChange={handleLastName} value={lastName}/>

        </form>
    </>
  )
}

export default LearnForm