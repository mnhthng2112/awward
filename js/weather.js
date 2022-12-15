const rain = document.querySelector('.bg-triangle .rain');
const snow = document.querySelector('.bg-triangle .snow');
const sunny = document.querySelector('.bg-triangle .sunny');
const wind = document.querySelector('.bg-triangle .wind');

function randomColor(maxColor, minColor, maxSaturation, minSaturation, maxLight, minLight) {
    let h = Math.floor(Math.random() * (maxColor - minColor + 1) + minColor);
    let s = Math.floor(Math.random() * (maxSaturation - minSaturation + 1) + minSaturation) + '%';
    let l = Math.floor(Math.random() * (maxLight - minLight + 1) + minLight) + '%';
    return color = `hsl(${h}, ${s}, ${l})`;
}

function renderRain() {
    for (let i = 0; i < 100; i++) {
        rain.innerHTML+= '<div class="raining"></div>';
    }
    const raining = document.querySelectorAll('.rain .raining');
    const rainingLength = raining.length;
    for (i = 0; i < rainingLength; i++) {
        let randomRain = Math.floor(Math.random() * 101) + '%';
        let randomDelay = Math.random() * 10+ 's';
        let randomHeight = Math.random() * 40 + 'px';
        raining[i].style.inset= `0 auto auto ${(randomRain)}`;
        raining[i].style.animationDelay= `${(randomDelay)}`;
        raining[i].style.height= `${(randomHeight)}`;
    }
}

function renderSnow() {
    for (let i = 0; i < 40; i++) {
        snow.innerHTML+= '<div class="snowing"></div>';
    }
    for (let j = 0; j < 10; j++) {
        snow.innerHTML+= '<div class="snowing"><i class="bi bi-snow2"></i></div>';
    }
    const snowing = document.querySelectorAll('.snow .snowing');
    const snowingLength = snowing.length;
    for (i = 0; i < snowingLength; i++) {
        let randomSnow = Math.floor(Math.random() * 101) + '%';
        let randomDelay = Math.random() * 10+ 's';
        let randomHeight = Math.floor(Math.random() * 10) + 'px';
        snowing[i].style.inset= `0 auto auto ${(randomSnow)}`;
        snowing[i].style.animationDelay= `${(randomDelay)}`;
        snowing[i].style.height= `${(randomHeight)}`;
        snowing[i].style.width= `${(randomHeight)}`;
    }
}

