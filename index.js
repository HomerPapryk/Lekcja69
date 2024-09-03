document.addEventListener("DOMContentLoaded", () => {
  const input = document.createElement("input");
  input.type = "text";
  input.setAttribute("data-test", "todo-input");
  document.body.appendChild(input);

  const button = document.createElement("button");
  button.setAttribute("data-test", "todo-add");
  button.textContent = "Dodaj";
  document.body.appendChild(button);

  const label = document.createElement("label");
  label.setAttribute("data-test", "todo-input-label");
  label.textContent = "Request error";
  label.style.color = "red";
  label.style.display = "none";
  document.body.appendChild(label);

  input.value = "hello";

  function addTodoElem() {
    const inputValue = input.value;

    const postData = { value: inputValue };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", postData)
      .then((response) => {
        console.log("Odpowiedź serwera:", response.data);
        label.style.display = "none";
      })
      .catch((error) => {
        console.error("Błąd podczas wykonywania requestu:", error);
        label.style.display = "inline";
      });
  }

  button.addEventListener("click", addTodoElem);
});
