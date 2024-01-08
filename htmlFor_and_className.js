In React, the attributes htmlFor and className are used instead of for and class to avoid conflicts with JavaScript and JSX syntax.

1. htmlFor instead of for:

In HTML, the attribute used to associate a label with a form control is for. For example, <label for="username">Username:</label>.

However, in JavaScript, for is a reserved keyword used for loops and cannot be used as an attribute name directly.
  
In JSX, React uses htmlFor instead of for to associate labels with form controls. So, if you want to associate a label with an input field in JSX, you use <label htmlFor="username">Username:</label>.

<label htmlFor="username">Username:</label>
<input type="text" id="username" name="username" />

2. className instead of class:

In HTML, the attribute to define a class for an element is class. For example, <div class="my-container">...</div>.

However, in JavaScript, class is a reserved keyword used for defining classes and cannot be used as an attribute name directly.
  
In JSX, React uses className instead of class to define the CSS class for an element. So, if you want to assign a class to an element in JSX, you use <div className="my-container">...</div>

<div className="my-container">Content goes here</div>


By using htmlFor and className, React ensures that the syntax is valid JSX and avoids conflicts with JavaScript and reserved keywords. 
It's important to note that the behavior of the rendered HTML remains consistent with standard HTML, but the attribute names are adjusted for compatibility with JavaScript and JSX.




