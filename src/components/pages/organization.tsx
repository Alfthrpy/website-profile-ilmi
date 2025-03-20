import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrgHero from "@/components/org/OrgHero";
import OrgChart from "@/components/org/OrgChart";
import MemberProfiles from "@/components/org/MemberProfiles";
import WorkPrograms from "@/components/org/WorkPrograms";

export default function OrganizationPage() {
  const [activeTab, setActiveTab] = useState("structure");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header is already in the home component, so we don't need to duplicate it */}

      {/* Hero Section */}
      <OrgHero
        title="Ikatan Alumni MAN 2 Sukabumi"
        subtitle="Menjaga Silaturahmi, Membangun Masa Depan"
        description="Ikatan Alumni MAN 2 Sukabumi adalah organisasi yang mewadahi para alumni MAN 2 Sukabumi untuk tetap terhubung, berbagi pengalaman, dan berkontribusi pada almamater. Kami berkomitmen untuk menjaga silaturahmi antar alumni, mendukung perkembangan pendidikan di MAN 2 Sukabumi, dan membantu para alumni dalam pengembangan karir dan profesional."
      />

      {/* Main Content */}
      <div id="org-content" className="max-w-7xl mx-auto px-4 py-12">
        <Tabs
          defaultValue="structure"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="structure" className="text-base py-3">
                Org Structure
              </TabsTrigger>
              <TabsTrigger value="members" className="text-base py-3">
                Team Members
              </TabsTrigger>
              <TabsTrigger value="programs" className="text-base py-3">
                Program Kerja
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="structure" className="mt-0">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">
                Struktur Organisasi Kami
              </h2>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                Jelajahi struktur organisasi Ikatan Alumni MAN 2 Sukabumi dan
                pelajari lebih lanjut tentang setiap peran dan divisi. Klik pada
                posisi untuk melihat informasi detail.
              </p>

              <OrgChart />
            </div>
          </TabsContent>

          <TabsContent value="members" className="mt-0">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">
                Kenali Tim Kami
              </h2>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                Kenali para individu berbakat yang membentuk organisasi alumni
                kami. Klik pada profil untuk mempelajari lebih lanjut tentang
                setiap anggota tim.
              </p>

              <MemberProfiles />
            </div>
          </TabsContent>

          <TabsContent value="programs" className="mt-0">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">
                Program Kerja Kami
              </h2>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                Lihat program kerja yang telah dan sedang dilaksanakan oleh
                Ikatan Alumni MAN 2 Sukabumi. Setiap program kerja dikelola oleh
                divisi terkait dan melibatkan anggota tim kami.
              </p>

              <WorkPrograms />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer is already in the home component, so we don't need to duplicate it */}
    </div>
  );
}
