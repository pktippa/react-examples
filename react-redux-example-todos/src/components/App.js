import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo a='1'/>
    <VisibleTodoList b='2'/>
    <Footer />
  </div>
)

export default App
