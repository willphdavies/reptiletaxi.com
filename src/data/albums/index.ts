import { plainToInstance } from "class-transformer";
import { AlbumModel, IAlbum } from "../Album.interface";
import a1 from './2020-01-10';
import a2 from './2020-08-19';
import a3 from './2023-09-16';

const data: IAlbum[] = [
  a3,
  a2,
  a1,
];
export const albums = data.map((a: IAlbum) => plainToInstance(AlbumModel, a));