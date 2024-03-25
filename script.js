function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
			 let a = parseInt(radius);
			 let ans = ((Math.PI*a*a).toFixed(2));
			 alert(`The area of the circle with radius ${a} is ${ans}`);
            // write you code here and display the result to the user
           
}
calculateArea();
