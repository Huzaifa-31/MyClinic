import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import BreadCrumb from "./components/BreadCrumb"
import PatientCard from "./components/PatientCard"
import MedicalHistory from "./components/MedicalHistory"
import Examination from "./components/Examination"
import Acce from "./components/Acce"
// import patients from "./patients.json"
import usePatientStore from "./store/usePatientStore"
import { useForm } from "react-hook-form"

function App() {
  const { patients } = usePatientStore();
  const [patient, setPatient] = useState(patients[0])
  const [results, setResults] = useState(null);
  const [search, setSearch] = useState("");


  const handleSearchVal = (val) => {
    if (val === "") return setResults(null)
    const results = patients.filter((item) => {
      const firstName = item.patient.first_name.toLowerCase();
      const lastName = item.patient.last_name.toLowerCase();
      const searchValue = val.toLowerCase();
      return firstName.includes(searchValue) || lastName.includes(searchValue);
    })
    setResults(results)
  }

  useEffect(() => {
    handleSearchVal(search)
  }, [search])

  const handleSelect = (id) => {
    const res = patients.find(item => item.id === id)
    setResults(null)
    setPatient(res)
    setSearch("")
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="flex pt-2 pl-4 h-full">
      <div className="sidebar w-1/5 border border-[#fff] rounded-lg bg-white">
        <Sidebar />
      </div>
      <div className="main w-full pl-4 border border-[#FAFAFB] rounded bg-[#FAFAFB]">
        <Navbar
          setSearchValue={(val) => setSearch(val)}
          handleSelect={(id) => handleSelect(id)}
          searchResults={results}
          
          search={search}
        />
        <BreadCrumb name={`${patient.patient.first_name} ${patient.patient.last_name}`} />
        <div className="grid grid-cols-1 md:grid-cols-2 my-4 mx-3 gap-x-5">
          <div className="w-full  mr-2"> {/* 2/3 width */}
            <div className="flex flex-col">
              <PatientCard
                patientData={patient.patient}
              />
              <MedicalHistory
                patientData={patient.medical_history}
                labs={patient.labs}
              />
            </div>
          </div>
          <div className="w-full bg-white rounded-lg"> {/* 1/3 width */}
            <div className="flex flex-col pl-2">
              <Examination
                exam={patient.examination}
              />
              <Acce
                acce={patient.acce}
                foot={patient.foot}
                eye={patient.eye}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
