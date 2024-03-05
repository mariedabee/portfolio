export const fetchPosts = async () => {
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

export const deletePost = async (postId) => {
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
