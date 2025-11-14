import { Menu } from "@components/menu/menu";
import { MainBanner } from "@pages/home/main-banner/main-banner";
import { About } from "@pages/home/about/about";
import { Testimonials } from "@pages/home/testimonials/testimonials";
import { Contact } from "@pages/home/contact/contact";
import { Footer } from "./components/footer/footer";

export default function Home() {
  return (
    <div>
      <Menu />
      <MainBanner />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
