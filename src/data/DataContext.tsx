import { ReactNode, createContext, useContext, useState } from "react";
import { albums } from "./index";
import { AlbumModel, IAlbum, IAlbumTrack } from "./Album.interface";
export interface IAppState {
  albums: AlbumModel[];
  currentAlbum: AlbumModel | null;
  currentTrack: IAlbumTrack | null;
  setCurrentAlbum: (album: AlbumModel) => void;
  setCurrentTrack: (track: IAlbumTrack) => void;
  onTrackEnd: () => void;
  isPlaying: boolean;
  setIsPlaying: (val: boolean) => void;
  onTrackClick: (track: IAlbumTrack, album: AlbumModel) => void;
  findAlbums: (year: string, month: string, day: string) => AlbumModel[];
}
const AppContext = createContext<IAppState>({} as IAppState);
export function useAppState() {
  return useContext(AppContext);
}
interface AppProviderProps {
  children: ReactNode;
}
export function AppProvider(props: AppProviderProps) {
  const { children } = props;
  const [currentTrack, setCurrentTrack] = useState<IAlbumTrack | null>(null);
  const [currentAlbum, setCurrentAlbum] = useState<AlbumModel | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <AppContext.Provider
      value={{
        albums,
        currentAlbum,
        setCurrentAlbum,
        currentTrack,
        setCurrentTrack,
        onTrackEnd,
        onTrackClick,
        isPlaying,
        setIsPlaying,
        findAlbums,
      }}
    >
      {children}
    </AppContext.Provider>
  );
  function findAlbums(
    year: string,
    month?: string,
    day?: string
  ): AlbumModel[] {
    return albums.filter((album) => {
      return album.dateSlug === `${year}/${month}/${day}`;
    });
  }
  function onTrackClick(track: IAlbumTrack, album: AlbumModel) {
    if (track.title !== currentTrack?.title) {
      setCurrentAlbum(album);
      setCurrentTrack(track);
      return;
    }
    setIsPlaying(!isPlaying);
  }
  function onTrackEnd() {
    let endingTrackIndex = -1;
    if (currentAlbum) {
      currentAlbum.tracks.map((track, index) => {
        if (track.title === currentTrack?.title) {
          endingTrackIndex = index;
        }
      });
      if (endingTrackIndex > 0 && currentAlbum.tracks[endingTrackIndex + 1]) {
        return onTrackClick(
          currentAlbum.tracks[endingTrackIndex + 1],
          currentAlbum
        );
      }
      setCurrentAlbum(null);
      setCurrentTrack(null);
    }
  }
}
