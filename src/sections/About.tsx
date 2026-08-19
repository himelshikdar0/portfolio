import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Code2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import { aboutText } from '../data';
import { useCountUp } from '../hooks/useCountUp';

const stats = [
  { icon: GraduationCap, label: 'Education', value: 3, suffix: '+', displayText: 'Diploma in CE', color: 'primary' },
  { icon: Briefcase, label: 'Experience', value: 2, suffix: '+', displayText: '2+ Years', color: 'cyan' },
  { icon: Code2, label: 'Projects', value: 5, suffix: '+', displayText: '5+ Done', color: 'blue' },
  { icon: MapPin, label: 'Location', value: 0, suffix: '', displayText: 'Bangladesh', color: 'primary' },
];

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const { count, ref } = useCountUp(stat.value, 1500);
  const isNumeric = stat.value > 0;

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05, y: -4 }}
      className="glass-card p-6 text-center cursor-default"
      data-cursor-hover
    >
      <div
        className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
          stat.color === 'primary'
            ? 'bg-primary/15 text-primary'
            : stat.color === 'cyan'
            ? 'bg-cyan/15 text-cyan'
            : 'bg-blue/15 text-blue'
        }`}
      >
        <stat.icon size={24} />
      </div>
      <p className="text-white font-semibold text-sm">
        {isNumeric ? `${count}${stat.suffix}` : stat.displayText}
      </p>
      <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="About" highlight="Me" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              {aboutText.map((text, i) => (
                <p key={i} className="text-slate-300 leading-relaxed text-lg">
                  {text}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <StatCard key={i} stat={stat} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
