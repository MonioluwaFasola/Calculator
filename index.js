


const view = document.getElementById("view");
const display = document.getElementById("display");

function appendToDisplay (input) {
      view.value += input;
}

function clearDisplay () {
      view.value = "";
      display.textContent = "";
}

function calculate () {
      try {
        // view.value = eval(view.value);
        display.textContent = eval(view.value);
      }
      
      catch(error) {
        display.textContent = "Error";
      }
}


function del() {
    view.value = view.value.substring(0, view.value.length - 1);
  }



