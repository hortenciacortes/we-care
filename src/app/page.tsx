import { Menu } from "@components/menu/menu";
import { MainBanner } from "@pages/home/main-banner/main-banner";
import { About } from "@pages/home/about/about";
import { Services } from "@pages/home/services/services";
import { Contact } from "@pages/home/contact/contact";

export default function Home() {
  return (
    <div>
      <Menu />
      <MainBanner />
      <About />
      <Services />
      <Contact />
    </div>
  );
}
