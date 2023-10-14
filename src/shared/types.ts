// ts, enum (special that it stays after build time and not just compile time)
// exists as a particular type: (i.e. SelectedPage) and as a value: (i.e. SelectedPage.Home) to be used in code
export enum SelectedPage {
  Home = "home",
  About = "about",
  OurGallery = "ourgallery",
  ContactUs = "contactus",
}

export interface CardType {
  icon: JSX.Element;
  title: string;
  description: string;
  info: string;
}

export interface GalleryType {
  image: string;
}
