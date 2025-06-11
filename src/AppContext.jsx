import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [viewedItems, setViewedItems] = useState([]);
  const [myComments, setMyComments] = useState([]);

  const addViewedItem = (item) => {
    setViewedItems((prev) => {
      // 중복 제거
      const exists = prev.find((i) => i.title === item.title);
      if (exists) return prev;
      return [...prev, item];
    });
  };

  const addComment = (comment) => {
    setMyComments((prev) => [...prev, comment]);
  };

  return (
    <AppContext.Provider
      value={{
        viewedItems,
        myComments,
        addViewedItem,
        addComment,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
