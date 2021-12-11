const signupEventHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector("#input-username").value.trim();
  const password = document.querySelector("#input-password").value.trim();

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to sign up.");
    }
  }
  if (!username) {
    alert("Please enter a username to sign up");
  } else if (!password) {
    alert("Please enter a password to sign up");
  }
};

document.querySelector(".signup-form").addEventListener("submit", signupEventHandler);
