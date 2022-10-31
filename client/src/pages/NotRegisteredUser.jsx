import React, { useContext } from 'react'
import { AppContext } from '../../Context'

export const NotRegisteredUser = () => {
    const {activateAuth} = useContext(AppContext)
  return (
    <form>
        <button onClick={activateAuth}>Sing In</button>
    </form>
  )
}
