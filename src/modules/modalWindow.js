const modalWindow = () => {
    const callbackBtns  = document.querySelectorAll('.callback-btn');
    const servicesbtn = document.querySelector('.button-services');
    const modal = document.querySelector('.modal-callback');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalCloseBtn = document.querySelector('.modal-close');
    const elementsOfCarousel = document.querySelectorAll('.services-carousel .fancyboxModal');
    const imgWrappers = document.querySelectorAll('.services-carousel .img-wrapper');

    const openModalWindow = (button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
            modalOverlay.style.display = 'block';   
        });
    };

    const closeModalWindow = (elem) => {
        elem.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = 'none';
            modalOverlay.style.display = 'none';
        });
    };

    const removeClassAbsolute = () => {
        elementsOfCarousel.forEach((elementOfCarousel) => {
            elementOfCarousel.classList.remove("absolute");  
        });
    };
    
    const addClassAbsolute = () => {
        imgWrappers.forEach((wrapper) => {
            wrapper.classList.add("absolute");
        });
    };

    removeClassAbsolute();
    addClassAbsolute();
    
    imgWrappers.forEach((wrapper) => {
        addClassAbsolute();
        openModalWindow(wrapper);
    });

    callbackBtns.forEach((btn) => {
        openModalWindow(btn);
    });

    openModalWindow(servicesbtn);
    closeModalWindow(modalOverlay);
    closeModalWindow(modalCloseBtn);

};

export default modalWindow;