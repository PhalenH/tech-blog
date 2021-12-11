const commentEventHandler = async (event) => {
  event.preventDefault();
  const comment = document.querySelector("#input-username").value.trim();
  const form = document.querySelector(".comment-form");
  const id = form.getAttribute("data-id");

  if (comment) {
    const response = await fetch(`/api/comments/${id}`, {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/post/${id}`);
    } else {
      alert("Failed to add comment.");
    }
  }
  if (!comment) {
    alert("Please enter a comment");
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentEventHandler);
