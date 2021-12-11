const createPostEventHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#input-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();

  if (title && content) {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title: title, post_content: content }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response)
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to add new post.");
    }
  }
  if (!title) {
    alert("Please enter title");
  } else if (!content) {
    alert("Please enter content");
  }
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", createPostEventHandler);
