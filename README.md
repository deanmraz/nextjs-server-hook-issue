# Intro
Created this repository to demonstrate the invalid hook issue I've seen when developing a Nextjs app and a local Reactjs component library.

# Issues
- Seeing the invalid hook error in some cases
- Discovered it only happens in dev mode and on the local nodejs server. Client works fine as long as you setup react and react-dom aliases via webpack configuration. 
- When rendering the library components on the server side it will throw the invalid hook error. If you don't render on the client side like waiting for a query param to be available then it will work.

# Steps to reproduce
1. Clone git repository https://github.com/deanmraz/nextjs-server-hook-issue.git
2. cd into `nextjs-app` directory and run `yarn install` (use yarn since local link is configured in package.json via yarn api)
3. Run the dev server `yarn dev`
4. Visit http://localhost:3000 in the browser and click `Render Component`. This adds the query param to display the component so its only loaded in the browser and not the server. 
5. Click on `Change State` to ensure hooks do work and click on `Refresh, ...` to see it still works even on browser refresh.
6. Click on `Server side render, ...` Observe that it does load initially (this is because its still rendering from the browser)
7. Click on `Refresh, ...`
8. Observe the invalid hook error that is coming from the server side. 