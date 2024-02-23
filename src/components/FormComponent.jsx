/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { SuccessAlert, ErrorAlert, UpdateAlert } from "./SweetAlertsComponent";

const FormComponent = ({ patients, setPatients, patient, setPatient }) => {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [annotations, setAnnotations] = useState("");

  const idGenerator = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataPatient = {
      fullname,
      phone,
      email,
      date,
      annotations,
      // id: idGenerator(),
    };

    if (Object.values(dataPatient).some((value) => value === "")) {
      ErrorAlert();
    } else if (patient.id) {
      dataPatient.id = patient.id;

      const updatedPatients = patients.map((patientState) =>
        patientState.id === patient.id ? dataPatient : patientState
      );

      setPatients(updatedPatients);
      setPatient({});
      UpdateAlert();
    } else {
      dataPatient.id = idGenerator();

      setPatients([...patients, dataPatient]);
      SuccessAlert();
    }

    setFullname("");
    setPhone("");
    setEmail("");
    setDate("");
    setAnnotations("");
  };

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setFullname(patient.fullname);
      setPhone(patient.phone);
      setEmail(patient.email);
      setDate(patient.date);
      setAnnotations(patient.annotations);
    }
  }, [patient]);

  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 px-5 md:px-0">
        <h2 className="text-white text-3xl text-center font-bold">
          Añadir Pacientes
        </h2>

        <p className="font-semibold text-center mt-5 text-white text-md">
          Añade tus pacientes desde {""}
          <span className="text-purple-500 font-bold">
            El siguiente formulario
          </span>
        </p>

        <form
          className="mt-5 bg-gray-900 rounded-md py-10 px-8 text-white text-sm"
          onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <label htmlFor="name" className="block font-semibold uppercase">
              Nombre y Apellido
            </label>
            <input
              id="name"
              type="text"
              placeholder="ingresa el nombre aquí"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-purple-500"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className="block font-semibold uppercase">
              Teléfono
            </label>
            <input
              id="phone"
              type="phone"
              placeholder="ingresa el apellido aquí"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-purple-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block font-semibold uppercase">
              Correo
            </label>
            <input
              id="email"
              type="email"
              placeholder="ingresa el apellido aquí"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="date" className="block font-semibold uppercase">
              Fecha
            </label>
            <input
              id="date"
              type="date"
              placeholder="ingresa el apellido aquí"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-purple-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="annotations"
              className="block font-semibold uppercase"
            >
              Anotaciones
            </label>
            <textarea
              id="annotations"
              placeholder="ingresa tus anotaciones aquí"
              className="w-full rounded-md min-h-28 mt-2 p-2 text-sm text-purple-500"
              value={annotations}
              onChange={(e) => setAnnotations(e.target.value)}
            ></textarea>
          </div>

          <input
            type="submit"
            value={patient.id ? "Editar Paciente" : "Agregar Paciente"}
            className="bg-purple-500 w-full p-3 rounded-md mt-10 uppercase text-base
             hover:bg-purple-600 cursor-pointer transition-all"
          />
        </form>
      </div>
    </>
  );
};

export default FormComponent;
