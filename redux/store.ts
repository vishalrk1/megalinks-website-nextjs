import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";

import ScenepackReducer from "./scenepacks/reducer";
import IndividualScenePackReducer from "./scenepacks/scenepackId/reducer";
import CategoriesReducer from "./categories/reducer";
import IndividualCategoryReducer from "./categories/categoryId/reducer";
import TutorialsReducer from "./tutorials/reducer";
import AnimepacksReducer from "./animepacks/reducer";
import feedbacksReducer from "./feedbacks/reducer";
import EditingtoolsReducer from "./editingtools/reducer";
import UserSessionReducer from "./userSession/reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./auth/reducer";


const rootReducer = combineReducers({
  auth: authReducer,
  fetchScenepack: ScenepackReducer,
  fetchIndividualScenepack: IndividualScenePackReducer,
  fetchCategories: CategoriesReducer,
  fetchIndividualCategory: IndividualCategoryReducer,
  fetchTutorials: TutorialsReducer,
  fetchAnimepacks: AnimepacksReducer,
  fetchFeedbacks: feedbacksReducer,
  fetchEditingTools: EditingtoolsReducer,
  fetchUserSession: UserSessionReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
