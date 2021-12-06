document.write("<script src='/js/regex_helper.js'></script>");

/**--- 유효성 검사 ---*/
document.querySelector('#join_form').addEventListener("submit", e => {
    e.preventDefault();

    const regexHelper = new RegexHelper();

    /** 이름 검사 */
    if (!regexHelper.value('#name', '이름을 입력하세요.')) { return false; }
    if (!regexHelper.min_length('#name', 2, '이름은 최소 2자 이상 입력 가능합니다.')) { return false; }
    if (!regexHelper.max_length('#name', 20, '이름은 최대 20자까지만 입력 가능합니다.')) { return false; }
    if (!regexHelper.kor('#name', '이름은 한글만 입력 가능합니다.')) { return false; }

    // 처리 완료
    alert("입력형식 검사 완료!!!");
});