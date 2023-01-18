# Assignment - Chapter 07 - Finding the Path
What are various ways to add images into our App? Explain with code examples
What would happen if we do console.log(useState())?
How will useEffect behave if we don't add a dependency array ?
What is SPA?
What is difference between Client Side Routing and Server Side Routing?


# Assignment - Chapter 06 - Exploring the world
What is a Microservice?
What is Monolith architecture?
What is the difference between Monolith and Microservice?
Why do we need a useEffect Hook?
What is Optional Chaining?
What is Shimmer UI?
What is the difference between JS expression and JS statement
What is Conditional Rendering, explain with a code example
What is CORS?
What is async and await?
What is the use of `const json = await data.json();` in getRestaurants()

# Assignment - chapter 05

What is the difference between Named Export, Default export and * as export?

What is the importance of config.js file

What are React Hooks?

Why do we need a useState Hook?


# Assignment - theory

Is JSX mandatory for React?

    No

Is ES6 mandatory for React?

    No

{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

    {TitleComponent} is used to get a React Element, which is a JS variable.
    <TitleComponent/> is used to call a React Functional Component, which is a JS function.
    <TitleComponent/> and <TitleComponent></TitleComponent> works the same way.

How can I write comments in JSX?

    Just like JS we can write comments like 
    // for single line or 
    /* for multiline */

What is <React.Fragment></React.Fragment> and <></> ?

    React.Fragment is used to wrap the React Elements so that we can have one root element.
    <React.Fragment></React.Fragment> and <></> works the same way.


What is Virtual DOM?

    The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

What is Reconciliation in React?
What is React Fiber?

Why we need keys in React? When do we need keys in React?

    We need keys in React to uniquely identify elements or nodes so that React can know which particular element is changed and accordingly will update the UI corresponding to that changed element.

    We need keys when we have similar siblings like <p>p1</p> <p>p2</p> etc.

Can we use index as keys in React?

    We can but it is a bad practice.
    
What is props in React? 

    Props is shorthand for properties. Props is basically the arguments which we pass to a function(here React Component) during function invocation.

What is a Config Driven UI ?

    In Config Driven UI the UI is represted to the user in such a way that it fits the requirements of all users irrespective of their location or type etc.
