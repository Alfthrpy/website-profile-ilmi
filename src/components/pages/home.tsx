import { Button } from "@/components/ui/button";
import { ChevronRight, Users, User, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import Navbar from "../Navbar";
import Footer from "../Footer";
import RegistrationForm from "../RegistrationForm";

export default function LandingPage() {
  return (
    <div className="min-h-screen text-black">
      <Navbar />
      <main className="pt-16">
        {/* Hero section - Mobile Optimized */}
        <section className="py-12 md:py-20 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-2 text-blue-900">
            Ikatan Alumni MAN 2 Sukabumi (ILMI)
          </h2>
          <h3 className="text-xl md:text-2xl font-medium text-blue-700 mb-4">
            Menjaga Silaturahmi, Membangun Masa Depan
          </h3>
          <p className="text-sm md:text-base max-w-2xl mx-auto text-gray-600 mb-6 md:mb-8">
            Ikatan Alumni MAN 2 Sukabumi adalah organisasi yang mewadahi para
            alumni MAN 2 Sukabumi untuk tetap terhubung, berbagi pengalaman, dan
            berkontribusi pada almamater. Kami berkomitmen untuk menjaga
            silaturahmi antar alumni, mendukung perkembangan pendidikan di MAN 2
            Sukabumi, dan membantu para alumni dalam pengembangan karir dan
            profesional.
          </p>
          <div className="flex justify-center text-base md:text-xl">
            <Link
              to="/organization"
              className="flex items-center bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
            >
              Jelajahi Organisasi Kami! <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </section>
  
        {/* Features section - Mobile Optimized */}
        <section className="py-12 md:py-20 px-4 bg-[#f5f5f7] text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-1 text-blue-900">
            Organisasi Kami
          </h2>
          <h3 className="text-lg md:text-xl font-medium text-blue-700 mb-6 md:mb-8">
            Temukan apa yang membuat kami istimewa
          </h3>
  
          <div className="mt-6 md:mt-8 max-w-6xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm text-left">
              <div className="h-10 w-10 md:h-12 md:w-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <Users className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
              </div>
              <h4 className="text-lg md:text-xl font-medium mb-2 text-blue-800">
                Struktur Organisasi
              </h4>
              <p className="text-sm md:text-base text-gray-600">
                Jelajahi struktur organisasi kami dan pelajari tentang berbagai
                peran dan divisi dalam Ikatan Alumni MAN 2 Sukabumi.
              </p>
              <Link
                to="/organization"
                className="mt-3 md:mt-4 inline-block text-blue-600 hover:underline"
              >
                <div className="flex items-center">
                  Lihat Struktur <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm text-left">
              <div className="h-10 w-10 md:h-12 md:w-12 bg-purple-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <User className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
              </div>
              <h4 className="text-lg md:text-xl font-medium mb-2 text-blue-800">
                Anggota Tim
              </h4>
              <p className="text-sm md:text-base text-gray-600">
                Kenali para individu berbakat yang membentuk organisasi alumni
                kami dan pelajari tentang keahlian mereka.
              </p>
              <Link
                to="/organization?tab=members"
                className="mt-3 md:mt-4 inline-block text-blue-600 hover:underline"
              >
                <div className="flex items-center">
                  Kenali Tim Kami <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm text-left">
              <div className="h-10 w-10 md:h-12 md:w-12 bg-green-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <BarChart className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
              </div>
              <h4 className="text-lg md:text-xl font-medium mb-2 text-blue-800">
                Program Kerja
              </h4>
              <p className="text-sm md:text-base text-gray-600">
                Temukan berbagai program kerja yang sedang kami laksanakan dan
                dampak yang kami berikan untuk almamater dan masyarakat.
              </p>
              <Link
                to="/organization?tab=programs"
                className="mt-3 md:mt-4 inline-block text-blue-600 hover:underline"
              >
                <div className="flex items-center">
                  Lihat Program Kerja <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            </div>
          </div>
        </section>
  
        {/* Testimonials/Stats section - Mobile Optimized */}
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8 md:mb-12">
              Dampak Kami
            </h2>
  
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 text-center mb-10 md:mb-16">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1 md:mb-2">2+</div>
                <div className="text-sm md:text-base text-gray-600">Tahun Berdiri</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1 md:mb-2">
                  50+
                </div>
                <div className="text-sm md:text-base text-gray-600">Anggota Alumni</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1 md:mb-2">10+</div>
                <div className="text-sm md:text-base text-gray-600">Program Terlaksana</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1 md:mb-2">2+</div>
                <div className="text-sm md:text-base text-gray-600">Mitra Kerja Sama</div>
              </div>
            </div>
  
            <div className="bg-blue-50 rounded-2xl p-6 md:p-12 text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-6 md:mb-8">
                Ingin mengetahui lebih lanjut tentang organisasi alumni kami?
              </h3>
              <Link to="/organization">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base">
                  Jelajahi Organisasi Kami
                </Button>
              </Link>
            </div>
          </div>
        </section>
  
        {/* Registration Section - Mobile Optimized */}
        <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                  Bergabunglah dengan Ikatan Alumni MAN 2 Sukabumi
                </h2>
                <p className="text-base md:text-lg mb-6 md:mb-8 text-blue-100">
                  Daftarkan diri Anda untuk mendapatkan informasi terbaru
                  tentang kegiatan, acara, dan peluang networking dengan sesama
                  alumni MAN 2 Sukabumi.
                </p>
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-sm md:text-base">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 text-blue-300 flex-shrink-0 mt-0.5"
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
                    <span>Masuk ke grup alumni dan tambah relasi</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 text-blue-300 flex-shrink-0 mt-0.5"
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
                    <span>Undangan ke acara ILMI</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 text-blue-300 flex-shrink-0 mt-0.5"
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
                      className="h-5 w-5 md:h-6 md:w-6 mr-2 text-blue-300 flex-shrink-0 mt-0.5"
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
                    <span>Berita dan info terbaru mengenai perkuliahan untuk Mahasiswa Baru</span>
                  </li>
                </ul>
              </div>
              <RegistrationForm></RegistrationForm>
              
            </div>
          </div>
        </section>
      </main>
  
    <Footer></Footer>      
    </div>
  );
}
