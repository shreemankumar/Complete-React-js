import React from 'react'
import Section1 from './Section1/Section1.jsx'
import Section2 from './Section2/Section2.jsx'

const App = () => {
  const users = [
    {
      image : 'https://images.unsplash.com/photo-1653079537423-79a33181bc41?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : 'Hello, I am John Doe, a software developer.',
      tag : 'Developer'
    },
    {
      image : 'https://images.unsplash.com/photo-1633527737375-06681050e369?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : 'Hi, I am Jane Smith, a graphic designer.',
      tag : 'Designer'
    },
    {
      image : 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : 'Greetings, I am Mike Johnson, a project manager.',
      tag : 'Manager'
    },
    {
      image : 'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : 'Welcome, I am jimmy kendra, an Intern.',
      tag : 'Intern'
    }
  ]

  return (
    <div>
      <Section1 users = {users}/>
      <Section2 />
    </div>
  )
}

export default App