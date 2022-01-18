const accordion = () => {
    const accordion = document.querySelector(".accordeon");
    const elements = accordion.querySelectorAll(".element");
    const buttons = [];
    

const nonActiveElements = (elems, index, activeClass) => {
    elems[index].classList.remove(activeClass);
  };

  const activeElements = (elems, index, activeClass) => {
    elems[index].classList.add(activeClass);
  };

    buttons.forEach((button) => {
        button.addEventListener(("click"), (e) => {

        });
    });
//active
};

export default accordion;