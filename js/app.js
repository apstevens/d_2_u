let siteText = document.getElementById('main-text');

siteText.hidden = true;

let i = 0;

let text = `We provide bespoke fitness plans for busy professional men & women enabling them to stop "trying to get my dream body", 
            and finally achieve their goals and objectives. With our help you won't relapse into old habits, you'll embrace and 
            develop new healthier ones!`;

let speed = 30;

const typeWriter = () => {
    if (i < text.length) {
        siteText.hidden = false;
        siteText.innerHTML += text.charAt(i);
        i++;

        setTimeout(typeWriter, speed);
    }
}

window.onload = function () {
    setTimeout(typeWriter, 1000);
}