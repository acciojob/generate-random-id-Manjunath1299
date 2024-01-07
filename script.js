function makeid(l) {
  // Define allowed characters for the random string
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  // Generate a random string of length l
  for (let i = 0; i < l; i++) {
    // Get a random character index within the character set
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
