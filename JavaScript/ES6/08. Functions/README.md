- Execution Context: A container which store variables and which a pice of code is evaluated and exuecuted.
- Hoisting: During the creation phase, the JavaScript engine moves the variable and function 
declarations to the top of your code. This feature is known as hoisting in JavaScript.
In general way of thinking about how execution contexts (specifically the creation and execution phases) work in JavaScript.
- Scope: Needs to decide which variables and functions it has access to. Hoisting is performed at this stage, as the engine scans through your code for variable and function declarations, and puts them into memory. In general way "where can w access a certain variable ?".
- This: Every execution context also has a special variable "this". The this variable oints to an object to which the current code that’s being executed belongs.
- Closure: Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.