import { Menu } from "@components/menu/menu";
import { MainBanner } from "@pages/home/main-banner/main-banner";
import { About } from "./pages/home/about/about";

export default function Home() {
  return (
    <div>
      <Menu />
      <MainBanner />
      <About />
    </div>
  );
}
