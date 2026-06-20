/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Guides } from "./components/Guides";
import { News } from "./components/News";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <Hero />
      <About />
      <News />
      <Guides />
      <Footer />
    </div>
  );
}
