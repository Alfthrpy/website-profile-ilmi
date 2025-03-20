import { Button } from "@/components/ui/button";
import { ChevronRight, Users, User, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Apple-style navigation */}
      <header className="fixed top-0 z-50 w-full bg-[rgba(255,255,255,0.8)] backdrop-blur-md border-b border-[#f5f5f7]/30">
        <div className="max-w-[980px] mx-auto flex h-12 items-center justify-between px-4">
          <div className="flex items-center">
            <Link to="/" className="font-medium text-xl">
              Ikatan Alumni MAN 2 Sukabumi
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/organization">
              <Button
                variant="ghost"
                className="text-sm font-light hover:text-gray-500"
              >
                Organization
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-12">
        {/* Hero section */}
        <section className="py-20 text-center bg-gradient-to-b from-blue-50 to-white">
          <h2 className="text-5xl font-semibold tracking-tight mb-1 text-blue-900">
            Ikatan Alumni MAN 2 Sukabumi
          </h2>
          <h3 className="text-2xl font-medium text-blue-700 mb-4">
            Menjaga Silaturahmi, Membangun Masa Depan
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Ikatan Alumni MAN 2 Sukabumi adalah organisasi yang mewadahi para
            alumni MAN 2 Sukabumi untuk tetap terhubung, berbagi pengalaman, dan
            berkontribusi pada almamater. Kami berkomitmen untuk menjaga
            silaturahmi antar alumni, mendukung perkembangan pendidikan di MAN 2
            Sukabumi, dan membantu para alumni dalam pengembangan karir dan
            profesional.
          </p>
          <div className="flex justify-center space-x-6 text-xl">
            <Link
              to="/organization"
              className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
            >
              Explore Our Organization <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </section>

        {/* Features section */}
        <section className="py-20 bg-[#f5f5f7] text-center">
          <h2 className="text-4xl font-semibold tracking-tight mb-1 text-blue-900">
            Organisasi Kami
          </h2>
          <h3 className="text-xl font-medium text-blue-700 mb-8">
            Temukan apa yang membuat kami istimewa
          </h3>

          <div className="mt-8 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-left">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-medium mb-2 text-blue-800">
                Struktur Organisasi
              </h4>
              <p className="text-gray-600">
                Jelajahi struktur organisasi kami dan pelajari tentang berbagai
                peran dan divisi dalam Ikatan Alumni MAN 2 Sukabumi.
              </p>
              <Link
                to="/organization"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                <div className="flex items-center">
                  Lihat Struktur <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-left">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-medium mb-2 text-blue-800">
                Anggota Tim
              </h4>
              <p className="text-gray-600">
                Kenali para individu berbakat yang membentuk organisasi alumni
                kami dan pelajari tentang keahlian mereka.
              </p>
              <Link
                to="/organization?tab=members"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                <div className="flex items-center">
                  Kenali Tim Kami <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-left">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-xl font-medium mb-2 text-blue-800">
                Program Kerja
              </h4>
              <p className="text-gray-600">
                Temukan berbagai program kerja yang sedang kami laksanakan dan
                dampak yang kami berikan untuk almamater dan masyarakat.
              </p>
              <Link
                to="/organization?tab=programs"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                <div className="flex items-center">
                  Lihat Program Kerja <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials/Stats section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              Dampak Kami
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-600">Tahun Berdiri</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Anggota Alumni</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Program Terlaksana</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Mitra Kerja Sama</div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl font-semibold text-blue-900 mb-8">
                Ingin mengetahui lebih lanjut tentang organisasi alumni kami?
              </h3>
              <Link to="/organization">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                  Jelajahi Organisasi Kami
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f5f5f7] py-12 text-xs text-gray-500">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="border-b border-gray-300 pb-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-medium text-sm text-gray-900 mb-4">
                Ikatan Alumni MAN 2 Sukabumi
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/organization" className="hover:underline">
                    Organization
                  </Link>
                </li>
                <li>
                  <Link
                    to="/organization?tab=members"
                    className="hover:underline"
                  >
                    Team Members
                  </Link>
                </li>
                <li>
                  <Link
                    to="/organization?tab=programs"
                    className="hover:underline"
                  >
                    Program Kerja
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm text-gray-900 mb-4">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm text-gray-900 mb-4">
                Connect
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-4">
            <p>
              Copyright © 2025 Ikatan Alumni MAN 2 Sukabumi. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
