const carousel = () => {
    const servicesCarousel = document.querySelector(".services-carousel");
    const row = document.querySelector(".services-carousel.row");
    const btnsBefore = document.querySelectorAll(".img-wrapper:before");
    const modalWindow = document.querySelector(".modal-callback");
    console.log(btnsBefore[1]);
    const imgWrapper = row.querySelectorAll(".img-wrapper");

      imgWrapper.forEach((elem) => {
        elem.addEventListener("click", () => {
        modalWindow.style.display = "block";
        console.log("sdfesdfs");
      });
    });


    
    const servicesArrows = document.querySelector(".services-arrow");
    const elements = row.querySelectorAll(".element");
    let indexOffirstVisibleSlide = 0;
    let indexOfthirdVisibleSlide = 3;

    // elements.forEach((elem, index), () => {
    //   if (index > 2);
    //   elem[index].style.opacity = 0;
    // });

    
    //  const noneActiveSlide = (elems, index) => {
    //     elems[index].style.display = 'none';
    // };

    // const activeSlide = (elems, index) => {
    //     elems[index].style.display = 'block';
    // };

    // servicesArrows.addEventListener("click", (e) => {
    // e.preventDefault();


    // if (e.target.matches(".arrow-right")) {
    //   console.log("r");
    //   noneActiveSlide(elements, indexOffirstVisibleSlide);
    //   activeSlide(elements, indexOfthirdVisibleSlide);
    //   indexOfthirdVisibleSlide++;
    //   indexOffirstVisibleSlide++;
      
      
    // } else if (e.target.matches(".arrow-left")) {
    //   console.log("l");
    //   noneActiveSlide(elements, indexOfthirdVisibleSlide);
    //   activeSlide(elements, indexOffirstVisibleSlide);
    //   indexOffirstVisibleSlide--;
    //   indexOfthirdVisibleSlide--;
    //   console.log(indexOfthirdVisibleSlide);
    //   console.log(indexOffirstVisibleSlide);
      
      
    // }

    // if (indexOfthirdVisibleSlide == elements.length) {
    //   indexOfthirdVisibleSlide = 0;
    // }

    // if (indexOffirstVisibleSlide == elements.length) {
    //   indexOffirstVisibleSlide = 0;
    // }

    //  if (indexOffirstVisibleSlide < 0) {
    //    indexOffirstVisibleSlide = elements.length - 1;
    //  }

    //  if (indexOfthirdVisibleSlide < 0) {
    //    indexOfthirdVisibleSlide = elements.length - 1;
    //  }
    // });

};

export default carousel;