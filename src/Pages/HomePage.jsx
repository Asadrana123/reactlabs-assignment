import React from 'react'
import Counter from '../components/Counter/Counter'
import TextEditor from '../components/TextEditor/TextEditor'
import DataForm from '../components/DataForm/DataForm'
import Additional from '../components/Additional/Additional'
import "./HomePage.css"
function HomePage() {
  return (
    <div className='homepage-container'>
       <Counter/>
       <TextEditor/>
       <DataForm/>
       <Additional/>
    </div>
  )
}

export default HomePage
