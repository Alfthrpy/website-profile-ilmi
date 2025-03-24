import { Button } from "@/components/ui/button";
import { ChevronRight, Users, User, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Apple-style navigation */}
      <header className="fixed top-0 z-50 w-full bg-[rgba(255,255,255,0.8)] backdrop-blur-md border-b border-[#f5f5f7]/30">
        <div className="max-w-[1200px] mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-3">
            <img
              src="https://api.dicebear.com/7.x/initials/svg?seed=MAN2&backgroundColor=0052cc&textColor=ffffff"
              alt="MAN 2 Logo"
              className="h-10 w-10 rounded-md"
            />
            <Link to="/" className="font-medium text-xl">
              Ikatan Alumni MAN 2 Sukabumi
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-blue-900 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link
              to="/organization"
              className="text-blue-900 hover:text-blue-600 font-medium"
            >
              Organization
            </Link>
            <Link
              to="/organization?tab=members"
              className="text-blue-900 hover:text-blue-600 font-medium"
            >
              Members
            </Link>
            <Link
              to="/organization?tab=programs"
              className="text-blue-900 hover:text-blue-600 font-medium"
            >
              Programs
            </Link>
            <ContactForm />
          </nav>

          {/* Mobile Navigation Menu */}
          <div
            id="mobile-nav"
            className="hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50 md:hidden"
          >
            <div className="flex flex-col p-4 space-y-3">
              <Link
                to="/"
                className="text-blue-900 hover:text-blue-600 font-medium py-2"
                onClick={() =>
                  document.getElementById("mobile-nav")?.classList.add("hidden")
                }
              >
                Home
              </Link>
              <Link
                to="/organization"
                className="text-blue-900 hover:text-blue-600 font-medium py-2"
                onClick={() =>
                  document.getElementById("mobile-nav")?.classList.add("hidden")
                }
              >
                Organization
              </Link>
              <Link
                to="/organization?tab=members"
                className="text-blue-900 hover:text-blue-600 font-medium py-2"
                onClick={() =>
                  document.getElementById("mobile-nav")?.classList.add("hidden")
                }
              >
                Members
              </Link>
              <Link
                to="/organization?tab=programs"
                className="text-blue-900 hover:text-blue-600 font-medium py-2"
                onClick={() =>
                  document.getElementById("mobile-nav")?.classList.add("hidden")
                }
              >
                Programs
              </Link>
              <div className="py-2">
                <ContactForm
                  buttonVariant="default"
                  buttonClassName="w-full justify-center"
                />
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                const nav = document.getElementById("mobile-nav");
                if (nav) {
                  nav.classList.toggle("hidden");
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
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

        {/* Registration Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Bergabunglah dengan Komunitas Alumni
                </h2>
                <p className="text-lg mb-8 text-blue-100">
                  Daftarkan diri Anda untuk mendapatkan informasi terbaru
                  tentang kegiatan, acara, dan peluang networking dengan sesama
                  alumni MAN 2 Sukabumi.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 mr-2 text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Akses ke direktori alumni</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 mr-2 text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Undangan eksklusif ke acara alumni</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 mr-2 text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Kesempatan networking dengan alumni sukses</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 mr-2 text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Newsletter bulanan dengan berita terbaru</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-blue-900">
                  Daftar Sekarang
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tahun Lulus
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900">
                      <option value="">Pilih Tahun Lulus</option>
                      {Array.from(
                        { length: 30 },
                        (_, i) => new Date().getFullYear() - i,
                      ).map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Profesi/Pekerjaan Saat Ini
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      placeholder="Masukkan profesi/pekerjaan"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md mt-4">
                    Daftar
                  </Button>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Dengan mendaftar, Anda menyetujui kebijakan privasi kami.
                  </p>
                </div>
              </div>
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
                  <ContactForm
                    buttonVariant="ghost"
                    buttonClassName="hover:underline p-0 h-auto font-normal text-xs text-gray-500"
                    buttonText="Contact Us"
                  />
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
