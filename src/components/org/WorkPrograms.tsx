import { useState } from "react";
import { Search, Calendar, MapPin, Users, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import workProgramData, { WorkProgram } from "@/data/workProgramData";
import { getAllMembers } from "@/data/organizationData";
import { format } from "date-fns";

type WorkProgramsProps = {
  programs?: WorkProgram[];
};

const WorkPrograms = ({ programs = workProgramData }: WorkProgramsProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDivision, setSelectedDivision] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<WorkProgram | null>(
    null,
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Get all members for participant display
  const allMembers = getAllMembers();

  // Get unique divisions for filter
  const divisions = Array.from(
    new Set(programs.map((program) => program.divisionName)),
  );

  // Filter programs based on search, division, and status
  const filteredPrograms = programs.filter((program) => {
    const matchesSearch =
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDivision =
      !selectedDivision || program.divisionName === selectedDivision;
    const matchesStatus = !selectedStatus || program.status === selectedStatus;
    return matchesSearch && matchesDivision && matchesStatus;
  });

  const handleProgramClick = (program: WorkProgram) => {
    setSelectedProgram(program);
    setIsDialogOpen(true);
  };

  const handleDivisionClick = (division: string) => {
    setSelectedDivision(selectedDivision === division ? null : division);
  };

  const handleStatusClick = (status: string) => {
    setSelectedStatus(selectedStatus === status ? null : status);
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMMM d, yyyy");
    } catch (e) {
      return dateString;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "ongoing":
        return "bg-blue-100 text-blue-800";
      case "planned":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getParticipants = (participantIds?: string[]) => {
    if (!participantIds) return [];
    return allMembers.filter((member) => participantIds.includes(member.id));
  };

  return (
    <div className="w-full bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-6 text-blue-800">
        Work Programs
      </h3>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search work programs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Tabs defaultValue="divisions" className="w-full">
            <TabsList className="mb-2">
              <TabsTrigger value="divisions">Divisions</TabsTrigger>
              <TabsTrigger value="status">Status</TabsTrigger>
            </TabsList>
            <TabsContent value="divisions" className="mt-0">
              <div className="flex flex-wrap gap-2">
                {divisions.map((division) => (
                  <Button
                    key={division}
                    variant={
                      selectedDivision === division ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => handleDivisionClick(division)}
                    className={
                      selectedDivision === division ? "bg-blue-600" : ""
                    }
                  >
                    {division}
                  </Button>
                ))}
                {selectedDivision && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedDivision(null)}
                    className="text-gray-500"
                  >
                    <X className="h-4 w-4 mr-1" /> Clear
                  </Button>
                )}
              </div>
            </TabsContent>
            <TabsContent value="status" className="mt-0">
              <div className="flex flex-wrap gap-2">
                {["completed", "ongoing", "planned"].map((status) => (
                  <Button
                    key={status}
                    variant={selectedStatus === status ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleStatusClick(status)}
                    className={selectedStatus === status ? "bg-blue-600" : ""}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </Button>
                ))}
                {selectedStatus && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedStatus(null)}
                    className="text-gray-500"
                  >
                    <X className="h-4 w-4 mr-1" /> Clear
                  </Button>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrograms.map((program) => (
          <Card
            key={program.id}
            className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleProgramClick(program)}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={program.imageUrl}
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-lg line-clamp-1">
                  {program.title}
                </h4>
                <Badge className={getStatusColor(program.status)}>
                  {program.status.charAt(0).toUpperCase() +
                    program.status.slice(1)}
                </Badge>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                {program.description}
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>
                  {formatDate(program.startDate)} -{" "}
                  {formatDate(program.endDate)}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Badge variant="outline" className="mr-2">
                  {program.divisionName}
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredPrograms.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No work programs found matching your search criteria.
        </div>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedProgram && (
          <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col gap-6">
              <div className="rounded-lg overflow-hidden h-64">
                <img
                  src={selectedProgram.imageUrl}
                  alt={selectedProgram.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold">
                    {selectedProgram.title}
                  </h3>
                  <Badge className={getStatusColor(selectedProgram.status)}>
                    {selectedProgram.status.charAt(0).toUpperCase() +
                      selectedProgram.status.slice(1)}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    <div>
                      <div className="text-sm font-medium">Date</div>
                      <div>
                        {formatDate(selectedProgram.startDate)} -{" "}
                        {formatDate(selectedProgram.endDate)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    <div>
                      <div className="text-sm font-medium">Location</div>
                      <div>{selectedProgram.location}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2">Description</h4>
                  <p className="text-gray-700">{selectedProgram.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2">Organized by</h4>
                  <Badge variant="outline" className="text-base py-1 px-3">
                    {selectedProgram.divisionName}
                  </Badge>
                </div>

                {selectedProgram.participants &&
                  selectedProgram.participants.length > 0 && (
                    <div>
                      <div className="flex items-center mb-3">
                        <Users className="h-5 w-5 mr-2 text-blue-600" />
                        <h4 className="text-lg font-medium">
                          Key Participants
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {getParticipants(selectedProgram.participants).map(
                          (member) => (
                            <div
                              key={member.id}
                              className="flex items-center p-2 border rounded-lg"
                            >
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage
                                  src={member.photoUrl}
                                  alt={member.name}
                                />
                                <AvatarFallback>
                                  {member.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{member.name}</div>
                                <div className="text-xs text-gray-500">
                                  {member.title}
                                </div>
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default WorkPrograms;
