import { Footer } from "../components/common/Footer";
import { Navbar } from "../components/common/Navbar";
import { AppRoutes } from "../routes/AppRoutes";

export const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};
