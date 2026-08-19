import { motion } from 'framer-motion';
import {
  Code,
  Palette,
  Database,
  Network,
  Monitor,
  Settings,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import { services } from '../data';

const iconMap: Record<string, React.ElementType> = {
  Code,
  Palette,
  Database,
  Network,
  Monitor,
  Settings,
};

const colors = ['primary', 'cyan', 'blue', 'primary', 'cyan', 'blue'];

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="My" highlight="Services" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Code;
            const color = colors[i % colors.length];
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card-hover p-8 text-center group h-full"
                  data-cursor-hover
                >
                  <div
                    className={`w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      color === 'primary'
                        ? 'bg-primary/15 text-primary group-hover:glow-green'
                        : color === 'cyan'
                        ? 'bg-cyan/15 text-cyan group-hover:glow-cyan'
                        : 'bg-blue/15 text-blue group-hover:glow-blue'
                    }`}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
