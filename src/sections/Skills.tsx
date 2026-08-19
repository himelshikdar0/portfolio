import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Server,
  Database,
  Terminal,
  Wifi,
  Wrench,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import { skills } from '../data';

const categories = [
  { id: 'frontend', label: 'Frontend', icon: Code, color: 'primary' },
  { id: 'backend', label: 'Backend', icon: Server, color: 'cyan' },
  { id: 'database', label: 'Database', icon: Database, color: 'blue' },
  { id: 'programming', label: 'Programming', icon: Terminal, color: 'primary' },
  { id: 'networking', label: 'Networking', icon: Wifi, color: 'cyan' },
  { id: 'tools', label: 'Tools', icon: Wrench, color: 'blue' },
] as const;

type CategoryId = (typeof categories)[number]['id'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('frontend');
  const currentSkills = skills[activeCategory];

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="My" highlight="Skills" />

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white'
                }`}
                data-cursor-hover
              >
                <cat.icon size={16} />
                {cat.label}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {currentSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-5 hover:border-primary/20 transition-all duration-300"
                data-cursor-hover
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-primary text-sm font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-primary via-cyan to-blue rounded-full"
                    style={{
                      animation: 'progress-glow 2s ease-in-out infinite',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
