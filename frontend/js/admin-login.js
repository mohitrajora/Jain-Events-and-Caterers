document.getElementById("adminLoginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
        const res = await fetch("http://localhost:5000/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem("token", data.token);
            window.location.href = "/admin/dashboard.html";
        } else {
            document.getElementById("loginError").classList.remove("hidden");
            document.getElementById("loginError").textContent = data.message || "Invalid credentials.";
        }
    } catch (error) {
        document.getElementById("loginError").classList.remove("hidden");
        document.getElementById("loginError").textContent = "Something went wrong. Please try again.";
    }
});

// Toggle password visibility
document.getElementById("togglePassword").addEventListener("click", () => {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    const isVisible = passwordInput.type === "text";
    passwordInput.type = isVisible ? "password" : "text";

    eyeIcon.classList.toggle("fa-eye");
    eyeIcon.classList.toggle("fa-eye-slash");
});