/**
 * @filename    : regex_helper.js
 * @author      : 한송희 (onee.ssong@gmail.com), 정민아 (alsdk5069@gmail.com), 양수원 (ysw7939@gmail.com)
 * @description : 유효성 검사 함수들의 모음
 */

document.write("<script src='/양수원_주소API/js/regex_helper.js'></script>");

/**--- 유효성 검사 ---*/
document.querySelector('#join_form').addEventListener("submit", e => {
    e.preventDefault();

    const regexHelper = new RegexHelper();


    // 우편번호 검사
    if(!regexHelper.value('#postcode', '우편번호를 입력하세요.')) {return false;}
    if(!regexHelper.postnumber('#postcode', '우편번호가 잘못되었습니다.')) {return false;}

    // 주소 검사
    if(!regexHelper.value('#address', '주소를 입력하세요.')) {return false;}
    if(!regexHelper.Address('#address', '주소가 잘못되었습니다.')) {return false;}

    // 상세주소 검사
    if(!regexHelper.value('#address_detail', '상세주소를 입력하세요.')) {return false;}
     /** 처리 완료 */
     alert("가입이 완료되었습니다.");
});