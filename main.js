// Handle Main SideBar WHen Click on MenuBar
let menuBar = document.querySelector(".sidebar ul li:first-of-type");
let menuBar2 = document.querySelector('.main-sidebar .head .menu-bar');
let mainSidebar = document.querySelector(".main-sidebar");

menuBar.onclick = function (e) {
    mainSidebar.style.cssText = "left : 0;";
}

menuBar2.onclick = function () {
    mainSidebar.style.cssText = "left: -500px;";
}



