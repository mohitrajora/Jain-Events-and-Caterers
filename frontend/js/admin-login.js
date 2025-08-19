// Pick API base depending on environment
const API_BASE =
    window.location.hostname === "localhost"
        ? "http://localhost:5000"
        : "https://backend-jaine-cforrender.onrender.com";

document.getElementById("adminLoginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const errorMsg = document.getElementById("loginError");

    try {
        const res = await fetch(`${API_BASE}/admin/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok && data.token) {
            // Save JWT token
            localStorage.setItem("token", data.token);

            // Redirect to dashboard
            window.location.href = "/admin/dashboard.html";
        } else {
            errorMsg.classList.remove("hidden");
            errorMsg.textContent = data.message || "Invalid credentials.";
        }
    } catch (error) {
        console.error("Login error:", error);
        errorMsg.classList.remove("hidden");
        errorMsg.textContent = "Something went wrong. Please try again.";
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
