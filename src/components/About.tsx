"use client";

import { motion } from "framer-motion";
import { Code, Server, Smartphone, Layout } from "lucide-react";

const features = [
  {
    icon: <Code className="text-[var(--color-accent)]" size={32} />,
    title: "Frontend Development",
    desc: "Membangun UI/UX yang interaktif dan responsif menggunakan React & Next.js.",
  },
  {
    icon: <Server className="text-[var(--color-accent)]" size={32} />,
    title: "Backend Integration",
    desc: "Menghubungkan aplikasi dengan API yang andal dan database yang optimal.",
  },
  {
    icon: <Smartphone className="text-[var(--color-accent)]" size={32} />,
    title: "Responsive Design",
    desc: "Memastikan aplikasi berjalan sempurna di berbagai ukuran layar.",
  },
  {
    icon: <Layout className="text-[var(--color-accent)]" size={32} />,
    title: "UI/UX Design",
    desc: "Merancang antarmuka pengguna yang intuitif, estetis, dan berpusat pada pengguna.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[var(--color-primary)] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-main)] mb-6">
              Tentang Saya
            </h2>
            <div className="w-20 h-1 bg-[var(--color-accent)] mb-8"></div>
            
            <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-6">
              Saya adalah seorang mahasiswa jurusan Teknologi Informasi yang sangat antusias dengan dunia pengembangan perangkat lunak. Fokus utama saya adalah menciptakan aplikasi web yang tidak hanya berfungsi dengan baik, tetapi juga memberikan pengalaman visual yang memukau.
            </p>
            <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
              Saat ini, saya sedang mendalami ekosistem JavaScript modern (React/Next.js) dan mengeksplorasi cara-cara inovatif untuk menyelesaikan masalah melalui kode. Saya percaya bahwa desain yang baik adalah kombinasi antara estetika dan fungsionalitas.
            </p>
          </motion.div>

          {/* Right: Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl bg-[var(--color-secondary)] border border-slate-800 hover:border-[var(--color-accent)]/50 transition-colors`}
              >
                <div className="mb-4 bg-slate-800/50 w-16 h-16 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
