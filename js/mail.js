function sendMail() {
    const serviceID = "service_sxd063r";
    const templateID = "template_osupinp";
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Your message sent successfully");
            }
        )
        .catch(err => console.log(err));
}

