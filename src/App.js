import {useState} from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"


  const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'June 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'September 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Grocery Shopping',
        day: 'June 6th at 5:30pm',
        reminder: false,
    }
])

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)) 
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map)((task) => 
      task.id === id ? 
      {...task, reminder: !task.reminder} : task
      )
  }

  return (
    <div className="container">
     <Header />
     {tasks.length > 0 ? (
     <Tasks tasks={tasks} 
     onDelete={deleteTask} onToggle={toggleReminder}/>
     ) : (
      'No Tasks to Delete'
      )}
    </div>
  );
}

export default App;
