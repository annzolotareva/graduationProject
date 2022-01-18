const smoothScroll = () => {
    const arrow = document.querySelector(".up");

    arrow.style.display = "none";

    const showArrow = () => {
        window.addEventListener('scroll', function(e) {
            e.target.value = scrollY;
            if (e.target.value > 520) {
                arrow.style.display = "block";
            } else {
                arrow.style.display = "none";
            }
        });
    };
    

    const scroll = () => {
        arrow.addEventListener('click', (e) => {
            e.preventDefault();
            arrow.setAttribute("href", ".main-wrapper");
            const classOfSection = arrow.getAttribute("href");
            const section = document.querySelector(classOfSection);
            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    };

     showArrow();
     scroll();   
};

export default smoothScroll;