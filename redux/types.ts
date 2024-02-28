export interface User {
  uid: number;
  name: string;
  email: string;
}

export interface Scenepack {
  id: string;
  label: string;
  packUrl: string;
  imageUrl: string;
  credit: string;
  isApproved: boolean;
  isFeatured: boolean;
  categoryId: string;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  bannerImageName: string;
}

export interface Tutorial {
  id: string;
  label: string;
  ytUrl: string;
  categoryId: string;
  editingToolId: string;
  isFeatured: boolean;
  isApproved: boolean;
}

export interface AnimePack {
  id: string;
  label: string;
  description: string;
  packUrl: string;
  categoryId: string;
  isFeatured: boolean;
  isApproved: boolean;
}

export interface Feedback {
  id: string;
  userName: string;
  message: string;
  categoryId: string;
  isFeatured: boolean;
}

export interface EditingTool {
  id: string;
  title: string;
  categoryId: string;
}

export interface Session {
  user: User | null;
  status: string | null;
  error: string | null;
}
