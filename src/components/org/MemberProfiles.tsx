import { useState } from "react";
import { Search, Mail, Phone, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { getAllMembers, Member } from "@/data/organizationData";

type MemberProfilesProps = {
  members?: Member[];
};

const MemberProfiles = ({ members = getAllMembers() }: MemberProfilesProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null,
  );
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Get unique departments for filter
  const departments = Array.from(
    new Set(members.map((member) => member.department)),
  );

  // Filter members based on search and department
  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      !selectedDepartment || member.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const handleMemberClick = (member: Member) => {
    setSelectedMember(member);
    setIsDialogOpen(true);
  };

  const handleDepartmentClick = (dept: string) => {
    setSelectedDepartment(selectedDepartment === dept ? null : dept);
  };

  return (
    <div className="w-full bg-white rounded-xl p-6 shadow-sm">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow  min-w-[200px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search by name or title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {departments.map((dept) => (
            <Button
              key={dept}
              variant={selectedDepartment === dept ? "default" : "outline"}
              size="sm"
              onClick={() => handleDepartmentClick(dept)}
              className={selectedDepartment === dept ? "bg-blue-600" : ""}
            >
              {dept}
            </Button>
          ))}
          {selectedDepartment && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedDepartment(null)}
              className="text-gray-500"
            >
              <X className="h-4 w-4 mr-1" /> Clear
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMembers.map((member) => (
          <Card
            key={member.id}
            className="p-4 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleMemberClick(member)}
          >
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-20 w-20 mb-3">
                <AvatarImage src={member.photoUrl} alt={member.name} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h4 className="font-medium text-lg">{member.name}</h4>
              <p className="text-sm text-gray-500 mb-2">{member.title}</p>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                {member.department}
              </span>
            </div>
          </Card>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Anggota tidak ditemukan.
        </div>
      )}

<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
  {selectedMember && (
    <DialogContent className="max-w-lg p-6 mx-auto rounded-xl shadow-lg">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 mb-3">
            <AvatarImage src={selectedMember.photoUrl} alt={selectedMember.name} />
            <AvatarFallback>{selectedMember.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2 mt-2">
            <Button variant="outline" size="sm" className="flex gap-2 items-center">
              <Mail className="h-4 w-4" />
              <span className="text-xs">{selectedMember.email}</span>
            </Button>
            <Button variant="outline" size="sm" className="flex gap-2 items-center">
              <Phone className="h-4 w-4" />
              <span className="text-xs">{selectedMember.phone}</span>
            </Button>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold">{selectedMember.name}</h3>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-gray-600">{selectedMember.title}</p>
            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
              {selectedMember.department}
            </span>
          </div>
          <h4 className="text-sm font-medium text-gray-500 mb-1">Bio</h4>
          <p className="text-gray-700">{selectedMember.bio}</p>
        </div>
      </div>
    </DialogContent>
  )}
</Dialog>

    </div>
  );
};

export default MemberProfiles;
