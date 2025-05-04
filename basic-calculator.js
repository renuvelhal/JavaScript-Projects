<!DOCTYPE html>
<html>
    <head>
        <title>Basic Calculator</title>
        <style>
            body{
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 40px;
    }
    #calculator {
      display: inline-block;
      border: 2px solid #ccc;
      padding: 20px;
      border-radius: 10px;
    }
    #display {
      font-size: 24px;
      margin-bottom: 10px;
      padding: 10px;
      width: 200px;
      text-align: right;
    }
    button {
      width: 45px;
      height: 45px;
      font-size: 18px;
      margin: 5px;
    }
        </style>
    </head>
    <body>
        <h2> Basic Calculator</h2>
        <div id="calculator">
            <input type="text" id="display" disabled/>
            <br/>
            <button onclick="append('7')">7</button>
            <button onclick="append('6')">8</button>
            <button onclick="append('5')">9</button>
            <button onclick="append('+')">+</button>
            <br/>
            <button onclick="append('4')">4</button>
            <button onclick="append('5')">5</button>
            <button onclick="append('6')">6</button>
            <button onclick="append('*')">*</button>

            <br/>
            <button onclick="append('0')">0</button>
            <button onclick="append('.')">.</button>
            <button onclick="calculate()">=</button>
            <button onclick="append('+')">+</button>
            <br/>
            <button onclick="clearDisplay()" style="width: 190px;">Clear</button>
        </div>
        <script>
            const display=document.getElementById("display");
            function append(value){
                display.value += value;
            }
            function clearDisplay(){
                display.value = "";
            }
            function calculation(){
                try{
                    display.value=eval(display.value);

                } catch(error){
                    display.value="Error";
                }
            }
        </script>
    </body>
</html>