const updatePostEventHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#input-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();
  const form = document.querySelector(".update-container");
  const id = form.getAttribute("data-id");

  if (title && content) {
    const response = await fetch(`api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update post.");
    }
  }
};

const deletePostEventHandler = async (event) => {
  event.preventDefault();
  const form = document.querySelector(".update-container");
  const id = form.getAttribute("data-id");

  const response = await fetch(`api/posts/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete post.");
  }
};

document
  .querySelector(".update-post-form")
  .addEventListener("submit", updatePostEventHandler);

document
  .querySelector(".update-post-form")
  .addEventListener("submit", deletePostEventHandler);
