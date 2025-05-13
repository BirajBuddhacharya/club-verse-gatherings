
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarTrigger, SidebarFooter } from "@/components/ui/sidebar";
import { Calendar, Home, Users, Plus, Settings, LogOut, BarChart3, Building } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// Mock data
const branchData = [
  {
    id: "1",
    name: "Technology Branch",
    events: 8,
    attendees: 245,
    revenue: 2450,
    location: "East Campus",
  },
  {
    id: "2",
    name: "Arts Branch",
    events: 6,
    attendees: 180,
    revenue: 1800,
    location: "West Campus",
  },
  {
    id: "3",
    name: "Business Branch",
    events: 10,
    attendees: 320,
    revenue: 4800,
    location: "Downtown",
  },
  {
    id: "4",
    name: "Fitness Branch",
    events: 12,
    attendees: 210,
    revenue: 1050,
    location: "South Campus",
  },
  {
    id: "5",
    name: "Literary Branch",
    events: 5,
    attendees: 95,
    revenue: 475,
    location: "Library",
  },
];

const adminUsers = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex@example.com",
    branch: "Technology Branch",
    role: "Branch Admin",
    lastActive: "Today",
  },
  {
    id: "2",
    name: "Maria Garcia",
    email: "maria@example.com",
    branch: "Arts Branch",
    role: "Branch Admin",
    lastActive: "Yesterday",
  },
  {
    id: "3",
    name: "David Lee",
    email: "david@example.com",
    branch: "Business Branch",
    role: "Branch Admin",
    lastActive: "2 days ago",
  },
];

const recentEvents = [
  {
    id: "1",
    title: "Annual Tech Conference",
    branch: "Technology Branch",
    date: "June 15, 2025",
    attendees: 120,
    revenue: 5980,
  },
  {
    id: "2",
    title: "Business Networking Mixer",
    branch: "Business Branch",
    date: "June 22, 2025",
    attendees: 85,
    revenue: 1275,
  },
  {
    id: "3",
    title: "Photography Workshop",
    branch: "Arts Branch",
    date: "July 2, 2025",
    attendees: 35,
    revenue: 875,
  },
];

const pieData = [
  { name: "Technology", value: 245 },
  { name: "Arts", value: 180 },
  { name: "Business", value: 320 },
  { name: "Fitness", value: 210 },
  { name: "Literary", value: 95 }
];

const revenueData = [
  { name: "Tech", value: 2450 },
  { name: "Arts", value: 1800 },
  { name: "Business", value: 4800 },
  { name: "Fitness", value: 1050 },
  { name: "Literary", value: 475 }
];

