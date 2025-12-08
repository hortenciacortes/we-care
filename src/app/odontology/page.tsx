import { Menu } from "@components/menu/menu";
import { MainBanner } from "@/app/pages/odontology/main-banner/main-banner";
import { WeCareAlign } from "@/app/pages/odontology/wecare-align/wecare-align";
import { Contact } from "@pages/home/contact/contact";
import { Footer } from "@components/footer/footer";
import { OtherTreatments } from "../pages/odontology/other-treatments/other-treatments";
import { IntraoralScanner } from "../pages/odontology/intraoral-scanner/intraoral-scanner";

export default function Odontology() {
  return (
    <div>
      <Menu />
      <MainBanner />
      <WeCareAlign />
      <IntraoralScanner />
      <OtherTreatments />
      <Contact />
      <Footer />
    </div>
  );
}
