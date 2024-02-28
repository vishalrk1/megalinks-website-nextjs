import { createAction } from "@reduxjs/toolkit";

export const getUserSession = createAction("user/userSessions", () => {
  const persistStore = localStorage.getItem("persist:root");
  const storeData = JSON.parse(persistStore as string);
  console.log(storeData);
  
  return {
    payload: storeData ? JSON.parse(storeData?.auth) : null,
  };
});
