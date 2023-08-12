function sendMail() {
    var params = {
        name: document.getElementById("input-name").value,
        phone: document.getElementById("input-phone").value,
        email: document.getElementById("input-email").value,
    };

    const serviceID = "service_32yih44";
    const templateID = "template_5k1szbx";

    emailjs
    .send(serviceID, templateID, params)
    .then((response) => {
        document.getElementById("input-name").value = "";
        document.getElementById("input-phone").value = "";
        document.getElementById("input-email").value = "";
        console.log(response);
        alert("참가신청 성공! 🙌\n메일을 확인해주세요😋😍");
    })
    .catch((err) => console.log(err));
}