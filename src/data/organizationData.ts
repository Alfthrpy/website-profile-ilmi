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

const organizationData: Position ={
  "id": "1",
  "title": "Ketua",
  "name": "Muhammad Fikri Ahadu",
  "department": "Ex-Officio",
  "description": "Memimpin arah dan visi keseluruhan Ikatan Alumni MAN 2 Sukabumi.",
  "email": "fikri@gmail.com",
  "phone": "+62 858-7210-7032",
  "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad",
  "subordinates": [
    {
      "id": "2",
      "title": "Secretary",
      "name": "Rizkita Amelia",
      "department": "Executive",
      "description": "Manages administrative tasks and organizational documentation.",
      "email": "rizkita.amelia@example.com",
      "phone": "(555) 234-5678",
      "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Rizkita"
    },
    {
      "id": "3",
      "title": "Treasurer",
      "name": "Fidia Agnia",
      "department": "Executive",
      "description": "Oversees financial management and budgeting for the organization.",
      "email": "fidia.agnia@example.com",
      "phone": "(555) 345-6789",
      "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Fidia"
    },
    {
      "id": "4",
      "title": "PMB Division Head",
      "name": "Alfisyahr Izzulhaq",
      "department": "PMB Division",
      "description": "Coordinates activities related to new student admissions and orientation.",
      "email": "alfisyahr.izzulhaq@example.com",
      "phone": "(555) 456-7890",
      "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Alfisyahr",
      "subordinates": [
        {
          "id": "5",
          "title": "PMB Secretary",
          "name": "Imat Siti Nurjiah",
          "department": "PMB Division",
          "description": "Handles documentation and administrative tasks for the PMB division.",
          "email": "imat.siti.nurjiah@example.com",
          "phone": "(555) 567-8901",
          "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Imat"
        },
        {
          "id": "6",
          "title": "PMB Treasurer",
          "name": "M Farhan Ramadhan",
          "department": "PMB Division",
          "description": "Manages financial aspects of PMB division activities.",
          "email": "m.farhan.ramadhan@example.com",
          "phone": "(555) 678-9012",
          "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Farhan"
        }
      ]
    },
    {
      "id": "7",
      "title": "MTS Division Head",
      "name": "Muhammad Rizki Al-Fathir",
      "department": "MTS Division",
      "description": "Leads initiatives and programs for MTS alumni and students.",
      "email": "rizki@example.com",
      "phone": "(555) 789-0123",
      "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Rizki",
      "subordinates": [
        {
          "id": "8",
          "title": "MTS Secretary",
          "name": "Zulfa Mujahidah Sayuti",
          "department": "MTS Division",
          "description": "Manages documentation and communication for MTS division.",
          "email": "zulfa@example.com",
          "phone": "(555) 890-1234",
          "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Zulfa"
        },
        {
          "id": "9",
          "title": "MTS Treasurer",
          "name": "Zakiyah Rozaliana",
          "department": "MTS Division",
          "description": "Handles financial planning and reporting for MTS division activities.",
          "email": "zakiyah@example.com",
          "phone": "(555) 901-2345",
          "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Zakiyah"
        }
      ]
    },
    {
      "id": "10",
      "title": "MA Division Head",
      "name": "Nazwa Syifa",
      "department": "MA Division",
      "description": "Coordinates programs and events for MA alumni and students.",
      "email": "nazwa@example.com",
      "phone": "(555) 012-3456",
      "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Nazwa",
      "subordinates": [
        {
          "id": "11",
          "title": "MA Secretary",
          "name": "Maharsa Sabila",
          "department": "MA Division",
          "description": "Handles administrative tasks and record-keeping for MA division.",
          "email": "maharsa@example.com",
          "phone": "(555) 123-4567",
          "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Maharsa"
        },
        {
          "id": "12",
          "title": "MA Treasurer",
          "name": "Tulus Pariz",
          "department": "MA Division",
          "description": "Manages budget and expenses for MA division programs.",
          "email": "tulus@example.com",
          "phone": "(555) 234-5678",
          "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Tulus"
        }
      ]
    },
    {
      "id": "13",
      "title": "Ketua Divisi Manajemen Intelektual (MI)",
      "name": "Syahrul Gunawan",
      "department": "Divisi Manajemen Intelektual",
      "description": "Memimpin Divisi Manajemen Intelektual",
      "email": "nazwa@example.com",
      "phone": "(555) 012-3456",
      "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Nazwa",
      "subordinates": [
        {
          "id": "14",
          "title": "Sekretaris Divisi",
          "name": "Siti Humairah",
          "department": "Divisi Manajemen Intelektual",
          "description": "Menangani tugas administratif dan pencatatan untuk divisi MI",
          "email": "maharsa@example.com",
          "phone": "(555) 123-4567",
          "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Maharsa"
        },
        {
          "id": "15",
          "title": "Bendahara Divisi",
          "name": "Siti Soffa",
          "department": "MA Division",
          "description": "Menangani anggaran dan pengeluaran untuk program divisi MI",
          "email": "tulus@example.com",
          "phone": "(555) 234-5678",
          "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Tulus"
        }
      ]
    }
  ]
}


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
