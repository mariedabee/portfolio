module.exports.fetchPosts = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error("Fetched data is not an array");
    }
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

module.exports.deletePost = async (postId) => {
  try {
    const response = await fetch(`http://localhost:3001/api/posts/${postId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete post");
    }
    return postId;
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};
module.exports.updatePost = async (postId, postData) => {
  try {
    const response = await fetch(`http://localhost:3001/api/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error("Failed to update post");
    }
    return postId;
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
};

module.exports.createPost = async (postData) => {
  try {
    const response = await fetch("http://localhost:3001/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error("Failed to create post");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

module.exports.fetchPost = async (postId) => {
  try {
    const response = await fetch(`http://localhost:3001/api/posts/${postId}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

