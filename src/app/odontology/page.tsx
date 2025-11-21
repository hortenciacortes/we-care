import { Menu } from "@components/menu/menu";
import { MainBanner } from "@/app/pages/odontology/main-banner/main-banner";
import { WeCareAlign } from "@pages/odontology/wecare-align/wecare-align";
import { Testimonials } from "@pages/home/testimonials/testimonials";
import { Contact } from "@pages/home/contact/contact";
import { Footer } from "@components/footer/footer";
import { IntraoralScanner } from "../pages/odontology/intraoral-scanner/intraoral-scanner";
import { OtherTreatments } from "../pages/odontology/other-treatments/other-treatments";

export default function Odontology() {
  return (
    <div>
      <Menu />
      <MainBanner />
      <WeCareAlign />
      <IntraoralScanner />
      <OtherTreatments />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
