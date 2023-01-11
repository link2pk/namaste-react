
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
