// 테스트 코드
var sum = add(1,2);
if(sum == 3) {
    console.log('성공');
} else {
    console.log('실패');
}

var sum2 = add(1,3);
if(sum2 == 3) { // 인위적 에러 조건
    console.log('성공');
} else {
    console.log('실패');
}