import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function index({ auth, projects }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Projects
        </h2>
      }
    >
      <Head title="Projects" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gary-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr className="text-nowrap">
                    <th className="px-3 py-3">ID</th>
                    <th className="px-3 py-3">Image</th>
                    <th className="px-3 py-3">Name</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3">Created Date</th>
                    <th className="px-3 py-3">Due Date</th>
                    <th className="px-3 py-3">Created By</th>
                    <th className="px-3 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.data.map((project) => (
                    <tr className="bg-white border-b dark:border-gray-700">
                      <td className="px-3 py-3">{project.id}</td>
                      <td className="px-3 py-3">
                        <img src={project.imagePath} style={{ width:60 }} alt="" />
                      </td>
                      <td className="px-3 py-3">{project.name}</td>
                      <td className="px-3 py-3">{project.status}</td>
                      <td className="px-3 py-3">{project.created_at}</td>
                      <td className="px-3 py-3">{project.due_date}</td>
                      <td className="px-3 py-3">{project.createdBy.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
