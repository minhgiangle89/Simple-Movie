import { useState } from "react";
import { createContext } from "react";
import { NotificationMessage } from "../types/Types";
import Notification from "../components/UI/Notification";

type NotificationContextType = {
  addNotification(message: NotificationMessage): any;
  removeNotification(): any;
};

export const NotificationContext = createContext<NotificationContextType>({
  addNotification: () => {},
  removeNotification: () => {},
});

type NotificationContextProviderProps = {
  children: JSX.Element;
};

export const NotificationContextProvider = (
  props: NotificationContextProviderProps
) => {
  //States
  const [notification, setNotification] = useState<NotificationMessage>();
  const [hide, setHide] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const remove = () => {
    setHide(true);
    setTimeout(() => {
      setShowNotification(false);
      setNotification(undefined);
      setHide(false);
    }, 1000);
  };

  return (
    <NotificationContext.Provider
      value={{
        addNotification: (message: NotificationMessage) => {
          setNotification(message);
          setShowNotification(true);
          setTimeout(remove, 2000);
        },
        removeNotification: () => {
          remove();
        },
      }}
    >
      {showNotification && notification && (
        <Notification message={notification} close={hide} />
      )}

      {props.children}
    </NotificationContext.Provider>
  );
};
