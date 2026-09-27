"use client";

import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Fungsi toggle untuk menambah atau menghapus favorit
  const toggleFavorite = (user) => {
    setFavorites((prevFavorites) => {
      const isExist = prevFavorites.some((item) => item.id === user.id);
      if (isExist) {
        return prevFavorites.filter((item) => item.id !== user.id);
      } else {
        return [...prevFavorites, user];
      }
    });
  };

  // Fungsi pengecekan status favorit
  const isFavorite = (userId) => {
    return favorites.some((item) => item.id === userId);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  return useContext(FavoriteContext);
}