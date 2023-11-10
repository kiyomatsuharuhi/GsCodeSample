// script.js
document.addEventListener("DOMContentLoaded", function() {
  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");
  const saveButton = document.getElementById("save");
  const memoList = document.getElementById("memos");
  
  saveButton.addEventListener("click", function() {
  const title = titleInput.value;
  const content = contentInput.value;
  
  if (title && content) {
  const memo = { title, content };
  localStorage.setItem(title, JSON.stringify(memo));
  displayMemos();
  clearInputs();
  }
  });
  
  function displayMemos() {
  memoList.innerHTML = "";
  
  for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const memo = JSON.parse(localStorage.getItem(key));
  
  const memoItem = document.createElement("li");
  memoItem.innerHTML = `<strong>${key}</strong><br>${memo.content}
  <button class="delete" data-key="${key}">Delete</button>`;
  
  memoList.appendChild(memoItem);
  }
  }
  
  memoList.addEventListener("click", function(e) {
  if (e.target && e.target.classList.contains("delete")) {
  const key = e.target.getAttribute("data-key");
  localStorage.removeItem(key);
  displayMemos();
  }
  });
  
  function clearInputs() {
  titleInput.value = "";
  contentInput.value = "";
  }
  
  displayMemos();
  });
  