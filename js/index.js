const dangnhap = document.querySelector('.dangnhap')
const dangky = document.querySelector('.dangky')

const imgNuberli = document.querySelectorAll('.menu-form > ul > li');
imgNuberli.forEach(function(image,index){
    image.addEventListener("click", function(){
        document.querySelector(".dangnhap").style.right = index * 100 +"%"
        //xao active
        let imgactive = document.querySelector('.dangnhap')
        imgactive.classList.remove("dangnhap")
        //them active
        image.classList.add("dangnhap")
    })
})

dangnhap.addEventListener("click", function(){
    document.querySelector(".menu-form-0").style.right = 0 * 100 + "%"
})
dangky.addEventListener("click", function(){
    document.querySelector(".menu-form-0").style.right = 1 * 100 + "%"
})


// Video
var video = document.getElementById("video-content");
  video.addEventListener("ended", function() {
    this.currentTime = 0;
    this.play();
  });

// slide sách
const book = document.querySelector(".book");
firstImg = book.querySelectorAll("img")[0];
let firstImgWidth = firstImg.clientWWidth + 70;
arrowIcons = document.querySelectorAll(".prev-btn #prev");
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        book.scrollLeft += icon.id == "#prev" ? -firstImgWidth : firstImgWidth;
    });
});

arrowIcons = document.querySelectorAll(".next-btn #next");
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        console.log("#next");
    });
});