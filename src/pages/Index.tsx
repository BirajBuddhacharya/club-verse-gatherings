// Update this page (the content is just a fallback if you fail to update the page)

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin } from "lucide-react";

// Mock data
const featuredEvents = [
  {
    id: "1",
    title: "Annual Tech Conference",
    date: "June 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Main Hall, Downtown",
    branch: "Technology Branch",
    price: 49.99,
    attendees: 120,
    maxAttendees: 200,
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    featured: true,
  },
  {
    id: "2",
    title: "Photography Workshop",
    date: "July 2, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Art Studio, West Campus",
    branch: "Arts Branch",
    price: 25,
    attendees: 35,
    maxAttendees: 40,
    image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    featured: true,
  },
  {
    id: "3",
    title: "Business Networking Mixer",
    date: "June 22, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Grand Hotel, Financial District",
    branch: "Business Branch",
    price: 15,
    attendees: 85,
    maxAttendees: 100,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    featured: true,
  },
];

const upcomingEvents = [
  {
    id: "4",
    title: "Book Club Meeting",
    date: "June 18, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Library, North Campus",
    branch: "Literary Branch",
    price: 0,
    attendees: 18,
    maxAttendees: 30,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: "5",
    title: "Yoga in the Park",
    date: "June 20, 2025",
    time: "7:30 AM - 8:30 AM",
    location: "Central Park",
    branch: "Fitness Branch",
    price: 0,
    attendees: 45,
    maxAttendees: 60,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: "6",
    title: "Introduction to AI",
    date: "June 25, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Tech Hub, East Campus",
    branch: "Technology Branch",
    price: 10,
    attendees: 65,
    maxAttendees: 80,
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: "7",
    title: "Cooking Class: Italian Cuisine",
    date: "June 28, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "Culinary Center",
    branch: "Culinary Branch",
    price: 35,
    attendees: 22,
    maxAttendees: 25,
    image: "https://images.unsplash.com/photo-1507048331197-7d4c42b23929?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: "8",
    title: "Marketing Strategies Seminar",
    date: "July 5, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Business School, Main Campus",
    branch: "Business Branch",
    price: 20,
    attendees: 40,
    maxAttendees: 50,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: "9",
    title: "Beginner's Guitar Class",
    date: "July 10, 2025",
    time: "4:00 PM - 5:30 PM",
    location: "Music Room, South Campus",
    branch: "Music Branch",
    price: 15,
    attendees: 12,
    maxAttendees: 15,
    image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

const branches = [
  { id: "all", name: "All Branches" },
  { id: "tech", name: "Technology Branch" },
  { id: "arts", name: "Arts Branch" },
  { id: "business", name: "Business Branch" },
  { id: "fitness", name: "Fitness Branch" },
  { id: "literary", name: "Literary Branch" },
  { id: "culinary", name: "Culinary Branch" },
  { id: "music", name: "Music Branch" },
];

const upcomingDates = [
  { id: "all", name: "All Dates" },
  { id: "today", name: "Today" },
  { id: "tomorrow", name: "Tomorrow" },
  { id: "thisWeek", name: "This Week" },
  { id: "thisMonth", name: "This Month" },
  { id: "nextMonth", name: "Next Month" },
];

const Index = () => {
  const [selectedBranch, setSelectedBranch] = useState("all");
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      
      {/* Featured Events */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Featured Events</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Upcoming Events</h2>
          <Button variant="link" className="text-brand-purple">View all</Button>
        </div>
        
        <div className="mb-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6 flex flex-nowrap overflow-x-auto pb-2 scrollbar-none">
              {branches.map((branch) => (
                <TabsTrigger 
                  key={branch.id}
                  value={branch.id}
                  onClick={() => setSelectedBranch(branch.id)}
                  className="whitespace-nowrap"
                >
                  {branch.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="mb-8 flex flex-nowrap overflow-x-auto gap-2 pb-2 scrollbar-none">
              {upcomingDates.map((date) => (
                <Button 
                  key={date.id}
                  variant={date.id === "all" ? "default" : "outline"} 
                  size="sm"
                  className={date.id === "all" ? "bg-brand-purple" : ""}
                >
                  {date.name}
                </Button>
              ))}
            </div>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </TabsContent>
            {/* Other tabs would filter events by branch */}
          </Tabs>
        </div>
      </section>

      {/* Event categories section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Workshops", "Seminars", "Networking", "Social"].map((category) => (
            <div 
              key={category}
              className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow cursor-pointer"
            >
              <h3 className="font-semibold text-lg">{category}</h3>
              <p className="text-sm text-gray-500 mt-2">12 events</p>
            </div>
          ))}
        </div>
      </section>

      {/* Calendar section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Calendar</h2>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { date: "June 15", title: "Annual Tech Conference", location: "Main Hall" },
              { date: "June 18", title: "Book Club Meeting", location: "Library" },
              { date: "June 20", title: "Yoga in the Park", location: "Central Park" },
              { date: "June 22", title: "Business Networking Mixer", location: "Grand Hotel" },
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center p-3 border rounded-md hover:bg-gray-50 transition-colors"
              >
                <div className="bg-brand-purple/10 text-brand-purple rounded-md p-3 mr-4">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    <span className="mr-3">{item.date}</span>
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EventHub</h3>
            <p className="text-gray-300">
              Discover and join amazing events organized by our club branches.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Branches</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Login</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Branches</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Technology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Arts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Business</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">View All</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>123 Event Street</li>
              <li>New York, NY 10001</li>
              <li>info@eventhub.com</li>
              <li>(123) 456-7890</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 EventHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
