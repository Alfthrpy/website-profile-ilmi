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
      "title": "Sekretaris",
      "name": "Rizkita Amelia",
      "department": "Ex-Officio",
      "description": "Manages administrative tasks and organizational documentation.",
      "email": "rizkita.amelia@example.com",
      "phone": "(555) 234-5678",
      "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Rizkita"
    },
    {
      "id": "3",
      "title": "Bendahara",
      "name": "Fidia Agnia",
      "department": "Ex-Officio",
      "description": "Oversees financial management and budgeting for the organization.",
      "email": "fidia.agnia@example.com",
      "phone": "(555) 345-6789",
      "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Fidia"
    },
    {
      "id": "4",
      "title": "Ketua Bidang Pengembangan Minat dan Bakat (PMB)",
      "name": "Alfisyahr Izzulhaq",
      "department": "Bidang PMB",
      "description": "Coordinates activities related to new student admissions and orientation.",
      "email": "alfisyahr.izzulhaq@example.com",
      "phone": "(555) 456-7890",
      "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Alfisyahr",
      "subordinates": [
        {
          "id": "5",
          "title": "Sekretaris Bidang",
          "name": "Imat Siti Nurjiah",
          "department": "Bidang PMB",
          "description": "Handles documentation and administrative tasks for the Bidang PMB.",
          "email": "imat.siti.nurjiah@example.com",
          "phone": "(555) 567-8901",
          "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Imat"
        },
        {
          "id": "6",
          "title": "Bendahara Bidang",
          "name": "M Farhan Ramadhan",
          "department": "Bidang PMB",
          "description": "Manages financial aspects of Bidang PMB activities.",
          "email": "m.farhan.ramadhan@example.com",
          "phone": "(555) 678-9012",
          "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Farhan"
        }
      ]
    },
    {
      "id": "7",
      "title": "Ketua Bidang Manajemen Telekomunikasi dan Sosial (MTS)",
      "name": "Muhammad Rizki Al-Fathir",
      "department": "Bidang MTS",
      "description": "Leads initiatives and programs for MTS alumni and students.",
      "email": "rizki@example.com",
      "phone": "(555) 789-0123",
      "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Rizki",
      "subordinates": [
        {
          "id": "8",
          "title": "Sekreataris Bidang",
          "name": "Zulfa Mujahidah Sayuti",
          "department": "Bidang MTS",
          "description": "Manages documentation and communication for Bidang MTS.",
          "email": "zulfa@example.com",
          "phone": "(555) 890-1234",
          "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Zulfa"
        },
        {
          "id": "9",
          "title": "Bendahara Bidang",
          "name": "Zakiyah Rozaliana",
          "department": "Bidang MTS",
          "description": "Handles financial planning and reporting for Bidang MTS activities.",
          "email": "zakiyah@example.com",
          "phone": "(555) 901-2345",
          "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Zakiyah"
        }
      ]
    },
    {
      "id": "10",
      "title": "Ketua Bidang Manajemen Anggota (MA)",
      "name": "Nazwa Syifa",
      "department": "Bidang MA",
      "description": "Coordinates programs and events for MA alumni and students.",
      "email": "nazwa@example.com",
      "phone": "(555) 012-3456",
      "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Nazwa",
      "subordinates": [
        {
          "id": "11",
          "title": "Sekretaris Bidang",
          "name": "Maharsa Sabila",
          "department": "Bidang MA",
          "description": "Handles administrative tasks and record-keeping for Bidang MA.",
          "email": "maharsa@example.com",
          "phone": "(555) 123-4567",
          "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Maharsa"
        },
        {
          "id": "12",
          "title": "Bendahara Bidang",
          "name": "Tulus Pariz",
          "department": "Bidang MA",
          "description": "Manages budget and expenses for Bidang MA programs.",
          "email": "tulus@example.com",
          "phone": "(555) 234-5678",
          "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Tulus"
        }
      ]
    },
    {
      "id": "13",
      "title": "Ketua Bidang Manajemen Intelektual (MI)",
      "name": "Syahrul Gunawan",
      "department": "Bidang MI",
      "description": "Memimpin Bidang Manajemen Intelektual",
      "email": "nazwa@example.com",
      "phone": "(555) 012-3456",
      "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Nazwa",
      "subordinates": [
        {
          "id": "14",
          "title": "Sekretaris Bidang",
          "name": "Siti Humairah",
          "department": "Bidang MI",
          "description": "Menangani tugas administratif dan pencatatan untuk Bidang MI",
          "email": "maharsa@example.com",
          "phone": "(555) 123-4567",
          "photoUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Maharsa"
        },
        {
          "id": "15",
          "title": "Bendahara Bidang",
          "name": "Siti Soffa",
          "department": "Bidang MA",
          "description": "Menangani anggaran dan pengeluaran untuk program Bidang MI",
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
