const form = document.getElementById("form")

form.addEventListener("submit", function(event) {
    event.preventDefault() // 폼 제출 기본 동작 방지

    let userId = event.target.elements["id"].value
    let userPw = event.target.elements["password"].value
    let userPwCheck = event.target.elements["passwordCheck"].value
    let userName = event.target.elements["name"].value
    let userPhone = event.target.elements["phone"].value
    let userPosition = event.target.elements["position"].value
    let userGender = event.target.elements["gender"].value
    let userEmail = event.target.elements["email"].value
    let userIntro = event.target.elements["intro"].value

    /*아이디 길이 조정*/
    if (userId.length < 5 || userId.length > 20) {
        alert("아이디는 5자 이상 20자 이하로 입력해주세요.")
        return
    }

    /*비밀번호 확인*/
    if (userPw !== userPwCheck) {
        alert("비밀번호가 일치하지 않습니다.")
        return
    }

    /*가입 환영 메시지*/
    document.body.innerHTML = `
        <h1>${userName}님 환영합니다!</h1>
        <p><strong>아이디:</strong> ${userId}</p>
        <p><strong>이름:</strong> ${userName}</p>
        <p><strong>전화번호:</strong> ${userPhone}</p>
        <p><strong>원하는 직무:</strong> ${userPosition}</p>`
})
