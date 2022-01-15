const modalWindow = () => {
    const callbackBtns  = document.querySelectorAll('.callback-btn');
    const servicesbtn = document.querySelector('.button-services');
    const modal = document.querySelector('.modal-callback');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalCloseBtn = document.querySelector('.modal-close');

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

    callbackBtns.forEach((btn) => {
        openModalWindow(btn);
    });
    openModalWindow(servicesbtn);
    closeModalWindow(modalOverlay);
    closeModalWindow(modalCloseBtn);

};

export default modalWindow;