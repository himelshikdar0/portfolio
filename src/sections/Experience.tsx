import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import { experiences } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Work" highlight="Experience" />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Central Gradient Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-cyan to-blue hidden sm:block -translate-x-1/2" />

          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.id} delay={i * 0.2}>
              <div
                className={`relative flex flex-col sm:flex-row gap-6 mb-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Center Node */}
                <div className="hidden sm:flex absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-dark-card border-2 border-primary/40 items-center justify-center z-10 shadow-lg shadow-primary/20">
                  {exp.current ? (
                    <Sparkles size={20} className="text-primary animate-pulse" />
                  ) : (
                    <Briefcase size={20} className="text-cyan" />
                  )}
                </div>

                {/* Card Container */}
                <div
                  className={`sm:w-1/2 ${
                    i % 2 === 0
                      ? 'sm:pr-10 sm:text-left md:text-right'
                      : 'sm:pl-10 sm:text-left'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className={`glass-card p-6 sm:p-7 relative overflow-hidden transition-all duration-300 ${
                      exp.current
                        ? 'border-primary/40 shadow-xl shadow-primary/10'
                        : 'hover:border-cyan/30'
                    }`}
                    data-cursor-hover
                  >
                    {exp.current && (
                      <div className="absolute top-0 right-0">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold bg-primary/20 text-primary border-b border-l border-primary/30 rounded-bl-xl uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                          Current Role
                        </span>
                      </div>
                    )}

                    <div
                      className={`flex flex-wrap items-center gap-3 text-sm font-medium mb-3 ${
                        i % 2 === 0 ? 'md:justify-end' : 'justify-start'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-primary text-xs font-semibold bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        <Calendar size={13} />
                        {exp.period}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>

                    <p className="text-cyan font-semibold text-sm mb-2">
                      {exp.company}
                    </p>

                    {exp.location && (
                      <div
                        className={`flex items-center gap-1.5 text-slate-400 text-xs mb-3.5 ${
                          i % 2 === 0 ? 'md:justify-end' : 'justify-start'
                        }`}
                      >
                        <MapPin size={13} className="text-primary flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    )}

                    <p className="text-slate-300 text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-1.5 ${
                        i % 2 === 0 ? 'md:justify-end' : 'justify-start'
                      }`}
                    >
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs font-medium bg-white/5 text-slate-300 rounded-lg border border-white/10 hover:border-primary/30 hover:text-primary transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty Half on Desktop for Alternating Balance */}
                <div className="sm:w-1/2 hidden md:block" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
