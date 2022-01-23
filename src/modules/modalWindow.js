const modalWindow = () => {
    const modal = document.querySelector('.modal-callback');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalCloseBtn = document.querySelector('.modal-close');
    const elementsOfCarousel = document.querySelectorAll('.services-carousel .fancyboxModal');
    const imgWrappers = document.querySelectorAll('.services-carousel .img-wrapper');
    const mainWrapper = document.querySelector(".main-wrapper");

    const visibleModalWindow = () => {
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';  
    };

    const unvisibleModalWindow = () => {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    };

    const openModalWindow = (button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.matches(".services-carousel .img-wrapper") || e.target.matches(".callback-btn") || e.target.classList.contains("button-services")) {
                visibleModalWindow();
            }   
        });
    };

    const closeModalWindow = (elem) => {
        elem.addEventListener("click", (e) => {
            e.preventDefault();
            unvisibleModalWindow();
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
    openModalWindow(mainWrapper);
    closeModalWindow(modalOverlay);
    closeModalWindow(modalCloseBtn);

};

export default modalWindow;