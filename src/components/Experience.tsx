"use client";

import { motion } from "framer-motion";
import { Briefcase, Users } from "lucide-react";

const workExperience = [
    {
    company: "PT Binary Cipta Solusindo",
    role: "Front End Developer",
    period: "Agustus 2024 - Juni 2025",
    desc: [
      "Melakukan development front end dengan menggunakan JavaScript dan implementasi komponen pada Laravel.",
      "Melakukan scraping data yang dibutuhkan terkait bisnis."
    ]
  },
  {
    company: "PT. Teknologi Indonesia Ciptahardya",
    role: "UI Designer",
    period: "Februari 2025 - Juni 2025",
    desc: [
      "Merancang antarmuka pengguna yang menarik, intuitif, dan mudah digunakan.",
      "Bekerja sama dengan tim produk dan pengembang untuk memastikan setiap elemen desain selaras dengan kebutuhan pengguna."
    ]
  },
  {
    company: "Samsung Store (Pare)",
    role: "Produk Marketing",
    period: "Januari 2022 - April 2022",
    desc: [
      "Bertanggung jawab membantu Staf Penjualan dalam operasional toko.",
      "Melakukan promosi penjualan produk secara langsung kepada konsumen."
    ]
  },
  {
    company: "indoweb.id",
    role: "Digital Marketing & Front End",
    period: "Januari 2020 - April 2020",
    desc: [
      "Berkontribusi dalam promosi penjualan produk melalui metode digital marketing.",
      "Mengelola media sosial dan membuat konten promosi."
    ]
  }
];

const orgExperience = [
  {
    org: "Himpunan Mahasiswa Teknologi Informasi (Politeknik Negeri Malang)",
    role: "Steering Committee",
    period: "Februari 2024 - Februari 2025",
    desc: [
      "Berperan sebagai Pengawas pada Program Kerja Semarak Pekan Olahraga Teknologi Informasi dan Agenda Olahraga.",
      "Berperan sebagai Pengawas pada Program Kerja Seminar Nasional Tahun 2024."
    ]
  },
  {
    org: "Himpunan Mahasiswa Teknologi Informasi (Politenik Negeri Malang)",
    role: "Organizing Committee",
    period: "Desember 2022 - Januari 2024",
    desc: [
      "Berkontribusi sebagai Ketua Pelaksana pada Program Kerja Semarak Pekan Olahraga Teknologi Informasi.",
      "Berkontribusi sebagai Koordinator Lapangan dan Sie Acara pada Program Kerja Seminar Nasional Tahun 2023."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[var(--color-primary)] relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-main)] mb-4">
            Pengalaman
          </h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto mb-6"></div>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Perjalanan karir profesional dan kontribusi saya dalam organisasi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[var(--color-accent)]/20 rounded-lg text-[var(--color-accent)]">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-main)]">Pengalaman Kerja</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              {workExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-6 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--color-primary)] bg-[var(--color-secondary)] text-[var(--color-accent)] shadow shrink-0 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors z-10 mt-1">
                    <div className="w-2.5 h-2.5 bg-current rounded-full" />
                  </div>
                  
                  <div className="flex-1 p-6 rounded-2xl bg-[var(--color-secondary)] border border-slate-800 hover:border-[var(--color-accent)]/50 transition-colors">
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-2 gap-2">
                      <h4 className="font-bold text-lg text-[var(--color-text-main)]">{exp.role}</h4>
                      <span className="text-xs font-medium text-[var(--color-accent)] bg-blue-500/10 px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-[var(--color-text-main)] font-medium mb-4 text-sm">{exp.company}</div>
                    <ul className="list-disc list-outside ml-4 text-sm text-[var(--color-text-muted)] space-y-2">
                      {exp.desc.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Org Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-main)]">Pengalaman Organisasi</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              {orgExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-6 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--color-primary)] bg-[var(--color-secondary)] text-purple-400 shadow shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-colors z-10 mt-1">
                    <div className="w-2.5 h-2.5 bg-current rounded-full" />
                  </div>
                  
                  <div className="flex-1 p-6 rounded-2xl bg-[var(--color-secondary)] border border-slate-800 hover:border-purple-500/50 transition-colors">
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-2 gap-2">
                      <h4 className="font-bold text-lg text-[var(--color-text-main)]">{exp.role}</h4>
                      <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-[var(--color-text-main)] font-medium mb-4 text-sm leading-tight">{exp.org}</div>
                    <ul className="list-disc list-outside ml-4 text-sm text-[var(--color-text-muted)] space-y-2">
                      {exp.desc.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