const COLORS = ["#5E35B1", "#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

const SuperAdminDashboard = () => {
  const [activePage, setActivePage] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        {/* Sidebar */}
        <Sidebar className="border-r border-gray-200">
          <SidebarHeader className="border-b border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-brand-purple" />
              <span className="text-xl font-bold">EventHub</span>
            </div>
          </SidebarHeader>
          <SidebarContent className="p-4">
            <div className="flex flex-col gap-1 mb-6">
              <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-brand-purple text-white">SA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Super Admin</p>
                  <p className="text-sm text-gray-500">All branches</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-1">
              <button
                onClick={() => setActivePage("overview")}
                className={`flex items-center w-full gap-3 p-2 rounded-md ${
                  activePage === "overview"
                    ? "bg-brand-purple text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <Home size={18} />
                <span>Overview</span>
              </button>
              <button
                onClick={() => setActivePage("branches")}
                className={`flex items-center w-full gap-3 p-2 rounded-md ${
                  activePage === "branches"
                    ? "bg-brand-purple text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <Building size={18} />
                <span>Branches</span>
              </button>
              <button
                onClick={() => setActivePage("admins")}
                className={`flex items-center w-full gap-3 p-2 rounded-md ${
                  activePage === "admins"
                    ? "bg-brand-purple text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <Users size={18} />
                <span>Admins</span>
              </button>
              <button
                onClick={() => setActivePage("analytics")}
                className={`flex items-center w-full gap-3 p-2 rounded-md ${
                  activePage === "analytics"
                    ? "bg-brand-purple text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <BarChart3 size={18} />
                <span>Analytics</span>
              </button>
              <button
                onClick={() => setActivePage("settings")}
                className={`flex items-center w-full gap-3 p-2 rounded-md ${
                  activePage === "settings"
                    ? "bg-brand-purple text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <Settings size={18} />
                <span>Settings</span>
              </button>
            </div>
          </SidebarContent>
          <SidebarFooter className="p-4 border-t border-gray-200">
            <Link to="/login">
              <Button variant="outline" className="w-full flex items-center gap-2">
                <LogOut size={18} />
                <span>Sign out</span>
              </Button>
            </Link>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-white">
            <div>
              <h1 className="text-2xl font-bold">Super Admin Dashboard</h1>
              <p className="text-gray-500">Manage all branches and events</p>
            </div>
            <div className="flex items-center gap-4">
              <SidebarTrigger />
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6">
            {activePage === "overview" && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Total Branches</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">5</div>
                      <p className="text-sm text-brand-purple mt-2">All active</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Total Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">41</div>
                      <p className="text-sm text-green-600 mt-2">+8 this month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Total Attendees</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">1,050</div>
                      <p className="text-sm text-green-600 mt-2">+215 this month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">$10,575</div>
                      <p className="text-sm text-green-600 mt-2">+$1,250 this month</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Attendees by Branch</CardTitle>
                      <CardDescription>Distribution of attendees across branches</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80 flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={pieData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                              {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Revenue by Branch</CardTitle>
                      <CardDescription>Revenue distribution across branches</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
                            <Bar dataKey="value" fill="#5E35B1" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Events */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Events</CardTitle>
                    <CardDescription>Latest events across all branches</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Title</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Branch</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Date</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Attendees</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Revenue</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentEvents.map((event) => (
                            <tr key={event.id} className="border-b last:border-0">
                              <td className="py-3 px-4 font-medium">{event.title}</td>
                              <td className="py-3 px-4">{event.branch}</td>
                              <td className="py-3 px-4">{event.date}</td>
                              <td className="py-3 px-4">{event.attendees}</td>
                              <td className="py-3 px-4">${event.revenue}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activePage === "branches" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Branches</h2>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Input
                        type="search"
                        placeholder="Search branches..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-64"
                      />
                    </div>
                    <Button className="bg-brand-purple hover:bg-brand-purple/90">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Branch
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Name</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Location</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Events</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Attendees</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Revenue</th>
                            <th className="text-right py-3 px-4 font-medium text-gray-500">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {branchData
                            .filter(branch => 
                              branch.name.toLowerCase().includes(searchQuery.toLowerCase())
                            )
                            .map((branch) => (
                              <tr key={branch.id} className="border-b last:border-0">
                                <td className="py-3 px-4 font-medium">{branch.name}</td>
                                <td className="py-3 px-4">{branch.location}</td>
                                <td className="py-3 px-4">{branch.events}</td>
                                <td className="py-3 px-4">{branch.attendees}</td>
                                <td className="py-3 px-4">${branch.revenue}</td>
                                <td className="py-3 px-4 text-right">
                                  <div className="flex justify-end gap-2">
                                    <Button variant="outline" size="sm">View</Button>
                                    <Button variant="outline" size="sm">Edit</Button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activePage === "admins" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Branch Admins</h2>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Input
                        type="search"
                        placeholder="Search admins..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-64"
                      />
                    </div>
                    <Button className="bg-brand-purple hover:bg-brand-purple/90">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Admin
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Name</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Email</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Branch</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Role</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Last Active</th>
                            <th className="text-right py-3 px-4 font-medium text-gray-500">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {adminUsers
                            .filter(admin => 
                              admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              admin.email.toLowerCase().includes(searchQuery.toLowerCase())
                            )
                            .map((admin) => (
                              <tr key={admin.id} className="border-b last:border-0">
                                <td className="py-3 px-4">
                                  <div className="flex items-center">
                                    <Avatar className="h-8 w-8 mr-2">
                                      <AvatarFallback className="bg-brand-purple/10 text-brand-purple">
                                        {admin.name.charAt(0)}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span className="font-medium">{admin.name}</span>
                                  </div>
                                </td>
                                <td className="py-3 px-4">{admin.email}</td>
                                <td className="py-3 px-4">{admin.branch}</td>
                                <td className="py-3 px-4">
                                  <Badge variant="outline">{admin.role}</Badge>
                                </td>
                                <td className="py-3 px-4">{admin.lastActive}</td>
                                <td className="py-3 px-4 text-right">
                                  <div className="flex justify-end gap-2">
                                    <Button variant="outline" size="sm">Edit</Button>
                                    <Button variant="outline" size="sm" className="text-destructive">
                                      Revoke
                                    </Button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activePage === "analytics" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold">Analytics</h2>
                
                <Tabs defaultValue="attendance">
                  <TabsList>
                    <TabsTrigger value="attendance">Attendance</TabsTrigger>
                    <TabsTrigger value="revenue">Revenue</TabsTrigger>
                    <TabsTrigger value="growth">Growth</TabsTrigger>
                  </TabsList>
                  <TabsContent value="attendance" className="mt-4 space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Attendance Overview</CardTitle>
                        <CardDescription>Total attendees across all branches</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={pieData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Bar dataKey="value" fill="#5E35B1" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="revenue" className="mt-4 space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Revenue Analysis</CardTitle>
                        <CardDescription>Financial performance by branch</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={revenueData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
                              <Bar dataKey="value" fill="#10B981" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="growth" className="mt-4 space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Growth Trends</CardTitle>
                        <CardDescription>Year-over-year growth metrics</CardDescription>
                      </CardHeader>
                      <CardContent className="h-80 flex items-center justify-center">
                        <p className="text-gray-500">Growth data visualization coming soon</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {activePage === "settings" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold">System Settings</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Global Settings</CardTitle>
                    <CardDescription>Configure system-wide settings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">Settings content here...</p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default SuperAdminDashboard;
