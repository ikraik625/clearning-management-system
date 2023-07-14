export const getToken = async (username, password) => {
    try {
        const username = "aafaf";
        const password = "Aafaf@123";
      const response = await fetch("http://localhost:5555/api/auth/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        return data.token;
      } else {
        throw new Error("Authentication failed");
      }
    } catch (error) {
      console.log("Error occurred during token fetch: ", error);
      return null;
    }
  };
  