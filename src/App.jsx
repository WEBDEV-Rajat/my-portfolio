import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Code,
  Zap,
  MessageSquare,
  Sparkles,
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
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
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
      gradient: "from-blue-400 via-indigo-500 to-purple-600",
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
      gradient: "from-purple-400 via-pink-500 to-rose-600",
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
      color: "from-blue-500 to-cyan-500",
    },
    {
      degree: "Intermediate (12th)",
      institution: "FIITJEE Junior College, Hyderabad",
      duration: "2020 - 2022",
      score: "95.1%",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
    },
    {
      degree: "High School (10th)",
      institution: "Slate-The-School, Hyderabad",
      duration: "2019 - 2020",
      cpi: "10",
      icon: Award,
      color: "from-green-500 to-emerald-500",
    },
  ];

const BackgroundGradient = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Deep Animated Mesh Gradient */}
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 60%)",
            "radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 50% 20%, rgba(6, 182, 212, 0.2) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Neon Grid Parallax */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Mouse-Reactive Glowing Orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: i % 2 ? "radial-gradient(circle, rgba(236, 72, 153, 0.35), transparent 70%)" : "radial-gradient(circle, rgba(6, 182, 212, 0.35), transparent 70%)",
            left: `${10 + i * 15}%`,
            top: `${10 + i * 10}%`,
            x: mousePosition.x ? (mousePosition.x - window.innerWidth / 2) * 0.05 * (i % 2 ? 1 : -1) : 0,
            y: mousePosition.y ? (mousePosition.y - window.innerHeight / 2) * 0.05 * (i % 3 ? 1 : -1) : 0,
          }}
          animate={{
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Floating Sparks & Shapes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute text-yellow-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -200, 0],
            opacity: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          <Sparkles size={20 + Math.random() * 20} />
        </motion.div>
      ))}
    </div>
  );
};

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <BackgroundGradient />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-lg border-b border-purple-500/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">RB</span>
          </motion.a>
          <div className="hidden md:flex items-center gap-8">
            {["Projects", "Skills", "Education", "Contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white/80 hover:text-white font-medium transition-colors relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100"
                  layoutId="navbar-indicator"
                />
              </motion.button>
            ))}
          </div>

          <motion.button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-purple-500/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-4 p-6">
              {["Projects", "Skills", "Education", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white/80 hover:text-white font-medium transition-colors text-left"
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

      <motion.section
        className="min-h-screen flex items-center justify-center px-4 py-12 relative pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="text-center max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1,
            }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 relative">
              <motion.span
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                RAJAT BAGADDEO
              </motion.span>

              {[...Array(6)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute text-yellow-400"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: i % 2 === 0 ? "-10%" : "110%",
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <Sparkles size={24} />
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-3xl md:text-5xl font-bold mb-4">
              <motion.span
                className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent inline-block"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                ⚡ FULL STACK DEVELOPER ⚡
              </motion.span>
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              Electrical Engineering
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-4">
              MNNIT Allahabad
            </p>
            <p className="text-lg md:text-xl text-gray-300 italic mb-12">
              "Crafting Digital Experiences with Code & Creativity"
            </p>
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
            className="font-bold rounded-full px-14 py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-2xl relative group overflow-hidden cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100"
              style={{
                backgroundSize: "200% 200%",
              }}
            />
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{
                x: "100%",
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              }}
            />
            <span className="relative z-10 text-white text-lg flex items-center gap-2 justify-center">
              Download My Resume
            </span>
          </motion.button>
        </div>
      </motion.section>

      <section id="projects" className="py-32 px-4 max-w-7xl mx-auto relative">
        <motion.h2 className="text-5xl md:text-7xl font-black text-center mr-25 mb-20 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent flex items-center justify-center gap-6">
          <Code size={60} />
          FEATURED PROJECTS
        </motion.h2>

        <div className="flex flex-col gap-20 ml-20 mr-20">
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
                className={`relative rounded-3xl p-8 bg-gradient-to-br ${project.gradient} border border-white/10 backdrop-blur-lg shadow-2xl overflow-hidden`}
                whileHover={{
                  borderColor: "rgba(255, 255, 255, 0.3)",
                }}
              >
                <img src={project.image} alt={project.name} className="mb-5 rounded-2xl"/>
                <h3 className="text-3xl font-bold mb-2 relative z-10">
                  {project.name}
                </h3>
                <p className="text-white/80 mb-2 relative z-10">
                  {project.tagline}
                </p>
                <span className="text-sm text-white/60 relative z-10">
                  {project.date}
                </span>

                <div className="flex flex-wrap gap-2 my-6 relative z-10">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur border border-white/20"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <ul className="space-y-3 mt-6 relative z-10">
                  {project.features.map((f, i) => (
                    <motion.li
                      key={i}
                      className="text-white/90 flex items-start"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <motion.span
                        className="text-white font-bold mr-3"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      >
                        →
                      </motion.span>
                      {f}
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 px-6 py-3 bg-white/10 rounded-full font-semibold block relative z-10 text-center border-2 border-white"
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  <span className="text-white">View on GitHub</span>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="skills" className="py-32 px-4 max-w-7xl mx-auto relative">
        <motion.h2 className="text-5xl md:text-7xl font-black text-center mr-25 mb-20 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent flex items-center justify-center gap-6">
          <Zap size={60} />
          TECHNICAL SKILLS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 backdrop-blur-lg relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{
                borderColor: "rgba(168, 85, 247, 0.6)",
                backgroundColor: "rgba(168, 85, 247, 0.05)",
              }}
            >
              <h3 className="text-2xl font-bold text-purple-400 capitalize mb-6 relative z-10 flex items-center gap-2">
                <Star className="inline" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-3 relative z-10">
                {items.map((item, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 bg-white/5 border border-white/20 rounded-full text-sm backdrop-blur"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderColor: "rgba(168, 85, 247, 0.5)",
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

      <section
        id="education"
        className="py-32 px-4 max-w-7xl mx-auto relative"
      >
        <motion.h2 className="text-5xl md:text-7xl font-black text-center mr-25 mb-14 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent flex items-center justify-center gap-6">
          <GraduationCap size={60} />
          EDUCATION
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, idx) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 100, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ y: -15, rotateY: 5 }}
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className={`p-8 rounded-3xl bg-gradient-to-br ${edu.color} border border-white/20 backdrop-blur-lg shadow-2xl relative overflow-hidden h-full`}
                  whileHover={{
                    boxShadow: "0 0 50px rgba(168, 85, 247, 0.5)",
                    borderColor: "rgba(255, 255, 255, 0.4)",
                  }}
                >
                  <motion.div
                    className="mb-6 relative z-10"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon size={64} className="text-white/90 drop-shadow-2xl" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 relative z-10">
                    {edu.degree}
                  </h3>
                  <p className="text-white/90 mb-3 relative z-10 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-white/70 mb-4 relative z-10 flex items-center gap-2">
                    <span className="w-2 h-2 bg-white/70 rounded-full"></span>
                    {edu.duration}
                  </p>

                  {edu.cpi && (
                    <motion.div
                      className="mt-6 pt-6 border-t border-white/20 relative z-10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">CPI</span>
                        <motion.span
                          className="text-2xl font-bold text-white"
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
                      className="mt-6 pt-6 border-t border-white/20 relative z-10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">Score</span>
                        <motion.span
                          className="text-2xl font-bold text-white"
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

      <section id="contact" className="py-32 px-4 max-w-4xl mx-auto relative">
        <motion.h2 className="text-5xl md:text-7xl font-black text-center mr-25 mb-14 bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent flex items-center justify-center gap-6">
          <MessageSquare size={60} />
          GET IN TOUCH
        </motion.h2>

        <motion.div
          className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 backdrop-blur-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label className="block text-white/80 mb-2 font-medium">
                Name
              </label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors backdrop-blur"
                placeholder="Your Name"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 font-medium">
                Email
              </label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors backdrop-blur"
                placeholder="your.email@example.com"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 font-medium">
                Message
              </label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors backdrop-blur resize-none"
                placeholder="Your message here..."
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={formStatus === "sending"}
              className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-xl font-bold text-white text-lg shadow-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: formStatus === "sending" ? 1 : 1.02 }}
              whileTap={{ scale: formStatus === "sending" ? 1 : 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100"
                style={{ backgroundSize: "200% 200%" }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                {formStatus === "sending" ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
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
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </span>
            </motion.button>

            {formStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-center font-medium"
              >
                Thank you! I'll get back to you soon.
              </motion.p>
            )}
          </form>

          <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.a
                href="mailto:rajatbagaddeo@example.com"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <p className="font-medium">omkarrajat04@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/WEBDEV-Rajat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60">GitHub</p>
                  <p className="font-medium">@WEBDEV-Rajat</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/rajat-bagaddeo-1b62ba311/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60">LinkedIn</p>
                  <p className="font-medium">Rajat Bagaddeo</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-3 text-white/80 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60">Phone</p>
                  <p className="font-medium">+91 9182184609</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.footer
        className="py-16 text-center bg-gradient-to-t from-purple-900/20 via-black/50 to-transparent border-t border-purple-500/30 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(168, 85, 247, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <motion.h3
          className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text font-bold mb-2"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          Designed & Crafted with ♥ by Rajat Bagaddeo
        </motion.h3>
        <p className="text-gray-400">
          © 2025 • All Rights Reserved • Built with React & Framer Motion
        </p>
      </motion.footer>
    </div>
  );
};

export default Portfolio;