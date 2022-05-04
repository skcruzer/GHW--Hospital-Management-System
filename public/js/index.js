document.getElementById("login").addEventListener("click", async (event) => {
  event.preventDefault();

  const email = document.getElementById("Email");
  const password = document.getElementById("Password");

  const response = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard.html");
  } else {
    alert("Failed to login");
  }
});