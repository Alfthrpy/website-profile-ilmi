import { getAllMembers, Position } from "./organizationData";

export type WorkProgram = {
  id: string;
  title: string;
  description: string;
  divisionId: string;
  divisionName: string;
  startDate: string;
  endDate: string;
  status: "completed" | "ongoing" | "planned";
  location: string;
  imageUrl: string;
  participants?: string[];
};

// Helper function to get division name by ID
const getDivisionName = (divisionId: string): string => {
  const members = getAllMembers();
  const member = members.find((m) => m.department.includes(divisionId));
  return member ? member.department : "Unknown Division";
};

const workProgramData: WorkProgram[] = [
  {
    id: "wp1",
    title: "Alumni Gathering 2023",
    description:
      "Annual gathering for all alumni to reconnect, network, and share experiences. The event included keynote speeches from successful alumni, panel discussions, and a gala dinner.",
    divisionId: "Executive",
    divisionName: "Executive",
    startDate: "2023-08-15",
    endDate: "2023-08-16",
    status: "completed",
    location: "Grand Ballroom, Hotel Sukabumi",
    imageUrl:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    participants: ["1", "2", "3"],
  },
  {
    id: "wp2",
    title: "Career Development Workshop",
    description:
      "A series of workshops focused on career development for recent graduates. Topics included resume building, interview skills, and professional networking.",
    divisionId: "PMB Division",
    divisionName: "PMB Division",
    startDate: "2023-09-10",
    endDate: "2023-09-12",
    status: "completed",
    location: "MAN 2 Sukabumi Auditorium",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    participants: ["4", "5", "6"],
  },
  {
    id: "wp3",
    title: "Scholarship Fund Drive",
    description:
      "Fundraising campaign to establish scholarships for current MAN 2 Sukabumi students. The initiative aims to support academically talented students with financial needs.",
    divisionId: "MTS Division",
    divisionName: "MTS Division",
    startDate: "2023-10-01",
    endDate: "2023-12-31",
    status: "completed",
    location: "Various locations",
    imageUrl:
      "https://images.unsplash.com/photo-1560523159-4a9692d222f9?w=800&q=80",
    participants: ["7", "8", "9"],
  },
  {
    id: "wp4",
    title: "Alumni Mentorship Program",
    description:
      "A structured mentorship program pairing experienced alumni with current students and recent graduates to provide guidance on academic and career paths.",
    divisionId: "MA Division",
    divisionName: "MA Division",
    startDate: "2024-01-15",
    endDate: "2024-06-30",
    status: "ongoing",
    location: "Online and in-person meetings",
    imageUrl:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80",
    participants: ["10", "11", "12"],
  },
  {
    id: "wp5",
    title: "Campus Improvement Project",
    description:
      "Collaborative effort to renovate and improve facilities at MAN 2 Sukabumi, including library upgrades, computer lab enhancements, and sports facility renovations.",
    divisionId: "MI Division",
    divisionName: "MI Division",
    startDate: "2024-03-01",
    endDate: "2024-05-30",
    status: "ongoing",
    location: "MAN 2 Sukabumi Campus",
    imageUrl:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    participants: ["13", "14", "15"],
  },
  {
    id: "wp6",
    title: "Alumni Business Network",
    description:
      "Establishment of a business network connecting alumni entrepreneurs, professionals, and job seekers to foster collaboration and create opportunities.",
    divisionId: "Executive",
    divisionName: "Executive",
    startDate: "2024-07-01",
    endDate: "2024-12-31",
    status: "planned",
    location: "Online platform and quarterly in-person events",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    participants: ["1", "2", "3"],
  },
];

export default workProgramData;
