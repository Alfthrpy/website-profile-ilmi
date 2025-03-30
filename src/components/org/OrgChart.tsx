import { useState } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import organizationData, { Position } from "@/data/organizationData";

type OrgChartProps = {
  data?: Position;
};

const OrgChart = ({ data = organizationData }: OrgChartProps) => {
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(
    null,
  );
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(
    new Set(["1"]),
  );

  const toggleNode = (id: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedNodes(newExpanded);
  };

  const renderNode = (node: Position, level = 0) => {
    const isExpanded = expandedNodes.has(node.id);
    const hasSubordinates = node.subordinates && node.subordinates.length > 0;

    return (
      <div key={node.id} className="mb-2">
        <div
          className={`flex items-center p-3 rounded-lg transition-all cursor-pointer ${selectedPosition?.id === node.id ? "bg-blue-100 border-l-4 border-blue-500" : "hover:bg-blue-50"}`}
          style={{ marginLeft: `${level * 20}px` }}
          onClick={() => setSelectedPosition(node)}
        >
          {hasSubordinates && (
            <Button
              variant="ghost"
              size="sm"
              className="p-0 h-6 w-6 mr-2"
              onClick={(e) => {
                e.stopPropagation();
                toggleNode(node.id);
              }}
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>
          )}
          <div className="flex-1">
            <div className="font-medium text-xs md:text-sm">{node.title}</div>
            <div className="text-sm text-gray-500">{node.name}</div>
          </div>
          <div className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
            {node.department}
          </div>
        </div>

        {isExpanded && hasSubordinates && (
          <div className="ml-4 pl-4 border-l border-gray-200">
            {node.subordinates?.map((subordinate) =>
              renderNode(subordinate, level + 1),
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full bg-white rounded-xl p-1 md:p-4 shadow-sm">
      <div className="md:w-1/2 overflow-auto max-h-[600px] pr-1">
        <div className="border rounded-lg p-4 bg-white">{renderNode(data)}</div>
      </div>

      <div className="md:w-1/2">
  {selectedPosition ? (
    <Card className="p-6 h-full relative">
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2 p-0 h-8 w-8"
        onClick={() => setSelectedPosition(null)}
      >
        <X className="h-4 w-4" />
      </Button>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
        {selectedPosition.photoUrl ? (
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-blue-200 flex-shrink-0">
            <img 
              src={selectedPosition.photoUrl} 
              alt={`${selectedPosition.name}`}
              className="w-full h-full object-cover" 
            />
          </div>
        ) : (
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 border-2 border-blue-200">
            <span className="text-2xl font-semibold text-blue-800">
              {selectedPosition.name.charAt(0)}
            </span>
          </div>
        )}
        
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-1">
            {selectedPosition.title}
          </h3>
          <h4 className="text-lg font-medium">
            {selectedPosition.name}
          </h4>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-sm font-medium text-gray-500">
          Bidang:
        </span>
        <span className="ml-2 text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
          {selectedPosition.department}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-gray-500">
            Email:
          </span>
          <span className="text-sm">{selectedPosition.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-500">
            Telp:
          </span>
          <span className="text-sm">{selectedPosition.phone}</span>
        </div>
      </div>

      <div className="mb-6">
        <h5 className="text-sm font-medium text-gray-500 mb-1">
          Deskripsi Jabatan:
        </h5>
        <p className="text-gray-700">{selectedPosition.description}</p>
      </div>

      {selectedPosition.subordinates &&
        selectedPosition.subordinates.length > 0 && (
          <div>
            <h5 className="text-sm font-medium text-gray-500 mb-2">
              Menaungi:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedPosition.subordinates.map((sub) => (
                <div
                  key={sub.id}
                  className="p-2 border rounded-lg cursor-pointer hover:bg-blue-50"
                  onClick={() => setSelectedPosition(sub)}
                >
                  <div className="font-medium">{sub.title}</div>
                  <div className="text-sm text-gray-500">{sub.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
    </Card>
  ) : (
    <Card className="p-6 h-full flex items-center justify-center text-center">
      <div>
        <h3 className="text-xl font-semibold text-blue-800 mb-2">
          Detail Posisi
        </h3>
        <p className="text-gray-500">
          Pilih posisi untuk melihat detail lebih lanjut.
        </p>
      </div>
    </Card>
  )}
</div>
    </div>
  );
};

export default OrgChart;
