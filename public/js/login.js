const loginEventHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector("#input-username").value.trim();
  const password = document.querySelector("#input-password").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to login.");
    }
  }
  if (!username) {
    alert("Please enter a username to login");
  } else if (!password) {
    alert("Please enter a password to login");
  }
};

document.querySelector(".login-form").addEventListener("submit", loginEventHandler);
