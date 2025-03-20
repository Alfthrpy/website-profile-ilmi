import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

type OrgHeroProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  logoUrl?: string;
  onExploreClick?: () => void;
};

const OrgHero = ({
  title = "Ikatan Alumni MAN 2 Sukabumi",
  subtitle = "Menjaga Silaturahmi, Membangun Masa Depan",
  description = "Ikatan Alumni MAN 2 Sukabumi adalah organisasi yang mewadahi para alumni MAN 2 Sukabumi untuk tetap terhubung, berbagi pengalaman, dan berkontribusi pada almamater. Kami berkomitmen untuk menjaga silaturahmi antar alumni, mendukung perkembangan pendidikan di MAN 2 Sukabumi, dan membantu para alumni dalam pengembangan karir dan profesional.",
  logoUrl = "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=200&q=80",
  onExploreClick,
}: OrgHeroProps) => {
  const handleExploreClick = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      // Default behavior: scroll to the next section
      const nextSection = document.getElementById("org-content");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80')] bg-cover opacity-5"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="rounded-full bg-white p-4 shadow-lg">
              <img
                src={logoUrl}
                alt="Organization Logo"
                className="h-32 w-32 md:h-40 md:w-40 object-cover rounded-full"
              />
            </div>
          </div>

          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
              {title}
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-blue-700 mb-4">
              {subtitle}
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl">{description}</p>

            <Button
              onClick={handleExploreClick}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 flex items-center gap-2"
            >
              Explore Our Organization
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-gray-500">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-500">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">4</div>
              <div className="text-gray-500">Departments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-gray-500">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgHero;
