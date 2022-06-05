$(document).ready(function () {
    // Basic Form
    $("#formulario").validate({
        rules: {
            user: {
                required: true,
                minlength: 5
            },
          


            password: {
                required: true,
                minlength: 5
            },

           

            email: {
                required: true,
                email: true
            },
            date: "required"
        },
        messages: {
  
            user: {
                required: "Campo Requerido",
                minlength: "El usuario debe tener mas de 4 caracteres"
            },

          

            password: {
                required: "Campo Requerido",
                minlength: "La contraseña debe tener mas de 4 caracteres"
            },

          

            email: "Ingrese Formato valido",
            date: "Campo Requerido"
        },
        errorElement: "em",

        errorPlacement: function (error, element) {
            // Add the `invalid-feedback` class to the error element
            error.addClass("invalid-feedback");
            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.next("label"));
            } else {
                error.insertAfter(element.next(".pmd-textfield-focused"));
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    });

    $("#limpiar").click(function () {
        var form = $(this).closest("form"),
        validator = form.validate();
        console.log(validator);

        validator.resetForm();
        form.find(".pmd-textfield").removeClass("pmd-textfield-floating-label-completed");
        form.find(".form-control").removeClass("is-valid is-invalid");
        
        $("form").trigger("reset");
    });

  

});