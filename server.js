const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 정적 파일을 서빙하기 위한 폴더 설정
app.use(express.static('public'));

// 서버 실행
app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
