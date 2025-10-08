```markdown
Day3
------

npm run dev => start a live development server => dynamically transform your jsx in to es modules

JSX 
-Mix of HTML & Javascript
-It is type safe 
-it follow camelCasing convention
-It helps to create virtual DOM & render html
```
```html
React Fragment - React needs to render only one element
<div></div>
<></>
<React.Fragment></React.Fragment>
<StrictMode><StrictMode> - A helper component that helps to write better react code providing warning for any deprecated code or identifying risk
```
   
```markdown
Databinding
-Mechanism to bind the data values into html element
-Support one way binding
- Types of binding 
  One way binding  {}
  Event Binding 
   <input type="button" value="Click Me" onClick={(e) => handleClick(e, 'Hello')} />
 Two way binding 
	const [fullName, setFullName] = useState('pradeep shet');
	
useState()
- Used to maintain state 	

Virtual DOM 
- It is a lightweight memory representation of your REAL DOM tree
- Maintain 2 DOM & based on comparison, it will sync changes in Real DOM

Component
- A reusable code having some html & javascript that defines specific part of user interface
- Two approaches of designing components
  Function Component
  Class Component
  
```
