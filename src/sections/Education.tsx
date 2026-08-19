import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import { education } from '../data';

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="" highlight="Education" />

        <div className="max-w-2xl mx-auto">
          {education.map((edu, i) => (
            <ScrollReveal key={i} delay={i * 0.2}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass-card p-8 relative overflow-hidden"
                data-cursor-hover
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan font-medium mb-3">{edu.institution}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {edu.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Calendar size={14} className="text-primary" />
                        Graduated: {edu.year}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Award size={14} className="text-primary" />
                        CGPA: {edu.cgpa}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
