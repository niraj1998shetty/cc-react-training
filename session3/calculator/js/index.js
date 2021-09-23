//some basic functions which is needed for computation and display
function getHistory() {
  return document.getElementById("history-value").innerText;
}
function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}
function getOutput() {
  return document.getElementById("output-value").innerText;
}
function printOutput(num) {
  document.getElementById("output-value").innerText = num;
}

//for operators
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  //FOR CLEAR OPERATOR
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    }

    //FOR DELETE OPERATOR
    else if (this.id == "backspace") {
      var output = getOutput().toString();
      if (output) {
        //if output has a value
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    }

    //FOR OTHER OPERATOR
    else {
      output = getOutput();
      var history = getHistory();
      if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output != "" || history != "") {
        output = output;
        history = history + output;
        if (this.id == "=") {
          //FOR RESULT WHEN "="OPERATOR IS CLICKED AND ONLY 4 DECIMAL NO. ARE ALLOWED IN THE RESULT

          var result = eval(history);
          printOutput(
            (result = Number.isInteger(result) ? result : result.toFixed(4))
          ); /* if(Number.isInteger(result)){
                        printOutput(result);
                    }else{
					printOutput((result).toFixed(4));
                    } */
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}

//FOR NUMBER INPUTS AND DISPLAYING

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    //console.log(this.id);
    output = getOutput();
    output = output + this.id;
    printOutput(output);
  });
}
//END
