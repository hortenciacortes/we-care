import { Menu } from "@components/menu/menu";
import { MainBanner } from "@pages/home/main-banner/main-banner";
import { About } from "./pages/home/about/about";
import { Services } from "./pages/home/services/services";

export default function Home() {
  return (
    <div>
      <Menu />
      <MainBanner />
      <About />
      <Services />
    </div>
  );
}
