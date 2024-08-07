let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "";
    }

    value.textContent = count;
  });
});

// Outra forma de verificar o botão pressionado
/*    switch (styles.value) {
          case "btn decrease":
            count--;
            break;
          case "btn increase":
            count++;
            break;
          default:
            count = 0;
        }   
*/
