import { Menu } from "@components/menu/menu";
import { MainBanner } from "@/app/pages/medicine/main-banner/main-banner";
import { Contact } from "@pages/home/contact/contact";
import { Footer } from "@components/footer/footer";

export default function Medicine() {
  return (
    <div>
      <Menu />
      <MainBanner />
      <Contact />
      <Footer />
    </div>
  );
}
