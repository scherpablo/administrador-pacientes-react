import { useState, useEffect } from "react";
import HeaderComponent from "./components/HeaderComponent";
import FormComponent from "./components/FormComponent";
import PatientListComponent from "./components/PatientListComponent";
import { DeleteAlert } from "./components/SweetAlertsComponent";

const App = () => {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState([]);

  const patientDelete = (id) => {
    const updatePatient = patients.filter((patient) => patient.id !== id);

    setPatients(updatePatient);
    DeleteAlert();
  };

  useEffect(() => {
    const getLocalStorage = () => {
      const patientsLocalStorage = JSON.parse(localStorage.getItem("patients")) ?? [];
      setPatients(patientsLocalStorage);
    };
    getLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  return (
    <>
      <div className="container mx-auto h-screen min-w-[450px]">
        <div className="">
          <HeaderComponent />
        </div>

        <div className="md:flex justify-center mt-10 gap-5">
          <FormComponent
            patients={patients}
            setPatients={setPatients}
            patient={patient}
            setPatient={setPatient}
          />
          <PatientListComponent
            patients={patients}
            setPatient={setPatient}
            patientDelete={patientDelete}
          />
        </div>
      </div>
    </>
  );
};

export default App;
