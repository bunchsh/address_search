document.write("<script src='/js/regex_helper.js'></script>");

/**--- 유효성 검사 ---*/
document.querySelector('#join_form').addEventListener("submit", e => {
    e.preventDefault();

    const regexHelper = new RegexHelper();

     /** 비밀번호 검사 */
     if (!regexHelper.value("#pw", "비밀번호를 입력하세요.")) {return false;}
     if (!regexHelper.min_length("#pw", 8, "비밀번호는 최소 8자 이상 입력 가능합니다.")) {return false;}
     if (!regexHelper.max_length("#pw", 16, "비밀번호는 최대 16자까지 입력 가능합니다.")) {return false;}
     if (!regexHelper.compare_to("#pw", "#pw_re", "비밀번호 확인이 잘못되었습니다")) {return false;}

     // 이메일 검사
    if(!regexHelper.value('#email', '이메일을 입력하세요.')) {return false;}
    if(!regexHelper.email('#email', '이메일 주소가 잘못되었습니다.')) {return false;}

    // 연락처 검사
    if(!regexHelper.value('#tel', '연락처를 입력하세요.')) {return false;}
    if(!regexHelper.cellphone('#tel', '연락처가 잘못되었습니다.')) {return false;}

     /** 처리 완료 */
     alert("가입이 완료되었습니다.");
});