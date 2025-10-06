import './App.css'
import EmployeeTable from './components/EmployeeTable'
import Modal from './screens/Modal'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10 px-4">
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-6">
          <EmployeeTable />
          <Modal />
        </div>
      </div>
    </>
  )
}

export default App
