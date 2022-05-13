$(Document).ready(function () {
  $("#formulario").validate({
    rules: {
      usuario: {
        required: true,
        minlength: 5,
      },
      clave: {
        required: true,
        minlength: 5,
      },
    },
    messages: {
      usuario: {
        required: "Debe de ingresar el usuario",
        minlength: "El campo debe de tener 5 caracteres o mas",
      },
      clave: {
        required: "Debe de ingresar la contraseña",
        minlength: "El campo debe de tener 5 caracteres o mas",
      },
    },
  });
  $("#formulario2").validate({
    rules: {
      nombres: {
        number: false,
        required: true,
        minlength: 5,
      },
      apellidos: {
        number: false,
        required: true,
        minlength: 5,
      },
      correo: {
        required: true,
        email: true,
        minlength: 10,
      },
      nusuario: {
        required: true,
        minlength: 8,
      },
      clave: {
        required: true,
        minlength: 8,
      },
    },
    messages: {
      nombres: {
        number: "Solo acepta caracteres",
        required: "El Campo es obligatorio",
        minlength: "El campo debe tener 5 caracteres o mas",
      },
      apellidos: {
        number: "Solo acepta caracteres",
        required: "El campo es obligatorio",
        minlength: "El campo debe tener 5 caracteres o mas",
      },
      correo: {
        required: "El campo es obligatorio",
        email: "El formato no es valido",
        minlength: "El campo debe tener 10 caracteres o mas",
      },
      nusuario: {
        required: "El campo es obligatorio",
        minlength: "El campo debe tener 8 caracteres o mas",
      },
      clave: {
        required: "El campo es obligatorio",
        minlength: "El campo debe tener 8 caracteres o mas",
      },
    },
  });
  $("#formulario3").validate({
    rules: {
      nombres: {
        number: false,
        required: true,
        minlength: 5,
      },
      apellidos: {
        number: false,
        required: true,
        minlength: 5,
      },
      rut: {
        required: true,
        //number: true,
        //minlength: 8,
        //maxlength:10,
      },
      telefono: {
        required: true,
        number: true,
        minlength: 9,
        maxlength:12,
      },
      correo: {
        required: true,
        minlength: 8,
        email: true,
      },
      contraseña: {
        required: true,
        minlength: 8,
      },
    },
    messages: {
      nombres: {
        number: "Solo acepta caracteres",
        required: "El Campo es obligatorio",
        minlength: "El campo debe tener 5 caracteres o mas",
      },
      apellidos: {
        number: "Solo acepta caracteres",
        required: "El campo es obligatorio",
        minlength: "El campo debe tener 5 caracteres o mas",
      },
      rut: {
        required: "El campo es obligatorio",
        //number: "solo se aceptan numeros sin guion",
        minlength: "El campo debe tener 8 caracteres o mas",
        maxlength: "El campo debe tener un maximo de 9 caracteres",
      },
      telefono: {
        required: "El campo es obligatorio",
        number: "solo se aceptan numeros",
        minlength: "El campo debe tener 9 caracteres o mas",
        maxlength:"el campo acepta como maximo 12 caracteres",
      },
      correo: {
        required: "El campo es obligatorio",
        email: "El formato no es valido",
        minlength: "El campo debe tener 10 caracteres o mas",
      },
      clave: {
        required: "El campo es obligatorio",
        minlength: "El campo debe tener 8 caracteres o mas",
      },
    },
  });
  $("#nombres").validCampoFranz(" abcdefghijklmnñopqrstuvwxyzáéiou");
  $("#apellidos").validCampoFranz(" abcdefghijklmnñopqrstuvwxyzáéiou");
});
