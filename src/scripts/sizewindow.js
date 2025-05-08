function sizeOfThings() {
    var Global_windowWidth = window.innerWidth;
    var Global_windowHeight = window.innerHeight;
    document.body.style.setProperty('--G_screenWidth', Global_windowWidth + 'px');
    document.body.style.setProperty('--G_screenHeight', Global_windowHeight + 'px');
}
sizeOfThings();

window.addEventListener('resize', function () {
    sizeOfThings();
});
