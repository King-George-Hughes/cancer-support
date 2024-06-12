import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { NavBar, Footer, Layout, WhatsApp } from "./components";

import {
  Home,
  About,
  Contact,
  GetInvolved,
  Team,
  Event,
  Gallery,
  FullPage,
  Support,
  GalleryImages,
  RecentNews,
} from "./pages/";
import CancerSuvivors from "./pages/CancerSuvivors";
import CancerSurvivalDetail from "./pages/CancerSurvivorDetail";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      <NavBar />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="survivor" element={<CancerSuvivors />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="event" element={<Event />} />
        <Route path="team" element={<Team />} />
        <Route path="get_involved" element={<GetInvolved />} />
        <Route path="support" element={<Support />} />

        <Route path="event/:event_id/:event_title" element={<FullPage />} />
        <Route
          path="gallery/:gallery_id/:gallery_title"
          element={<GalleryImages />}
        />
        <Route
          path="recent/:recent_id/:recent_title"
          element={<RecentNews />}
        />
        <Route
          path="survivor/:recent_id/:recent_title"
          element={<CancerSurvivalDetail />}
        />
      </Routes>

      <WhatsApp />
      <Footer />
    </>
  );
}

export default App;
