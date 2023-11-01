import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import ScenepackReducer from "./scenepacks/reducer";
import IndividualScenePackReducer from "./scenepacks/scenepackId/reducer";
import CategoriesReducer from "./categories/reducer";
import IndividualCategoryReducer from "./categories/categoryId/reducer";
import TutorialsReducer from "./tutorials/reducer";
import AnimepacksReducer from "./animepacks/reducer";
import feedbacksReducer from "./feedbacks/reducer";
import EditingtoolsReducer from "./editingtools/reducer";
import UserSessionReducer from "./userSession/reducer";

export const store = configureStore({
  reducer: {
    // This is where we add reducers.
    fetchScenepack: ScenepackReducer,
    fetchIndividualScenepack: IndividualScenePackReducer,
    fetchCategories: CategoriesReducer,
    fetchIndividualCategory: IndividualCategoryReducer,
    fetchTutorials: TutorialsReducer,
    fetchAnimepacks: AnimepacksReducer,
    fetchFeedbacks: feedbacksReducer,
    fetchEditingTools: EditingtoolsReducer,
    fetchUserSession: UserSessionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
