document.write("<script src='/js/regex_helper.js'></script>");

/**--- 유효성 검사 ---*/
document.querySelector('#join_form').addEventListener("submit", e => {
    e.preventDefault();

    const regexHelper = new RegexHelper();

    /** 아이디 검사 */
    if (!regexHelper.value('#id', '아이디를 입력하세요.')) { return false; }
    if (!regexHelper.min_length('#id', 4, '아이디는 최소 4자 이상 입력 가능합니다.')) { return false; }
    if (!regexHelper.max_length('#id', 20, '아이디는 최대 20자까지만 입력 가능합니다.')) { return false; }
    if (!regexHelper.eng_num('#id', '아이디는 영어와 숫자 조합만 입력 가능합니다.')) { return false; }
});