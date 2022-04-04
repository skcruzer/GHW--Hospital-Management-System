const logout = async () => {
  const response = await fetch("/api/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/index.html");
  } else {
    alert("Failed to log out.");
  }
};

document.getElementById("logout").addEventListener("click", logout);
