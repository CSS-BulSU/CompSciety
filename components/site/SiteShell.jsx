import Navbar from "./Navbar";
import Footer from "./Footer";
import Effects from "./Effects";

// Wraps every public page. The admin panel has its own layout and doesn't use this.
export default function SiteShell({ children }) {
  return (
    <div className="site">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Effects />
      <Navbar />
      <main id="content">{children}</main>
      <Footer />
    </div>
  );
}
