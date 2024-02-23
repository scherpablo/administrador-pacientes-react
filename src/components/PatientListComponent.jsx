/* eslint-disable react/prop-types */
import PatientComponent from "./PatientComponent";

const PatientListComponent = ({ patients, setPatient, patientDelete }) => {

  return (
    <>
      {patients && patients.length ? (
        <>
          <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-hidden relative px-5 md:px-0 mt-20 md:mt-0 scrollbar-thin">
            <h2 className="text-white text-3xl text-center font-bold">
              Listado de Pacientes
            </h2>

            <p className="font-semibold text-center mt-5 text-white text-md">
              Administar tus {""}
              <span className="text-purple-500 font-bold">
                Pacientes y Turnos
              </span>
            </p>
            <div className="relative h-full overflow-y-auto pb-28">
              {patients.map((patient) => (
                <PatientComponent
                  key={patient.id}
                  patient={patient}
                  setPatient={setPatient}
                  patientDelete={patientDelete}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-hidden relative px-5 md:px-0 mt-20 md:mt-0 scrollbar-thin">
            <h2 className="text-white text-3xl text-center font-bold">
              No hay Pacientes
            </h2>

            <p className="font-semibold text-center mt-5 text-white text-md">
              Comienza a agregar pacientes y {""}
              <span className="text-purple-500 font-bold">
                Administralos aquí
              </span>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default PatientListComponent;
