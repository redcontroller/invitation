function sendMail() {
    var params = {
        name: document.getElementById("input-name").value,
        phone: document.getElementById("input-phone").value,
        email: document.getElementById("input-email").value,
    };
    const emailAlert = document.getElementsByClassName("alert-container")[0];

    const serviceID = "service_32yih44";
    const templateID = "template_5k1szbx";

    // 개인정보 입력되지 않음 경고
    for (let key in params) {
        if (params[`${key}`] === "") {
            document.getElementsByClassName(`warnning-${key}`)[0].style.display = "block";
            document.getElementById(`input-${key}`).style.border = "1px solid #F4492E";
            document.getElementById(`input-${key}`).style.borderBottom = "2px solid #F4492E";
        } else {
            document.getElementsByClassName(`warnning-${key}`)[0].style.display = "none";
            document.getElementById(`input-${key}`).style.border = "1px solid #C4C4C4";
            document.getElementById(`input-${key}`).style.borderBottom = "2px solid #A0ACB1";
        }
    }

    // 모든 정보가 입력되면 확인 이메일 전송
    if ((params.name !== "") && (params.phone !== "") && (params.email !== "")) {
        emailjs
        .send(serviceID, templateID, params)
        .then((response) => {
            document.getElementById("input-name").value = "";
            document.getElementById("input-phone").value = "";
            document.getElementById("input-email").value = "";
            console.log(response);
            // alert("참가신청 성공! 🙌\n메일을 확인해주세요😋😍");

            emailAlert.style.display='flex';
            emailAlert.style.animation = "fadeIn 0.8s ease forwards";
        })
        .catch((err) => console.log(err));
    }
}

function closeAlert() {
    document.getElementsByClassName("alert-container")[0].
    style.animation = "fadeOut 0.8s ease forwards";
    document.getElementsByClassName("btn")[0].style.marginTop = "10px";
}
