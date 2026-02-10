const eventsData = {
    technical: [
        {
            id: "robo-sumo",
            title: "Robo Sumo",
            category: "Combat",
            description: "A competitive robotics event where two robots face off in a sumo-style arena, and the robot that pushes its opponent outside the circular ring the most number of times wins the challenge.",
            image: "robo%20sumo.png",
            rules: [
                "Max Weight: 3kg",
                "Dimensions: 20cm x 20cm",
                "Autonomous or RC allowed",
                "Best of 3 rounds"
            ],
            timeline: "Feb 28",
            prize: "₹15,000",
            venue: "Main Auditorium",
            time: "10:00 AM - 04:00 PM",
            on_coordinator: {
                name: "Rahul K.",
                phone: "+91 98765 43210"
            }
        },
        {
            id: "robo-soccer",
            title: "Robo Soccer",
            category: "Sports",
            description: "A competitive robotics event where robots compete in a soccer match, and the robot that scores the highest number of goals within the given time limit wins.",
            image: "https://images.unsplash.com/photo-1555617778-02518510b9fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            rules: [
                "Max Weight: 5kg",
                "Dimensions: 30cm x 30cm",
                "Wireless control mandatory",
                "Voltage limit: 12V"
            ],
            timeline: "Feb 28",
            prize: "₹15,000",
            venue: "Open Ground B",
            time: "11:00 AM - 05:00 PM",
            on_coordinator: {
                name: "Sneha M.",
                phone: "+91 99887 76655"
            }
        },
        {
            id: "robo-rush",
            title: "Robo Rush",
            category: "Racing",
            description: "A competitive robotics event where robots navigate an all-terrain course with multiple obstacles, and the robot that completes the course in the shortest time wins the challenge.",
            image: "https://images.unsplash.com/photo-1533475787313-2d2f70afec92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            rules: [
                "All-terrain capabilities",
                "Wireless control",
                "Time penalties for skipping obstacles",
                "Max battery: 12V 2200mAh"
            ],
            timeline: "Feb 28",
            prize: "₹12,000",
            venue: "OAT",
            time: "09:00 AM - 03:00 PM",
            on_coordinator: {
                name: "Vikram S.",
                phone: "+91 91234 56789"
            }
        },
        {
            id: "robo-popz",
            title: "Robo Popz",
            category: "Fun Event",
            description: "A fun robotics event where robots are tasked with popping the maximum number of balloons within a fixed time limit, testing precision, control, and strategic movement.",
            image: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            rules: [
                "Sharp mechanism allowed",
                "Safe for spectators",
                "Time limit: 3 mins",
                "Points per balloon popped"
            ],
            timeline: "Feb 28",
            prize: "₹10,000",
            venue: "LHC Hall 4",
            time: "02:00 PM - 05:00 PM",
            on_coordinator: {
                name: "Priya D.",
                phone: "+91 88776 65544"
            }
        }
    ],
    workshops: [
        {
            id: "ros2-swarm",
            title: "ROS 2 Swarm Robotics",
            category: "Software/Advanced",
            description: "Dive into the world of Swarm Robotics with ROS 2. Learn how multiple robots communicate and coordinate to solve tasks.",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            rules: [
                "Laptop required (Ubuntu 22.04 recommended)",
                "Basic Python/C++ knowledge needed",
                "Duration: 6 hours",
                "Certificate provided"
            ],
            timeline: "Feb 28, 09:00 AM",
            prize: "Free",
            venue: "Computer Lab 1",
            time: "09:00 AM - 03:00 PM",
            on_coordinator: {
                name: "Arun K.",
                phone: "+91 76543 21098"
            }
        },
        {
            id: "opencv-vision",
            title: "OpenCV Vision",
            category: "AI/Machine Vision",
            description: "Unlock the power of Computer Vision. Learn to process images and videos for object detection, face recognition, and more.",
            image: "https://images.unsplash.com/photo-1527430253228-e963143bd729?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            rules: [
                "Laptop required (Python installed)",
                "Hands-on coding session",
                "Real-time projects",
                "Duration: 5 hours"
            ],
            timeline: "Feb 28, 02:00 PM",
            prize: "₹300",
            venue: "Seminar Hall 2",
            time: "02:00 PM - 07:00 PM",
            on_coordinator: {
                name: "Meera R.",
                phone: "+91 65432 10987"
            }
        },
        {
            id: "solidworks-cad",
            title: "SolidWorks CAD",
            category: "Mechanical/Design",
            description: "Master the art of 3D modeling. Learn to design complex mechanical parts and assemblies using SolidWorks.",
            image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            rules: [
                "Laptop with SolidWorks installed (Trial ok)",
                "Design principles covered",
                "From sketch to final render",
                "Duration: 6 hours"
            ],
            timeline: "Mar 01, 09:00 AM",
            prize: "₹400",
            venue: "CAD Lab",
            time: "09:00 AM - 03:00 PM",
            on_coordinator: {
                name: "Suresh P.",
                phone: "+91 54321 09876"
            }
        },
        {
            id: "arduino-micro",
            title: "Arduino/Microcontrollers",
            category: "Foundational",
            description: "The perfect starting point for robotics. Learn to interface sensors, actuators, and code your first robot brain.",
            image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            rules: [
                "Hardware kit provided for session",
                "No prior coding experience needed",
                "Take home small projects",
                "Duration: 4 hours"
            ],
            timeline: "Mar 01, 02:00 PM",
            prize: "₹300",
            venue: "Electronics Lab 3",
            time: "02:00 PM - 06:00 PM",
            on_coordinator: {
                name: "Divya N.",
                phone: "+91 43210 98765"
            }
        }
    ]
};
