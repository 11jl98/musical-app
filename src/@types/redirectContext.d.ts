import { userProfile } from "./user";
import { filterType } from "./filter";

export type redirectContextType = {
  promptAsync: () => void;
};

export type getUserType = {
  getUserProfile: () => Promise<void>;
  user: userProfile | undefined;
  idUser: string;
  scrollY: any;
};

export type userFavoritesType = {
  active: Array<filterType>;
  getFavorites: (item: filterType) => void;
  data: Array<any>;
  isActive: string;
};

export type getPlaylistsUserType = {
  PlaylistsUser: () => Promise<void>;
  playlists: Array<any>;
  getPlaylistById: (id: string) => Promise<void>;
  playlistId: object | any;
  scrollY: any;
};
