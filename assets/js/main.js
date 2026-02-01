// Scroll to home function
function scrollToHome() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Tab functionality
function opentab(tabname) {
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");
    
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link", "text-primary", "border-primary");
        tablink.classList.add("text-gray-400", "border-transparent");
    }
    
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link", "text-primary", "border-primary");
    event.currentTarget.classList.remove("text-gray-400", "border-transparent");
    document.getElementById(tabname).classList.add("active-tab");
}

// Mobile menu
function openmenu() {
    document.getElementById("sidemenu").classList.add("active");
}

function closemenu() {
    document.getElementById("sidemenu").classList.remove("active");
}

// Certificate modal
function openModal(imageSrc, caption) {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modalImg.src = imageSrc;
    captionText.innerHTML = caption;
}

function closeModal() {
    const modal = document.getElementById('certificateModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Contact form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbwrfWRXx0JLPkr5iDihHTWCKFRazp7Rx-6ex9x4L4IHskXJ5RWvo1CTvNsDi55RrEPhMQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
const submitBtn = document.getElementById("submitBtn");
let isSubmitting = false;

form.addEventListener('submit', e => {
    e.preventDefault()
    
    // Prevent duplicate submissions
    if (isSubmitting) {
        return;
    }
    
    isSubmitting = true;
    
    // Show loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="btn-loading"></span>Sending...';
    msg.innerHTML = '';
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => response.json())
        .then(response => {
            msg.innerHTML = "Message sent successfully!";
            msg.style.color = '#61b752';
            setTimeout(function(){
                msg.innerHTML = "";
            }, 5000);
            form.reset();
            
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            isSubmitting = false;
        })
        .catch(error => {
            console.error('Error!', error.message)
            msg.innerHTML = "Error sending message. Please try again.";
            msg.style.color = '#ef4444';
            
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            isSubmitting = false;
        })
})
