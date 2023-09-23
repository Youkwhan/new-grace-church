// ts, enum (special that it stays after build time and not just compile time)
// exists as a particular type: (i.e. SelectedPage) and as a value: (i.e. SelectedPage.Home) to be used in code
export enum SelectedPage {
  Home = "home",
  About = "About",
  OurService = "ourservice",
  ContactUs = "contactus",
}