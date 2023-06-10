const MENU = () => {
    const navbar = document.getElementById("navbar")
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    window.addEventListener("scroll", () => {
        if(window.scrollY > navbar.offsetHeight + 70){
            navbar.style.backgroundColor = "#19346D"
        }else{
            navbar.style.backgroundColor = "transparent"
        }
    })

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");

        navLinks.forEach((link, idx) => {
            if(link.style.animation){
                link.style.animation = "";
            }else{
                link.style.animation = `navFade 0.5s ease forwards ${idx/6 + 1}s`
            }

        });

        hamburger.classList.toggle("toggle")

    })
    
        
};
const the_animation = document.querySelectorAll(".animation");
const contacts_animation = document.querySelectorAll(".box")
const  checker = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("scroll-animation");
        }else{
            entry.target.classList.remove("scroll-animation");
        }
    });

})

console.log(contacts_animation)

console.log(the_animation)

for(let i = 0; i < the_animation.length; i++){
    const el = the_animation[i];

    checker.observe(el);

}

const  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("animate");
        }else{
            entry.target.classList.remove("animate");
        }
    });

})

for(let i = 0; i < contacts_animation.length; i++){
    const el = contacts_animation[i];

    observer.observe(el);

}

const MODAL = () => {
    const startBtn = document.querySelector(".modal-btn");
    const modal = document.querySelector(".modal-cont");
    const remove = document.querySelector(".remove")

    startBtn.addEventListener("click", () => {
        modal.classList.add("active");
        remove.addEventListener("click", () => {
            modal.classList.remove("active")
        })

    })


}

const DESC = () => {
    const openBtn = document.querySelector(".read-btn")
    const desc = document.querySelector(".desc")

    openBtn.addEventListener("click", () => {
        desc.classList.toggle("open");
    })
}



const galleryModal = () => {
    const gallery = document.querySelector(".gallery-modal");
    const view = document.querySelector(".gallery-img");
    const images = document.querySelectorAll(".view");
    const close = document.querySelector(".close");
    const leftBtn = document.querySelector(".left");
    const rightBtn = document.querySelector(".right")

    let imagesArr = ["images/lobby-large.jpg", "images/people-dinning-large.jpg", "images/room-1-large.jpg", "images/room-2-large.jpg", "images/pool-large.jpg", "images/room-3-large.jpg", "images/hotel-bar-large.jpg", "images/room-4-large.jpg"]

   let i;


    images.forEach((image) => {
        image.addEventListener("click", () => {

            gallery.classList.add("active")

            const link = image.src
            source = link.replace("small", "large");
            let modified = source.replace("http://127.0.0.1:5500/", "");
            view.src = modified;
            if(imagesArr.includes(modified)){
                i = imagesArr.indexOf(modified);
            }
            leftBtn.addEventListener("click", () => {
                i--;
                if(i < 0){
                    i = imagesArr.length - 1
                }
                view.src = imagesArr[i]
            });
            rightBtn.addEventListener("click", () => {
                i++;
                if(i > imagesArr.length - 1){
                    i = 0
                }
                view.src = imagesArr[i]
            })
        })

        close.addEventListener("click", () => {
            gallery.classList.remove("active");
            
        })
    })
} 

MENU();
MODAL();
DESC();
galleryModal();
