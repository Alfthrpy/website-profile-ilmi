export type Member = {
  id: string;
  name: string;
  title: string;
  department: string;
  email: string;
  phone: string;
  bio: string;
  photoUrl: string;
};

export type Position = {
  id: string;
  title: string;
  name: string;
  department: string;
  description: string;
  email: string;
  phone: string;
  photoUrl: string;
  subordinates?: Position[];
};

const organizationData: Position = {
  id: "1",
  title: "Ketua",
  name: "Muhammad Fikri Ahadu",
  department: "Ex-Officio",
  description:
    "Memimpin arah dan visi keseluruhan Ikatan Alumni MAN 2 Sukabumi.",
  email: "fikri@gmail.com",
  phone: "+62 858-7210-7032",
  photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad",
  subordinates: [
    {
      id: "2",
      title: "Secretary",
      name: "Siti Nurhaliza",
      department: "Executive",
      description:
        "Manages administrative tasks and organizational documentation.",
      email: "siti.nurhaliza@example.com",
      phone: "(555) 234-5678",
      photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti",
    },
    {
      id: "3",
      title: "Treasurer",
      name: "Budi Santoso",
      department: "Executive",
      description:
        "Oversees financial management and budgeting for the organization.",
      email: "budi.santoso@example.com",
      phone: "(555) 345-6789",
      photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi",
    },
    {
      id: "4",
      title: "PMB Division Head",
      name: "Dian Sastro",
      department: "PMB Division",
      description:
        "Coordinates activities related to new student admissions and orientation.",
      email: "dian.sastro@example.com",
      phone: "(555) 456-7890",
      photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dian",
      subordinates: [
        {
          id: "5",
          title: "PMB Secretary",
          name: "Reza Rahadian",
          department: "PMB Division",
          description:
            "Handles documentation and administrative tasks for the PMB division.",
          email: "reza.rahadian@example.com",
          phone: "(555) 567-8901",
          photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Reza",
        },
        {
          id: "6",
          title: "PMB Treasurer",
          name: "Maudy Ayunda",
          department: "PMB Division",
          description: "Manages financial aspects of PMB division activities.",
          email: "maudy.ayunda@example.com",
          phone: "(555) 678-9012",
          photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maudy",
        },
      ],
    },
    {
      id: "7",
      title: "MTS Division Head",
      name: "Raisa Andriana",
      department: "MTS Division",
      description:
        "Leads initiatives and programs for MTS alumni and students.",
      email: "raisa.andriana@example.com",
      phone: "(555) 789-0123",
      photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raisa",
      subordinates: [
        {
          id: "8",
          title: "MTS Secretary",
          name: "Afgansyah Reza",
          department: "MTS Division",
          description:
            "Manages documentation and communication for MTS division.",
          email: "afgansyah.reza@example.com",
          phone: "(555) 890-1234",
          photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Afgansyah",
        },
        {
          id: "9",
          title: "MTS Treasurer",
          name: "Isyana Sarasvati",
          department: "MTS Division",
          description:
            "Handles financial planning and reporting for MTS division activities.",
          email: "isyana.sarasvati@example.com",
          phone: "(555) 901-2345",
          photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isyana",
        },
      ],
    },
    {
      id: "10",
      title: "MA Division Head",
      name: "Tulus Rusdy",
      department: "MA Division",
      description:
        "Coordinates programs and events for MA alumni and students.",
      email: "tulus.rusdy@example.com",
      phone: "(555) 012-3456",
      photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tulus",
      subordinates: [
        {
          id: "11",
          title: "MA Secretary",
          name: "Yura Yunita",
          department: "MA Division",
          description:
            "Handles administrative tasks and record-keeping for MA division.",
          email: "yura.yunita@example.com",
          phone: "(555) 123-4567",
          photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yura",
        },
        {
          id: "12",
          title: "MA Treasurer",
          name: "Rizky Febian",
          department: "MA Division",
          description: "Manages budget and expenses for MA division programs.",
          email: "rizky.febian@example.com",
          phone: "(555) 234-5678",
          photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rizky",
        },
      ],
    },
    {
      id: "13",
      title: "MI Division Head",
      name: "Andien Aisyah",
      department: "MI Division",
      description:
        "Leads initiatives and support programs for MI alumni and students.",
      email: "andien.aisyah@example.com",
      phone: "(555) 345-6789",
      photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andien",
      subordinates: [
        {
          id: "14",
          title: "MI Secretary",
          name: "Vidi Aldiano",
          department: "MI Division",
          description:
            "Manages documentation and scheduling for MI division activities.",
          email: "vidi.aldiano@example.com",
          phone: "(555) 456-7890",
          photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vidi",
        },
        {
          id: "15",
          title: "MI Treasurer",
          name: "Sheryl Sheinafia",
          department: "MI Division",
          description:
            "Oversees financial aspects of MI division programs and events.",
          email: "sheryl.sheinafia@example.com",
          phone: "(555) 567-8901",
          photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sheryl",
        },
      ],
    },
  ],
};

// Function to flatten the org structure into a list of members
export const getAllMembers = (): Member[] => {
  const members: Member[] = [];

  const addMember = (position: Position) => {
    members.push({
      id: position.id,
      name: position.name,
      title: position.title,
      department: position.department,
      email: position.email,
      phone: position.phone,
      bio: position.description,
      photoUrl: position.photoUrl,
    });

    if (position.subordinates) {
      position.subordinates.forEach(addMember);
    }
  };

  addMember(organizationData);
  return members;
};

export default organizationData;
