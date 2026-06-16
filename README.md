- daisyUI (for theme and colors)
  {rafce shortcut}
->npm install react-router-dom
->npm axios
  // whenever running an api, wrap it in try catch block and use async await
Redux Toolkit :
->npm install @reduxjs/toolkit react-redux
1.install
2.create a configureStore
3.add a Provider to ur app
4.create slice
5.add reducer to store  
  How do u add data to ur redux store - u dispatch(useDispatch) and action [dispatch(action)] 

// useSelector is used to subscibe to the store  




















# DevTinder

- Create a Vite + React application
- Remove unnecessary code and create a Hello World app
- Install Tailwind CSS
- Install Daisy UI
- Add NavBar component to App.jsx
- Create a NavBar.jsx separate Component file
- Install react router dom
- Create BrowserRouter > Routes > Route > Body > RouteChildren
- Create an Outlet in your Body Component
- Create a footer
- Create a Login Page
- Install axios
- CORS - install cors in backend => add middleware with configurations: origin, credentials: true
- Whenever you're making API call so pass axios => { withCredentials: true }
- Install react-redux @reduxjs/toolkit
  https://redux-toolkit.js.org/tutorials/quick-start
- configureStore => Provide => createSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user logs in
- Refactor our code to add constants file => create a components folder
- You should not be able access other routes without login
- If token is not present, redirect user to Login page
- Logout
- Profile Page