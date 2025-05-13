
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, User, Users, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [registering, setRegistering] = useState(false);
  const [attendeesOpen, setAttendeesOpen] = useState(false);

  // In a real app, we would fetch event details from an API
  // This is mock data for demonstration
  const event = {
    id: id,
    title: "Annual Tech Conference",
    description: "Join us for an exciting day of technology talks, workshops, and networking opportunities. Learn from industry experts and connect with fellow technology enthusiasts. This year's theme is 'Innovation for the Future', featuring sessions on AI, blockchain, cloud computing, and more.",
    date: "June 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Main Hall, Downtown",
    address: "123 Conference Ave, New York, NY 10001",
    branch: "Technology Branch",
    price: 49.99,
    attendees: [
      { id: 1, name: "John Doe", email: "john@example.com", registeredOn: "May 1, 2025" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", registeredOn: "May 2, 2025" },
      { id: 3, name: "Robert Johnson", email: "robert@example.com", registeredOn: "May 3, 2025" },
      { id: 4, name: "Sarah Williams", email: "sarah@example.com", registeredOn: "May 4, 2025" },
      { id: 5, name: "Michael Brown", email: "michael@example.com", registeredOn: "May 5, 2025" },
    ],
    attendeeCount: 120,
    maxAttendees: 200,
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    featured: true,
    organizer: "Tech Team",
    schedule: [
      {
        time: "9:00 AM - 10:00 AM",
        title: "Registration & Breakfast",
        description: "Check in and enjoy a continental breakfast",
      },
      {
        time: "10:00 AM - 11:30 AM",
        title: "Keynote: The Future of Technology",
        description: "Presented by Dr. Jane Smith, CTO of TechGiant",
      },
      {
        time: "11:45 AM - 12:45 PM",
        title: "Workshop Sessions",
        description: "Choose from three different parallel workshops",
      },
      {
        time: "1:00 PM - 2:00 PM",
        title: "Lunch",
        description: "Networking lunch with industry professionals",
      },
      {
        time: "2:15 PM - 3:45 PM",
        title: "Panel Discussion",
        description: "Emerging Trends in Technology",
      },
      {
        time: "4:00 PM - 5:00 PM",
        title: "Closing Session & Networking",
        description: "Final remarks and networking opportunity",
      },
    ],
    speakers: [
      {
        name: "Dr. Jane Smith",
        title: "CTO, TechGiant",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      {
        name: "Michael Johnson",
        title: "AI Research Lead, InnovateTech",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      {
        name: "Sarah Williams",
        title: "Product Director, CloudSys",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
      },
    ],
  };

  const handleRegister = () => {
    setRegistering(true);
    
    // Simulate API call
    setTimeout(() => {
      setRegistering(false);
      toast({
        title: "Registration Successful",
        description: "You have successfully registered for this event!",
      });
    }, 1500);
  };

  const handleShare = () => {
    // In a real app, this would open a share dialog
    toast({
      title: "Share Link Copied",
      description: "Event link copied to clipboard!",
    });
  };

  const handleViewAttendees = () => {
    setAttendeesOpen(true);
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto py-12 px-4 text-center">
          <h2 className="text-2xl font-bold">Event not found</h2>
          <Link to="/" className="text-brand-purple hover:underline mt-4 block">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[200px] md:h-[300px] bg-gradient-to-r from-brand-purple to-violet-700" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative bg-white shadow-md rounded-lg p-6 -mt-16 md:-mt-24">
            <div className="md:flex md:items-start md:space-x-8">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 md:h-72 object-cover rounded-md"
                />
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-brand-purple">{event.branch}</Badge>
                  {event.featured && (
                    <Badge variant="outline" className="border-brand-purple text-brand-purple">
                      Featured
                    </Badge>
                  )}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-4">{event.title}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-brand-purple" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-brand-purple" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-brand-purple" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2 text-brand-purple" />
                    <span>
                      {event.attendeeCount} registered ({event.maxAttendees - event.attendeeCount} spots left)
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <Button 
                    className="bg-brand-purple hover:bg-brand-purple/90"
                    onClick={handleRegister}
                    disabled={registering}
                  >
                    {registering ? "Processing..." : (event.price > 0 ? `Register - $${event.price}` : "Register - Free")}
                  </Button>
                  <Button variant="outline" onClick={handleShare}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Event
                  </Button>
                  <Button variant="outline" onClick={handleViewAttendees}>
                    <Users className="h-4 w-4 mr-2" />
                    View Attendees
                  </Button>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Organized by {event.organizer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Event Details */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Event</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 whitespace-pre-line">{event.description}</p>
              </CardContent>
            </Card>
            
            {/* Schedule */}
            <Card>
              <CardHeader>
                <CardTitle>Event Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {event.schedule.map((item, index) => (
                    <div key={index} className={`relative pl-6 ${index < event.schedule.length - 1 ? 'pb-6 border-l border-gray-200' : ''}`}>
                      <div className="absolute left-0 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-purple" />
                      <h3 className="font-medium">{item.time}</h3>
                      <p className="font-bold mt-1">{item.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Speakers */}
            <Card>
              <CardHeader>
                <CardTitle>Featured Speakers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-bold">{speaker.name}</h3>
                      <p className="text-sm text-gray-600">{speaker.title}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-40 rounded-md mb-4">
                  {/* Map placeholder - would be an actual map in a real app */}
                  <div className="h-full w-full flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
                <h3 className="font-bold">{event.location}</h3>
                <p className="text-gray-600 mt-1">{event.address}</p>
                <Button variant="outline" className="w-full mt-4">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
            
            {/* Organizer */}
            <Card>
              <CardHeader>
                <CardTitle>Organizer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="bg-brand-purple/10 text-brand-purple rounded-full p-3">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">{event.organizer}</h3>
                    <p className="text-sm text-gray-600">{event.branch}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Contact Organizer
                </Button>
              </CardContent>
            </Card>
            
            {/* Similar Events */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2].map((item) => (
                    <div key={item} className="flex gap-3">
                      <div className="w-16 h-16 rounded-md bg-gray-200 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-sm">Introduction to AI</h3>
                        <p className="text-xs text-gray-600 mt-1">June 25, 2025</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="link" className="w-full text-brand-purple">
                    View More Events
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Registration CTA */}
      <div className="bg-brand-purple py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Join This Event?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Secure your spot now and be part of this amazing event. Limited seats available!
          </p>
          <Button 
            size="lg"
            className="bg-white text-brand-purple hover:bg-gray-100"
            onClick={handleRegister}
            disabled={registering}
          >
            {registering ? "Processing..." : "Register Now"}
          </Button>
        </div>
      </div>

      {/* Attendees Dialog */}
      <Dialog open={attendeesOpen} onOpenChange={setAttendeesOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Event Attendees</DialogTitle>
            <DialogDescription>
              {event.attendeeCount} people are attending this event
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[400px] overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Registered On</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {event.attendees.map((attendee) => (
                  <TableRow key={attendee.id}>
                    <TableCell className="font-medium">{attendee.name}</TableCell>
                    <TableCell>{attendee.email}</TableCell>
                    <TableCell>{attendee.registeredOn}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventDetails;
