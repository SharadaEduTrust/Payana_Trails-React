import React from "react";
import { IMAGE_BASE_URL } from "../../../services/api";
import DraggableTableBody from "../../../components/admin/DraggableTableBody";

const TrailList = ({ trails, loadingTrails, handleEdit, handleDelete, handleReorder, handleToggle }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F3EFE9] text-[#4A3B2A] text-sm uppercase tracking-wider">
              <th className="p-4 w-10"></th>
              <th className="p-4 font-semibold border-b border-gray-200">
                Image
              </th>
              <th className="p-4 font-semibold border-b border-gray-200">
                Trail Name
              </th>
              <th className="p-4 font-semibold border-b border-gray-200">
                Theme
              </th>
              <th className="p-4 font-semibold border-b border-gray-200">
                Destination
              </th>
              <th className="p-4 font-semibold border-b border-gray-200 text-center">
                Status
              </th>
              <th className="p-4 font-semibold border-b border-gray-200 text-right">
                Actions
              </th>
            </tr>
          </thead>
            {loadingTrails ? (
              <tbody>
                <tr>
                  <td colSpan="7" className="p-8 text-center text-gray-500">
                    Loading trails...
                  </td>
                </tr>
              </tbody>
            ) : trails.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan="7" className="p-8 text-center text-gray-500">
                    No trails found. Click "Add New Trail" to create one.
                  </td>
                </tr>
              </tbody>
            ) : (
              <DraggableTableBody
                items={trails}
                onReorder={handleReorder}
                renderRow={(trail) => (
                  <>
                    <td className="p-4">
                      <img
                        src={`${IMAGE_BASE_URL}${trail.routeMap}`}
                        alt={trail.trailName}
                        className="w-16 h-10 object-cover rounded shadow-sm border border-gray-200"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/64x40?text=No+Img";
                        }}
                      />
                    </td>
                    <td className="p-4 font-medium text-gray-900">
                      {trail.trailName}
                    </td>
                    <td className="p-4">
                      <span className="bg-[#F3EFE9] text-[#4A3B2A] px-2.5 py-1 rounded-full text-xs font-semibold">
                        {trail.trailTheme}
                      </span>
                    </td>
                    <td className="p-4">{trail.trailDestination}</td>

                    {/* TOGGLE BUTTON */}
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <button
                          onClick={() => handleToggle(trail._id)}
                          title={trail.isActive !== false ? "Click to deactivate" : "Click to activate"}
                          style={{
                            backgroundColor: trail.isActive !== false ? "#4A3B2A" : "#C8B8A2",
                          }}
                          className="relative inline-flex items-center w-9 h-5 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#4A3B2A]"
                        >
                          <span
                            className={`inline-block w-4 h-4 bg-[#F3EFE9] rounded-full shadow-sm transform transition-transform duration-300 ${
                              trail.isActive !== false ? "translate-x-4" : "translate-x-0.5"
                            }`}
                          />
                        </button>
                        <span className={`text-xs font-medium ${
                          trail.isActive !== false ? "text-[#4A3B2A]" : "text-[#C8B8A2]"
                        }`}>
                          {trail.isActive !== false ? "Active" : "Inactive"}
                        </span>
                      </div>
                    </td>

                    {/* EDIT / DELETE BUTTONS */}
                    <td className="p-4 text-right space-x-3">
                      <button
                        onClick={() => handleEdit(trail)}
                        className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(trail._id)}
                        className="text-red-600 hover:text-red-800 font-medium transition-colors"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              />
            )}
        </table>
      </div>
    </div>
  );
};

export default TrailList;
