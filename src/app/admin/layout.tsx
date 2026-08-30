import { AdminSidebar } from "@/components/admin/sidebar";
export default function AdminLayout({children}:{children:React.ReactNode}){return <div className="min-h-screen bg-gray-100"><AdminSidebar/><main className="min-h-screen md:pl-64"><div className="p-5 md:p-8">{children}</div></main></div>}
