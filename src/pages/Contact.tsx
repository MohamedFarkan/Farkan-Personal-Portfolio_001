import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";
import emailjs from "@emailjs/browser";
import { error } from "console";
import Swal from "sweetalert2";

const Contact = () => {
  // const form = useRef<HTMLFormElement>(null);

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // // const handleSubmit = (e: React.FormEvent) => {
  // //   e.preventDefault();
  // //   console.log("Form submitted:", formData);
  // //   // Here you would integrate with EmailJS or your backend
  // // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!form.current) return;

  //   emailjs
  //     .sendForm(
  //       "YOUR_SERVICE_ID", // replace with your EmailJS service ID
  //       "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
  //       form.current,
  //       {
  //         publicKey: "YOUR_PUBLIC_KEY", // replace with your EmailJS public key
  //       }
  //     )
  //     .then(() => {
  //       alert("Message sent successfully!");
  //       setFormData({ name: "", email: "", message: "" });
  //     })
  //     .catch((error) => {
  //       console.error("Email sending failed:", error);
  //       alert("Oops! Something went wrong.");
  //     });
  // };

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  //https://script.google.com/macros/s/AKfycbxcOQ9J7faSN7aNV0TUA9qPSOEEvC3YpMpuK1xLKWju-3eL5YZtsSKf0__6aVGmDehNTw/exec

  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycbw_hy1BQFdLIoEKasA5Q_8w0GKRZDmuWCEqpEAd1TSVOLBlE7hLc6k7mHEbF0-5XCSVvA/exec";
    Swal.fire({
      title: "Sending...",
      text: "Please wait while your message is being sent.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${e.target.name.value}&Email=${e.target.email.value}&Message=${e.target.message.value}`,
    })
      .then((res) => res.text())
      .then((data) => {
        //alert(data);

        Swal.fire({
          title: "Message sent",
          text: "Thanks for reaching out!",
          icon: "success",
        });
        e.target.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-16 relative overflow-hidden"
      id="contact">
      <ParticleBackground />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-16 pb-3 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          Got something in mind? I'm just a message away{" "}
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, creative
                projects, or just having a friendly chat about technology and
                design.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:mohamedfarkan7@gmail.com"
                    className="text-muted-foreground">
                    mohamedfarkan7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+919025553486" className="text-muted-foreground">
                    +91 9025553486
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/MohamedFarkan"
                className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-accent-cyan hover:text-white transition-colors duration-300"
                target="blank">
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-accent-cyan hover:text-white transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="gradient-blur rounded-lg p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  // value={formData.name}
                  // onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  // value={formData.email}
                  // onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  // value={formData.message}
                  // onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan transition-colors resize-none"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
