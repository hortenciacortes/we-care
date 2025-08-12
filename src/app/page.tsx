import { Menu } from "@components/menu/menu";
import { MainBanner } from "@pages/home/main-banner/main-banner";
import { About } from "@pages/home/about/about";
import { Services } from "@pages/home/services/services";
import { Contact } from "@pages/home/contact/contact";
import { Footer } from "./components/footer/footer";

export default function Home() {
  return (
    <div>
      <Menu />
      <MainBanner />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
