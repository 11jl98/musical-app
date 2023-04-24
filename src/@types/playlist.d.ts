export type playlistType = {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: 0;
  };
  href: string;
  id: string;
  images: [
    {
      url: string;
      height: number;
      width: number;
    }
  ];
  name: string;
  owner: {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string;
      total: number;
    };
    href: string;
    id: string;
    type: user;
    uri: string;
    display_name: string;
  };
  public: true;
  snapshot_id: string;
  tracks: {
    href: string;
    items: [{}];
    limit: 20;
    next: string;
    offset: 0;
    previous: string;
    total: 4;
  };
  type: string;
  uri: string;
};

export type getPlaylistType = {
  PlaylistsUser: () => Promise<void>;
  getPlaylistById: (playlisId: string) => Promise<void>;
  user: userProfile | undefined;
  playlists: any;
  playlistId: playlistType;
};
