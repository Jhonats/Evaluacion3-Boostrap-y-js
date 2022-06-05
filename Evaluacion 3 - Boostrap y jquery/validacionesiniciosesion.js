$(document).ready(function () {
    // Basic Form
    $("#formulario2").validate({
        rules: {
            user2: {
                required: true,
                minlength: 5
            },
          


            password2: {
                required: true,
                minlength: 5
            },

        },
        messages: {
  
            user2: {
                required: "Campo Requerido",
                minlength: "El usuario debe tener mas de 4 caracteres"
            },

          

            password2: {
                required: "Campo Requerido",
                minlength: "La contraseña debe tener mas de 4 caracteres"
            },

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

    $("#limpiar2").click(function () {
        var form = $(this).closest("form"),
        validator = form.validate();
        console.log(validator);

        validator.resetForm();
        form.find(".pmd-textfield").removeClass("pmd-textfield-floating-label-completed");
        form.find(".form-control").removeClass("is-valid is-invalid");
        
        $("form").trigger("reset");
    });

  

});