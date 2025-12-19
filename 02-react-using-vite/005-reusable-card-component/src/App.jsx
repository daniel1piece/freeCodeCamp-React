import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Button from './components/Button'
import Button2 from './components/Button2'
import DynamicButton from './components/DynamicButton'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  const profiles = [
    {
      id: 1,
      name: "Mark",
      title: "Frontend developer",
      bio: "I like to work with different frontend technologies and play video games."
    },
    {
      id: 2,
      name: "Tiffany", 
      title: "Engineering manager",
      bio: "I have worked in tech for 15 years and love to help people grow in this industry."
    }, 
    {
      id: 3,
      name: "Doug",
      title: "Backend developer", 
      bio: "I have been a software developer for over 20 years and I love working with Go and Rust"
    }
  ];

  return (
    <div className='flex-container'>
      {profiles.map(profile => 
        <Card 
          name={profile.name}
          title={profile.title}
          bio={profile.bio}
          key={profile.id}
        />
      )}
    </div>
  )
}

export default App
