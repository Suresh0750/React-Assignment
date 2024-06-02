

import './index.css'
import ProfileCard from './profileCard'
import CountNum from './count.jsx'
import UserForm from './form.jsx'
function App() {

  const container ={
    display : 'flex',
    justifyContent : 'space-around',
    width : '100%',
    flexWrap : 'wrap'
  }


  return (
    <>
    <div style = {container} >
      <ProfileCard/>
    </div>
    <CountNum/>
    <UserForm/>
    </>
  )
}

export default App
