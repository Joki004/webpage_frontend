// Get all <p> elements on the page
const paragraphs = document.getElementsByClassName("zalety")

// Loop through each <p> element and update its content
for (let i = 0; i < paragraphs.length; i++) {
  const paragraph = paragraphs[i];
  const text = paragraph.textContent;

  // Replace all occurrences of "\n" with a line break
  const updatedText = text.replace(/-/g, '<br> -');

  // Set the updated content as the HTML content of the <p> tag
  paragraph.innerHTML = updatedText;


}