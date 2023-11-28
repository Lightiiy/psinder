import { GeoLoc } from "./geoLoc.model";

export type UserData = {
  avatar: string;
  name: string;
  time: string;
  location: GeoLoc;
}