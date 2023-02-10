import { useState, createContext } from 'react'
import './NotificationService.css'

const Notification = ({ type, message }) => {
    if(!message) {
      return null
    }
  
    return (
      <div className='notification'>
        {message}
      </div>
    )
  }
  

export const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [type, setType] = useState('success')

    const setNotification = (type, message, time) => {
        setMessage(message)
        setType(type)
    
        setTimeout(() => {
          setMessage('')
        }, time * 1000)
      }

    return (
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message} type={type}/>
            { children }
        </NotificationContext.Provider>
    )
}