import { Application } from 'https://unpkg.com/@splinetool/runtime@0.9.506/build/runtime.js';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);

    // Spline 콘텐츠 로드
    app.load('https://prod.spline.design/px0H5xWUzJAV27-g/scene.splinecode')
        .then(() => {
            console.log('Spline 콘텐츠가 성공적으로 로드되었습니다!');
        })
        .catch((error) => {
            console.error('Spline 콘텐츠 로드 중 오류 발생:', error);
        });

    // 로딩 애니메이션과 페이지 이동
    const loadingBar = document.querySelector('.loading-progress');
    
    // 페이지를 무조건 10초 뒤에 이동
    setTimeout(() => {
        console.log('5초 후 페이지를 home.html로 이동합니다.');
        window.location.href = "home.html";
    }, 8000);
});
