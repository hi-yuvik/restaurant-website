/* Enable bg to the Navbar after scrolling a little */

const navbar = document.getElementById("navbar");

function handleScroll()
{
    console.log(window.scrollY);
    
    if(window.scrollY > 90)
    {
        navbar.classList.add("sticky");
    }
    else
    {
        navbar.classList.remove("sticky");
    }
}

window.addEventListener("scroll", handleScroll);

/* Highlight the active section of the page */

const sectionAll = document.querySelectorAll("section");
const navlinksAll = document.querySelectorAll(".nav-links a");

console.log(navlinksAll);

function activeSection()
{
    let currSection = "";

    sectionAll.forEach(function(section)
    {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100)
        {
            currSection = section.id;
        }
    });

    navlinksAll.forEach(function(link)
    {
        link.classList.remove("active");

        if(link.getAttribute("href")=== "#" + currSection)
        {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", activeSection);

/* Toast Notification post form submitted */

const reserveForm = document.getElementById("reserve-form");
const toastNotif = document.getElementById("toast-notif");
/* this is the same toast variable which is defined in the html page for the toast block/div */
const fnameInput = document.getElementById("first-name");
const lnameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const guestInput = document.getElementById("guests");
let toastTimer;

function showToast(message, type)
{
    toastNotif.textContent = message;
    toastNotif.classList.remove("success", "error");
    toastNotif.classList.add(type)
    toastNotif.classList.add("show");
    clearTimeout(toastTimer);

    toastTimer = setTimeout(function()
    {
        toastNotif.classList.remove("show");
    }, 3000);
}

function submitForm(event)
{
    event.preventDefault();

    const fname = fnameInput.value.trim();
    const lname = lnameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const date = dateInput.value;
    const time = timeInput.value;
    const guest = guestInput.value;

    if(
        fname === "" ||
        lname === "" ||
        email === "" ||
        phone === "" ||
        date === "" ||
        time === "" ||
        guest === ""
    )
    {
        showToast(`Please fill in all required fields.`, "error");
        return;
    }

    showToast("Reservation submitted successfully!", "success");

    reserveForm.reset();
}

reserveForm.addEventListener("submit", submitForm)

/* Gallery Viewer Lightbox */

const galleryImages = document.querySelectorAll(".gallery-images img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const closeBtn = document.getElementById("close-btn");

let currIndex = 0;

function openLightbox(index)
{
    currIndex = index;
    lightboxImg.src = galleryImages[currIndex].src;
    lightbox.classList.add("active");
}

function closeLightbox()
{
    lightbox.classList.remove("active");
}

function showImage(index)
{
    lightboxImg.src = galleryImages[index].src;
}

function nextImage()
{
    currIndex++;
    if(currIndex>=galleryImages.length)
    {
        currIndex = 0;
    }

    showImage(currIndex);
}

function prevImage()
{
    currIndex--;
    if(currIndex<0)
    {
        currIndex = galleryImages.length - 1;
    }

    showImage(currIndex);
}

galleryImages.forEach(function(image, index)
{
    image.addEventListener("click", function()
    {
        openLightbox(index);
    });
});

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
closeBtn.addEventListener("click", closeLightbox);

document.addEventListener("keydown", function(event)
{
    if(!lightbox.classList.contains("active"))
    {
        return;
    }

    if(event.key === "ArrowRight")
    {
        nextImage();
    }

    if(event.key === "ArrowLeft")
    {
        prevImage();
    }

    if(event.key === "Escape")
    {
        closeLightbox();
    }
});

lightbox.addEventListener("click", function(event)
{
    if(event.target===lightbox)
    {
        closeLightbox();
    }
});

document.addEventListener("keydown", function(event)
{
    if(event.key==="ArrowRight")
    {
        currIndex = currIndex+1;
    }

    if(event.key==="Arrowleft")
    {
        currIndex = currIndex-1;
    }

    if(event.key === "Escape")
    {

    }
})