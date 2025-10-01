import { AboutUsVi } from "./about-us";
import { BookingVi } from "./booking";
import { HomePageVi } from "./homepage";
import { MenuVi } from "./menu";
export default {
  ...HomePageVi,
  ...AboutUsVi,
  ...MenuVi,
  ...BookingVi,
};
