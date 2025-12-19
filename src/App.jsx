import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Code,
  Zap,
  MessageSquare,
  Star,
  GraduationCap,
  BookOpen,
  Award,
  Send,
  Menu,
  X,
} from "lucide-react";
import "./App.css";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import pdf from "./assets/Rajat_Bagaddeo.pdf";

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus(""), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const projects = [
    {
      name: "ExpenseGuru",
      tagline: "Smart Money Management Made Simple",
      date: "Nov 2024 - Dec 2024",
      image: img1,
      tech: [
        "React.js",
        "Tailwind CSS",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Redux Toolkit",
        "JWT",
      ],
      features: [
        "Transaction management with chronological sorting",
        "Dynamic visualizations for income/expense analysis",
        "Smart budget planning based on spending patterns",
        "Graphical analysis of historical financial data",
      ],
      gradient: "from-emerald-400/20 via-teal-500/20 to-cyan-600/20",
      borderGradient: "from-emerald-400 via-teal-500 to-cyan-600",
      github: "https://github.com/WEBDEV-Rajat/Agile-Avengers",
    },
    {
      name: "Chatty",
      tagline: "Seamless Real-Time Connectivity",
      date: "June 2025",
      image: img2,
      tech: [
        "React.js",
        "Tailwind CSS",
        "Zustand",
        "MongoDB",
        "Socket.IO",
        "Cloudinary",
        "JWT",
      ],
      features: [
        "Real-time messaging with instant updates",
        "Theme and color customization",
        "Profile editing and management",
        "Presence detection and online status",
        "Modern UI/UX design",
      ],
      gradient: "from-blue-400/20 via-indigo-500/20 to-purple-600/20",
      borderGradient: "from-blue-400 via-indigo-500 to-purple-600",
      github: "https://github.com/WEBDEV-Rajat/Chatty",
    },
    {
      name: "Morphio",
      tagline: "Smart File Editing and Conversion Tool",
      date: "Oct 2025",
      image: img3,
      tech: [
        "Electron.js",
        "Node.js",
        "React.js",
        "Tailwind CSS",
        "Sharp",
        "Ghostscript",
        "QPDF",
      ],
      features: [
        "All-in-one desktop utility for file operations",
        "Word/PPT/Image to PDF conversion",
        "In-app PDF editor with annotations",
        "PDF compression and encryption",
        "Modern React-based UI with animations",
      ],
      gradient: "from-purple-400/20 via-pink-500/20 to-rose-600/20",
      borderGradient: "from-purple-400 via-pink-500 to-rose-600",
      github: "https://github.com/WEBDEV-Rajat/Morphio",
    },
  ];

  const skills = {
    languages: ["C++"],
    tools: ["Git", "Github", "VS Code", "Postman"],
    frameworks: [
      "React.js",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Zustand",
    ],
    databases: ["MongoDB"],
    interests: [
      "DSA",
      "OOP",
      "Web Development",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
    ],
  };

  const education = [
    {
      degree: "B.Tech in Electrical Engineering",
      institution: "Motilal Nehru National Institute of Technology, Allahabad",
      duration: "2023 - 2027",
      cpi: "7.86",
      icon: GraduationCap,
      bgGradient: "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
      borderColor: "border-blue-500/40",
      iconColor: "text-blue-400",
      accentColor: "text-blue-400",
    },
    {
      degree: "Intermediate (12th)",
      institution: "FIITJEE Junior College, Hyderabad",
      duration: "2020 - 2022",
      score: "95.1%",
      icon: BookOpen,
      bgGradient: "from-purple-500/20 via-pink-500/20 to-purple-600/20",
      borderColor: "border-purple-500/40",
      iconColor: "text-purple-400",
      accentColor: "text-purple-400",
    },
    {
      degree: "High School (10th)",
      institution: "Slate-The-School, Hyderabad",
      duration: "2019 - 2020",
      cpi: "10",
      icon: Award,
      bgGradient: "from-green-500/20 via-emerald-500/20 to-green-600/20",
      borderColor: "border-green-500/40",
      iconColor: "text-green-400",
      accentColor: "text-green-400",
    },
  ];

  const BackgroundGradient = () => {
    const canvasRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
      const updateDimensions = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      };
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
      const handleMouseMove = (e) => {
        mouseRef.current = { x: e.clientX, y: e.clientY };
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas || !dimensions.width) return;

      const ctx = canvas.getContext("2d");
      const particles = [];
      const particleCount = 120;
      const maxDistance = 150;

      class Particle {
        constructor() {
          this.x = Math.random() * dimensions.width;
          this.y = Math.random() * dimensions.height;
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = (Math.random() - 0.5) * 0.5;
          this.radius = Math.random() * 2 + 1;
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;

          if (this.x < 0 || this.x > dimensions.width) this.vx *= -1;
          if (this.y < 0 || this.y > dimensions.height) this.vy *= -1;

          const dx = mouseRef.current.x - this.x;
          const dy = mouseRef.current.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            this.vx += dx * 0.00005;
            this.vy += dy * 0.00005;
          }

          const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
          if (speed > 2) {
            this.vx = (this.vx / speed) * 2;
            this.vy = (this.vy / speed) * 2;
          }
        }

        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 229, 255, 0.8)";
          ctx.fill();
        }
      }

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
      particlesRef.current = particles;

      let animationId;
      const animate = () => {
        ctx.fillStyle = "rgba(3, 15, 39, 0.1)";
        ctx.fillRect(0, 0, dimensions.width, dimensions.height);

        particles.forEach((particle) => {
          particle.update();
          particle.draw();
        });

        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
              const opacity = (1 - distance / maxDistance) * 0.5;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(0, 229, 255, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }

        animationId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        if (animationId) cancelAnimationFrame(animationId);
      };
    }, [dimensions]);

    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030f27] via-[#05172e] to-[#020b1a]" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(0, 229, 255, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(0, 229, 255, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(0, 229, 255, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400 blur-sm"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
        <canvas
          ref={canvasRef}
          width={dimensions.width}
          height={dimensions.height}
          className="absolute inset-0"
          style={{ opacity: 0.9 }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <BackgroundGradient />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-lg border-b border-cyan-500/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.a href="/" whileHover={{ scale: 1.05 }}>
            <span className="text-2xl font-bold font-mono text-cyan-400">
              {"<RB/>"}
            </span>
          </motion.a>
          <div className="hidden md:flex items-center gap-8">
            {["Projects", "Skills", "Education", "Contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-cyan-400 font-medium font-mono transition-colors relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 opacity-0 group-hover:opacity-100" />
              </motion.button>
            ))}
          </div>

          <motion.button
            className="md:hidden text-cyan-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-cyan-500/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-4 p-6">
              {["Projects", "Skills", "Education", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-cyan-400 font-medium font-mono transition-colors text-left"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        className="min-h-screen relative flex items-center justify-center px-6 pt-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 -z-10 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 229, 255, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 229, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{
              width: "100%",
              top: `${20 + i * 15}%`,
              left: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear",
            }}
          />
        ))}

        <motion.div
          className="relative z-10 text-center max-w-6xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="relative backdrop-blur-xl bg-slate-900/40 border-2 border-cyan-500/30 rounded-2xl p-12 shadow-2xl shadow-cyan-500/20">
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-cyan-400 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-cyan-400 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-cyan-400 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-cyan-400 rounded-br-2xl" />

            {[
              [0, 0],
              [0, 100],
              [100, 0],
              [100, 100],
            ].map(([top, left], i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                style={{
                  top: top === 0 ? "-6px" : "auto",
                  bottom: top === 100 ? "-6px" : "auto",
                  left: left === 0 ? "-6px" : "auto",
                  right: left === 100 ? "-6px" : "auto",
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}

            <motion.div
              className="absolute top-4 right-4 flex items-center gap-2 text-xs text-cyan-400 font-mono"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
              <span>SYSTEM ONLINE</span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight tracking-wider"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
            >
              <motion.span
                className="relative inline-block text-cyan-400"
                style={{
                  textShadow:
                    "0 0 20px rgba(0, 229, 255, 0.5), 0 0 40px rgba(0, 229, 255, 0.3)",
                }}
                whileHover={{
                  textShadow:
                    "0 0 30px rgba(0, 229, 255, 0.8), 0 0 60px rgba(0, 229, 255, 0.5)",
                }}
              >
                RAJAT
              </motion.span>{" "}
              <motion.span
                className="relative inline-block text-white"
                whileHover={{
                  color: "#00e5ff",
                  textShadow: "0 0 20px rgba(0, 229, 255, 0.5)",
                }}
              >
                BAGADDEO
              </motion.span>
            </motion.h1>

            <motion.div
              className="mb-8 font-mono"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-xl md:text-3xl text-cyan-400 bg-slate-900/60 px-6 py-3 rounded-lg border border-cyan-500/30">
                <span className="text-green-400">{">"}</span>
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  FULL_STACK_DEVELOPER
                </motion.span>
                <motion.span
                  className="w-2 h-5 bg-cyan-400 inline-block"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="space-y-4 mb-10"
            >
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-gray-300 font-mono text-sm md:text-base">
                <div className="flex items-center gap-2 bg-slate-900/40 px-4 py-2 rounded border border-cyan-500/20">
                  <span className="text-cyan-400">[BRANCH]</span>
                  <span>Electrical Engineering</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/40 px-4 py-2 rounded border border-cyan-500/20">
                  <span className="text-cyan-400">[INSTITUTE]</span>
                  <span>MNNIT Allahabad</span>
                </div>
              </div>
              <motion.p
                className="text-base md:text-lg text-gray-400 font-mono max-w-2xl mx-auto mt-6"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                // Crafting digital experiences with code & creativity
              </motion.p>
            </motion.div>

            <motion.button
              onClick={() => {
                const link = document.createElement("a");
                link.href = pdf;
                link.download = "Rajat_Bagaddeo.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="group relative overflow-hidden rounded-lg px-12 py-4 text-lg font-bold font-mono text-white shadow-2xl shadow-cyan-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 100%" }}
              />
              <div className="absolute inset-[2px] bg-slate-900 rounded-lg" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10 flex items-center gap-3">
                <span>{"<"}</span>
                DOWNLOAD_RESUME
                <span>{"/>"}</span>
              </span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-8 flex justify-center gap-8 text-xs font-mono text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>UPTIME: 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span>STATUS: ACTIVE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>READY TO CONNECT</span>
              </div>
            </motion.div>
          </div>

          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 border border-cyan-500/20 rounded-lg"
              style={{
                left: `${10 + i * 35}%`,
                top: i % 2 === 0 ? "10%" : "80%",
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1,
              }}
            />
          ))}
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-4 md:py-24 lg:py-32 max-w-7xl mx-auto relative"
      >
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-12 sm:mb-16 md:mb-20 font-mono flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Code size={40} className="text-cyan-400 sm:size-12 md:size-16" />
          <span className="text-cyan-400">FEATURED_PROJECTS</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:ml-16 lg:mr-16 gap-12 lg:gap-20">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="relative rounded-2xl p-6 sm:p-8 bg-black border-2 backdrop-blur-lg shadow-2xl overflow-hidden"
                style={{ borderColor: "rgba(0, 229, 255, 0.3)" }}
                whileHover={{
                  boxShadow: "0 0 40px rgba(0, 229, 255, 0.5)",
                  borderColor: "rgba(0, 229, 255, 0.6)",
                }}
              >
                {/* Project Active Indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2 text-xs text-cyan-400 font-mono">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span>PROJECT_ACTIVE</span>
                </div>

                {/* Project Image - Responsive */}
                <div className="mt-8 sm:mt-10 w-full">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto rounded-xl object-cover shadow-lg"
                  />
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-white font-mono mt-8">
                  {project.name}
                </h3>

                {/* Tagline */}
                <p className="text-gray-300 mb-2 font-mono text-base sm:text-lg">
                  // {project.tagline}
                </p>

                {/* Date */}
                <span className="text-sm text-cyan-400 font-mono">
                  [{project.date}]
                </span>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 my-6">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-900/60 border border-cyan-500/30 rounded-lg text-xs sm:text-sm backdrop-blur font-mono text-cyan-300"
                      whileHover={{
                        scale: 1.1,
                        borderColor: "rgba(0, 229, 255, 0.6)",
                        backgroundColor: "rgba(0, 229, 255, 0.1)",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Features List */}
                <ul className="space-y-3 mt-6">
                  {project.features.map((f, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-200 flex items-start font-mono text-sm sm:text-base"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <motion.span
                        className="text-cyan-400 font-bold mr-3 flex-shrink-0"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      >
                        {">>>"}
                      </motion.span>
                      {f}
                    </motion.li>
                  ))}
                </ul>

                {/* GitHub Button */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 px-6 py-3 sm:px-8 sm:py-3 bg-slate-900/80 border-2 border-cyan-500 rounded-lg font-semibold block text-center font-mono text-cyan-400 hover:bg-cyan-500/20 transition-colors w-full sm:w-auto sm:inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  {"<"} VIEW_ON_GITHUB {"/>"}
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 max-w-7xl mx-auto relative">
        <motion.h2 className="text-5xl md:text-7xl font-black text-center mb-20 font-mono flex items-center justify-center gap-6">
          <Zap size={60} className="text-cyan-400" />
          <span className="text-cyan-400">TECHNICAL_SKILLS</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-2xl bg-slate-900/40 border-2 border-cyan-500/30 backdrop-blur-lg relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{
                borderColor: "rgba(0, 229, 255, 0.6)",
                backgroundColor: "rgba(0, 229, 255, 0.05)",
              }}
            >
              <h3 className="text-2xl font-bold text-cyan-400 capitalize mb-6 relative z-10 flex items-center gap-2 font-mono">
                <Star className="inline" size={20} />
                {category.toUpperCase()}
              </h3>
              <div className="flex flex-wrap gap-3 relative z-10">
                {items.map((item, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 bg-slate-900/60 border border-cyan-500/30 rounded-lg text-sm backdrop-blur font-mono text-gray-300"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(0, 229, 255, 0.1)",
                      borderColor: "rgba(0, 229, 255, 0.5)",
                      color: "#00e5ff",
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-4 max-w-7xl mx-auto relative">
        <motion.h2 className="text-5xl md:text-7xl font-black text-center mb-20 font-mono flex items-center justify-center gap-6">
          <GraduationCap size={60} className="text-cyan-400" />
          <span className="text-cyan-400">EDUCATION</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, idx) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ y: -15 }}
              >
                <motion.div
                  className={`p-8 rounded-2xl bg-gradient-to-br ${edu.bgGradient} border-2 ${edu.borderColor} backdrop-blur-lg shadow-2xl relative overflow-hidden h-full`}
                  whileHover={{
                    boxShadow: `0 0 40px ${
                      edu.borderColor.includes("blue")
                        ? "rgba(59, 130, 246, 0.4)"
                        : edu.borderColor.includes("purple")
                        ? "rgba(168, 85, 247, 0.4)"
                        : "rgba(34, 197, 94, 0.4)"
                    }`,
                    borderColor: edu.borderColor.includes("blue")
                      ? "rgba(59, 130, 246, 0.8)"
                      : edu.borderColor.includes("purple")
                      ? "rgba(168, 85, 247, 0.8)"
                      : "rgba(34, 197, 94, 0.8)",
                  }}
                >
                  <motion.div
                    className="mb-6 relative z-10"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon size={64} className={edu.iconColor} />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 relative z-10 text-white font-mono">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300 mb-3 relative z-10 font-medium">
                    {edu.institution}
                  </p>
                  <p
                    className={`mb-4 relative z-10 flex items-center gap-2 font-mono ${edu.accentColor}`}
                  >
                    <span
                      className={`w-2 h-2 ${edu.iconColor.replace(
                        "text-",
                        "bg-"
                      )} rounded-full`}
                    ></span>
                    {edu.duration}
                  </p>

                  {edu.cpi && (
                    <motion.div
                      className={`mt-6 pt-6 border-t ${edu.borderColor} relative z-10`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center justify-between font-mono">
                        <span className="text-gray-300">CPI</span>
                        <motion.span
                          className={`text-2xl font-bold ${edu.accentColor}`}
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          {edu.cpi}
                        </motion.span>
                      </div>
                    </motion.div>
                  )}

                  {edu.score && (
                    <motion.div
                      className={`mt-6 pt-6 border-t ${edu.borderColor} relative z-10`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center justify-between font-mono">
                        <span className="text-gray-300">SCORE</span>
                        <motion.span
                          className={`text-2xl font-bold ${edu.accentColor}`}
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          {edu.score}
                        </motion.span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 max-w-4xl mx-auto relative">
        <motion.h2 className="text-5xl md:text-7xl font-black text-center mb-20 font-mono flex items-center justify-center gap-6">
          <MessageSquare size={60} className="text-cyan-400" />
          <span className="text-cyan-400">GET_IN_TOUCH</span>
        </motion.h2>

        <motion.div
          className="p-8 md:p-12 rounded-2xl bg-slate-900/40 border-2 border-cyan-500/30 backdrop-blur-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label className="block text-cyan-400 mb-2 font-medium font-mono">
                NAME
              </label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-slate-900/60 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors backdrop-blur font-mono"
                placeholder="Your Name"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div>
              <label className="block text-cyan-400 mb-2 font-medium font-mono">
                EMAIL
              </label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-slate-900/60 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors backdrop-blur font-mono"
                placeholder="your.email@example.com"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div>
              <label className="block text-cyan-400 mb-2 font-medium font-mono">
                MESSAGE
              </label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-6 py-4 bg-slate-900/60 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors backdrop-blur resize-none font-mono"
                placeholder="Your message here..."
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={formStatus === "sending"}
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-lg font-bold text-white text-lg shadow-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed font-mono"
              whileHover={{ scale: formStatus === "sending" ? 1 : 1.02 }}
              whileTap={{ scale: formStatus === "sending" ? 1 : 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {formStatus === "sending" ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    SENDING...
                  </>
                ) : formStatus === "success" ? (
                  <>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      ✓
                    </motion.span>
                    MESSAGE_SENT!
                  </>
                ) : (
                  <>
                    {"<"} SEND_MESSAGE {"/>"}
                    <Send size={20} />
                  </>
                )}
              </span>
            </motion.button>

            {formStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-center font-medium font-mono"
              >
                // Thank you! I'll get back to you soon.
              </motion.p>
            )}
          </form>

          <div className="mt-12 pt-8 border-t border-cyan-500/30 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.a
                href="mailto:omkarrajat04@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-slate-900/60 border border-cyan-500/30 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Mail size={24} />
                </div>
                <div className="font-mono">
                  <p className="text-sm text-gray-500">EMAIL</p>
                  <p className="font-medium text-sm">omkarrajat04@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/WEBDEV-Rajat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-slate-900/60 border border-cyan-500/30 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Github size={24} />
                </div>
                <div className="font-mono">
                  <p className="text-sm text-gray-500">GITHUB</p>
                  <p className="font-medium">@WEBDEV-Rajat</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/rajat-bagaddeo-1b62ba311/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-slate-900/60 border border-cyan-500/30 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Linkedin size={24} />
                </div>
                <div className="font-mono">
                  <p className="text-sm text-gray-500">LINKEDIN</p>
                  <p className="font-medium">Rajat Bagaddeo</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-3 text-gray-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-slate-900/60 border border-cyan-500/30 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Phone size={24} />
                </div>
                <div className="font-mono">
                  <p className="text-sm text-gray-500">PHONE</p>
                  <p className="font-medium">+91 9182184609</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        className="py-16 text-center bg-slate-900/40 border-t border-cyan-500/30 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-2xl md:text-3xl text-cyan-400 font-bold mb-2 font-mono"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          {"<"} DESIGNED & CRAFTED WITH ♥ BY RAJAT BAGADDEO {"/>"}
        </motion.h3>
        <p className="text-gray-400 font-mono">
          © 2025 • ALL RIGHTS RESERVED • BUILT WITH REACT & FRAMER MOTION
        </p>
      </motion.footer>
    </div>
  );
};

export default Portfolio;
