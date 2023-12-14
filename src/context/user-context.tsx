import axios from 'axios';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { axiosClient } from '../AxiosInstance';

type UserContextType = {
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
};

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext({
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  accessToken: '',
  setAccessToken: () => {},
} as UserContextType);

export const UserProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axiosClient
      .get('/me')
      .then(res => {
        setUser(res.data.user);
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsAuthenticated(false);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
