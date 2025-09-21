import React from "react";

export const DashBoard = () => {
  return (
    <div className="flex-1 p-6 bg-gray-900">
      <h1 className="text-3xl font-bold mb-6"> Sales</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-700 p-4 rounded shadow"> Books : 120</div>
        <div className="bg-gray-700 p-4 rounded shadow"> Users: 45</div>
        <div className="bg-gray-700 p-4 rounded shadow"> Sale Books: 76</div>
      </div>
      <div className="mt-6bg-gray-900  p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">new Sales </h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-900 ">
              <th className="p-2">Book</th>
              <th className="p-2">User</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">React Basics</td>
              <td className="p-2">Ahmad</td>
              <td className="p-2">20-09-2025</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Node.js Guide</td>
              <td className="p-2">Lila</td>
              <td className="p-2">19-09-2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
