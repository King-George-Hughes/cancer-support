import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Layout, NavBar, WhatsApp } from "./components";

import {
  About,
  Contact,
  Event,
  EventDetailPage,
  Gallery,
  GalleryImages,
  GetInvolved,
  Home,
  Support,
} from "./pages/";
import CancerSurvivalDetail from "./pages/CancerSurvivorDetail";
import CancerSuvivors from "./pages/CancerSuvivors";
import LoginPage from "./pages/LoginPage";
import Resources from "./pages/Resources";
import CreateEventPage from "./pages/admin/CreateEventPage";
import UpdateEventPage from "./pages/admin/UpdateEventPage";

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
        <Route path="get_involved" element={<GetInvolved />} />
        <Route path="support" element={<Support />} />
        <Route path="resources" element={<Resources />} />

        <Route
          path="gallery/:gallery_id/:gallery_title"
          element={<GalleryImages />}
        />
        <Route
          path="survivor/:recent_id/:recent_title"
          element={<CancerSurvivalDetail />}
        />
        {/* Events */}
        <Route path="event/:event_slug" element={<EventDetailPage />} />
        <Route path="event/create" element={<CreateEventPage />} />
        <Route path="event/:event_slug/edit" element={<UpdateEventPage />} />

        {/* Authentication */}
        <Route path="login" element={<LoginPage />} />
      </Routes>

      <WhatsApp />
      <Footer />
    </>
  );
}

export default App;
