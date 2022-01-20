const carousel = () => {
    const servicesCarousel = document.querySelector(".services-carousel");
    const modalWindow = document.querySelector(".modal-callback");


    
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