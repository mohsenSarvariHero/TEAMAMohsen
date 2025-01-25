// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:false
//         }
//     }
// })
// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel({
//         loop: true,
//         margin: 10,
//         responsiveClass: true,
//         nav: true, // Ensure navigation is enabled
//         responsive: {
//             0: {
//                 items: 1,
//             },
//             600: {
//                 items: 3,
//             },
//             1000: {
//                 items: 5,
//                 loop: false, // Prevent infinite loop if needed
//             },
//         },
//     });

//     console.log("Owl Carousel Initialized");
// });
// // Manually trigger Owl Carousel scroll on button click
// $(".arrow-btn.left").click(function () {
//     $(".owl-carousel").trigger("prev.owl.carousel");
// });

// $(".arrow-btn.right").click(function () {
//     $(".owl-carousel").trigger("next.owl.carousel");
// });

// console.log("Arrow buttons are working!");

// function scrollImages(direction) {
//     const container = document.querySelector(".scroll-wrapper");
//     const itemWidth = document.querySelector(".item_part7").offsetWidth + 10; // Include margin
//     container.scrollBy({ left: direction * itemWidth, behavior: "smooth" });
// }

// console.log("hello")

document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".scrollTwo");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    const scrollAmount = 210; // Adjust for smooth scrolling

    leftArrow.addEventListener("click", function () {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    rightArrow.addEventListener("click", function () {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});