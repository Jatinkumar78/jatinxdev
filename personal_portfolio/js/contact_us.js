// $(document).ready(function () {
//   $(".contact_btn").on("click", function (event) {
//     event.preventDefault();

//     $(".contact_btn i").removeClass("d-none");

//     var proceed = true;
//     var formData = $("#contact-form-data").serializeArray();

//     $("#contact-form-data input, #contact-form-data textarea").each(
//       function () {
//         if (!$(this).val()) {
//           proceed = false;
//         }
//       }
//     );

//     if (proceed) {
//       var accessURL = window.location.pathname.split("/")[3]
//         ? "./contact-mailer.php"
//         : "/contact-mailer.php";

//       $.ajax({
//         type: "POST",
//         url: accessURL,
//         data: formData,
//         dataType: "json",
//         success: function (response) {
//           var output;
//           if (response.type === "error") {
//             output =
//               '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">' +
//               response.text +
//               "</div>";
//           } else {
//             output =
//               '<div class="alert-success" style="padding:10px 15px; margin-bottom:30px;">' +
//               response.text +
//               "</div>";
//             $("#contact-form-data")[0].reset();
//           }

//           if ($("#result").length) {
//             $("#result").hide().html(output).slideDown();
//           } else {
//             Swal.fire({
//               icon: response.type === "error" ? "error" : "success",
//               title: response.type === "error" ? "Oops..." : "Success!",
//               html:
//                 '<div class="' +
//                 (response.type === "error" ? "text-danger" : "text-success") +
//                 '">' +
//                 response.text +
//                 "</div>",
//             });
//           }

//           $(".contact_btn i").addClass("d-none");
//         },
//         error: function () {
//           Swal.fire({
//             icon: "error",
//             title: "Error",
//             text: "Something went wrong! Please try again.",
//           });
//           $(".contact_btn i").addClass("d-none");
//         },
//       });
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Please provide all required fields.",
//       });
//       $(".contact_btn i").addClass("d-none");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }

      // EmailJS parameters
      const templateParams = {
        user_name: name,
        user_email: email,
        user_message: message,
      };

      emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
        .then(function (response) {
          alert("Message sent successfully!");
          document.getElementById("contact-form").reset();
        })
        .catch(function (error) {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        });
    });
});