function renderSunny() {
    sunny.innerHTML+= '<div class="sunrise"></div>';
    for (let i = 0; i < 12; i++) {
        sunny.innerHTML += '<svg viewBox="0 0 78 135" class="tree"><g> <path d="M12.65,65.09c0.05-0.07,0.1-0.14,0.15-0.2c-1.38-3.74-1.97-7.76-1.66-11.77c0.44-5.77,2.73-11.28,6.41-15.7 c-1.84-3.71-2.69-7.91-2.37-12.07c0.46-5.97, 3.3-11.63, 7.79-15.59c1.66-1.11, 3.32-2.23, 4.97-3.34C31.75, 4.57, 35.77, 3.79, 40, 4.08 c1.95, 0.41, 3.91, 0.82, 5.86, 1.23c3.8, 1.35, 7.04, 3.54, 9.72, 6.56c4.09, 4.64, 6.16, 10.87, 5.69, 17.04c-0.2, 2.63-0.87, 5.2-1.93, 7.59 c0.13, 0.14, 0.26, 0.27, 0.39, 0.41c4.92, 5.58, 7.4, 13.07, 6.84, 20.49c-0.2, 2.57-0.77, 5.09-1.66, 7.49c0.83, 1.21,1.58, 2.48, 2.25, 3.82 c0.28, 0.57, 0.53, 1.13, 0.77, 1.71c2.19, 4.53, 3.39, 11.22,2.84, 16.02c-0.45, 5.5-2.21, 10.55-5.28, 15.14 c-4.63, 6.87-11.89, 11.68-20.03, 13.26c-8.14, 1.58-16.67-0.16-23.54-4.79c-2.48-1.68-4.7-3.7-6.6-5.99 c-0.01-0.01-0.03-0.02-0.04-0.04c-3.66-3.55-6.53-10.34-7.46-15.21c-0.17-2.82-0.33-5.64-0.49-8.46 C7.78, 74.79, 9.56, 69.71, 12.65, 65.09z"></path> <polygon class="trunk" points="47.18,94.15 46.54,93.51 42.67,96.15 40.2,71.48 38.01,71.48 36.56,85.97 29.94,81.44 29.29,82.09 35.97, 91.85 32.52, 126.33 45.69, 126.33 43.07, 100.16 "></polygon> </g> </svg>'
    }
    for (let i = 0; i < 4; i++) {
        sunny.innerHTML += '<svg viewBox="0 0 68 43" class="cloud"><path d="M6.43,25.95c0.23-1.91,1.68-3.71,3.96-4.98c0.79-0.44,1.62-0.78,2.49-1.04c-0.19-0.64-0.26-1.28-0.18-1.91 c0.24-2.01,1.76-3.9,4.16-5.23c2.26-1.25,4.83-1.76,7.68-1.88c0.67-1.17,1.8-2.22,3.29-3.05c2.51-1.39,5.41-1.82,8.66-1.82 c6.24,0,11.01,3.94,10.83,7.63c2.65,1.11,4.53,3.01,5.05,4.98c1.74,0.45,3.24,1.11,4.5,2c2.12,1.51,3.19,3.54,2.94,5.55 c-0.24,1.94-1.71,3.78-4.04,5.07c-0.86,0.36-1.72,0.72-2.58,1.09c-1.97,0.61-4.06,0.86-6.25,0.76c-1.01-0.13-2.02-0.27-3.04-0.4 c-0.53-0.12-1.04-0.26-1.52-0.42c-0.15,0.09-0.31,0.19-0.47,0.28c-1.03,0.43-2.06,0.87-3.09,1.3c-2.37,0.73-4.87,1.03-7.5,0.92 l-3.64-0.48c-1.44-0.32-2.74-0.77-3.92-1.33c-1.98,0.66-4.16,0.89-6.53,0.89C10.83,33.88,5.97,29.72,6.43,25.95z"></path></svg>'
    }

    const tree = document.querySelectorAll('.sunny .tree');
    const treeLenght = tree.length;
    const trunk = document.querySelectorAll('polygon.trunk');
    const cloud = document.querySelectorAll('.sunny .cloud');
    const cloudLenght = cloud.length;
    for (i = 0; i < treeLenght; i++) {
        let randomTree = Math.floor(Math.random() * 101) + '%';
        let randomHeight = Math.floor(Math.random() * (300 - 100 + 1) + 100) + 'px';
        trunk[i].style.fill = `${randomColor(40, 30, 50, 40, 40, 30)}`
        tree[i].style.width = `${randomHeight}`
        tree[i].style.height = `${randomHeight}`
        tree[i].style.position = `absolute`
        tree[i].style.fill = `${randomColor(60, 55, 100, 90, 95, 90)}`
        tree[i].style.inset = `auto auto 10px ${randomTree}`
        tree[i].style.filter =`drop-shadow(0px 0px 10px #000)`
    }
    for (let i = 0; i < cloudLenght; i++) {
        let randomHeight = Math.floor(Math.random() * (120 - 75 + 1) + 75) + 'px';
        let randomWidth = Math.floor(Math.random() * (150 - 120 + 1) + 120) + 'px';
        let randomCloudY = Math.floor(Math.random() * (80 - 50 + 1) + 50) + '%';
        let randomCloudX = Math.floor(Math.random() * 101) + '%';
        cloud[i].style.position = `absolute`
        cloud[i].style.width = `${randomWidth}`
        cloud[i].style.height = `${randomHeight}`
        cloud[i].style.fill = `${randomColor(60, 55, 100, 90, 95, 90)}`
        cloud[i].style.inset = ` auto auto ${randomCloudY} ${randomCloudX}`
        cloud[i].style.filter =`drop-shadow(0px 0px 10px #000)`
    }
}

// renderRain();
// renderSnow();
renderSunny();