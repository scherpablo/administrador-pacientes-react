import Swal from "sweetalert2";

const SuccessAlert = () => {
  Swal.fire({
    title: "Paciente agregado",
    text: "El paciente ha sido agregado correctamente",
    icon: "success",
    footer:
      "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #A855F7; font-weight: 700'>Pablo Scherpa</a>",
  });
};

const ErrorAlert = () => {
  Swal.fire({
    title: "Hay campos sin llenar",
    text: "Por favor completa todos los campos",
    icon: "error",
    footer:
      "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #A855F7; font-weight: 700'>Pablo Scherpa</a>",
  });
};

const UpdateAlert = () => {
  Swal.fire({
    title: "Paciente Editado",
    text: "El paciente ha sido editado correctamente",
    icon: "success",
    footer:
      "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #A855F7; font-weight: 700'>Pablo Scherpa</a>",
  });
};

const DeleteAlert = () => {
  Swal.fire({
    title: "Paciente Eliminado",
    text: "El paciente ha sido eliminado correctamente",
    icon: "success",
    footer:
      "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #A855F7; font-weight: 700'>Pablo Scherpa</a>",
  });
};

const ConfirmAlert = async () => {
  return await Swal.fire({
    title: "¿Eliminar paciente?",
    text: "¿Está seguro que desea eliminar el paciente?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
    footer:
      "Desarrollado por <a href='https://pabloscherpa.com.ar/' target='_blank' style='cursor: pointer; color: #A855F7; font-weight: 700'>Pablo Scherpa</a>",
  });
};

export { SuccessAlert, ErrorAlert, UpdateAlert, DeleteAlert, ConfirmAlert };
