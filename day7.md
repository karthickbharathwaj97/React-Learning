# Assignment

● What are the various ways to add images into our App ? Explain with code examples

-> 1. We can use directly in our file using img tag

```
<img src="logo.png" alt="logo image" />
```

2. Save image file in local folder and then import it into our file.

```
import Logo from "./logo.png";
const Header = () = {
    return(
        <>
        <h1>Logo</h1>
        <img src={Logo} alt="logo image" />
        </>
    )
}
```

3. Create a assets folder and add image there.

```
import Logo from "../assets/logo.png";
const Header = () =>{
    return(
        <>
            <h1>Logo</h1>
            <img src={Logo} alt="logo image"/>
        </>
    )
}
```

● What would happen if we do console.log(useState()) ?

-> we get array of 2 elements [undefined, f]. 0 - undefined and 1 - f() : bound dispatch setState.
first is local state variable and second is a function to update variable.

● How will useEffect behave if we don't add a dependency array ?

-> It means it is not depended and it will re-render after every state change.

● What is SPA ?

-> An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.

● What is different between Client Side Routing and Server Side Routing ?

-> Client Side Routing : A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page. When a user clicks on a link, the URL changes but the request to the server is prevented. The adjustment to the URL will result in a changed state of the application. The changed state will ultimately result in a different view of the webpage. This could be the rendering of a new component, or even a request to a server for some data that the application will turn into some HTML elements.

Server Side Routing : When browsing, the adjustment of a URL can make a lot of things happen. This will happen regularly by clicking on a link, which in turn will request a new page from the server. This is what we call a server-side route. A whole new document is served to the user.

**Coding Assignment:**

● Add Shimmer Effect without installing a library
● Install react-router-dom
● Create a appRouter and Provide it to the app
● Create a Home, About, Contact Page with Link(use child routes)
● Make a Error page for routing errors
● Create a Restaurant Page with dynamic restaurant ID
● (Extra) - Create a login Page using Formik Library