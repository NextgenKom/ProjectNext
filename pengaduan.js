document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("pengaduanForm");
    const status = document.getElementById("status");
    const successState = document.getElementById("successState");
    const submitBtn = form.querySelector(".submit-btn");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Show loading state
        submitBtn.classList.add("loading");
        status.style.display = "none";
        status.className = "status-message";

        // Kirim data ke Formspree
        const formData = new FormData(form);
        
        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => {
            submitBtn.classList.remove("loading");
            
            if (response.ok) {
                // Show success state
                form.classList.add("hidden");
                successState.classList.add("active");
                
                // Reset form for next time
                form.reset();
            } else {
                throw new Error("Gagal mengirim");
            }
        })
        .catch((error) => {
            submitBtn.classList.remove("loading");
            
            // Show error message
            status.innerText = "Gagal mengirim pengaduan. Silakan coba lagi.";
            status.classList.add("error");
            status.style.display = "block";
            
            console.error("Formspree Error:", error);
        });
    });
});
