/* eslint-disable react/prop-types */
import { ConfirmAlert } from "./SweetAlertsComponent";

const PatientComponent = ({ patient, setPatient, patientDelete }) => {
  const { fullname, phone, email, date, annotations, id } = patient;

  const handleDelete = async () => {
    try {
      const result = await ConfirmAlert();

      if (result.isConfirmed) {
        patientDelete(id);
      }
    } catch (error) {
      console.error("Error al mostrar el modal de confirmación: ", error);
    }
  };

  return (
    <>
      <div>
        <div className="mt-5 bg-gray-900 rounded-md py-10 px-8 text-white text-sm md:mr-5">
          <div className="mb-5">
            <p className="uppercase text-gray-00 font-semibold p-">
              Nombre y Apellido: {""}
              <span className="text-gray-400 normal-case text-base font-medium">
                {fullname}
              </span>
            </p>
          </div>
          <div className="mb-5">
            <p className="uppercase text-white font-semibold p-">
              Telefono: {""}
              <span className="text-gray-400 normal-case text-base font-medium">
                {phone}
              </span>
            </p>
          </div>
          <div className="mb-5">
            <p className="uppercase text-white font-semibold p-">
              Correo: {""}
              <span className="text-gray-400 normal-case text-base font-medium">
                {email}
              </span>
            </p>
          </div>
          <div className="mb-5">
            <p className="uppercase text-white font-semibold p-">
              Fecha: {""}
              <span className="text-gray-400 normal-case text-base font-medium">
                {date}
              </span>
            </p>
          </div>
          <div className="">
            <p className="uppercase text-white font-semibold p-">
              Anotaciones: {""}
              <span className="text-gray-400 normal-case text-base font-medium">
                {annotations}
              </span>
            </p>
          </div>
          <div className="flex justify-end gap-5">
            <button
              type="button"
              onClick={() => setPatient(patient)}
              className="bg-purple-500 p-3 rounded-md w-24 uppercase font-semibold hover:bg-purple-700"
            >
              {" "}
              Editar
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-500 p-3 rounded-md w-24 uppercase font-semibold hover:bg-red-700"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientComponent;
