import { createContext, useContext, useState } from 'react';

// Define the initial state
const initialState = {
  user: null,
  userInterests: [],
};

// Create the context
const UserContext = createContext(initialState);

// Create the UserProvider component
export function UserProvider({ children }) {
  const [state, setState] = useState(initialState);

  // Define functions to update the state
  const setUser = (user) => {
    setState({ ...state, user });
  };

  const setUserInterests = (interests) => {
    setState({ ...state, userInterests: interests });
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        userInterests: state.userInterests,
        setUser,
        setUserInterests,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Create a custom hook for using the context
export function useUser() {
  return useContext(UserContext);
}
