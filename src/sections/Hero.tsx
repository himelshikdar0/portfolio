import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Download, FolderOpen, Mail, ChevronDown } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { personalInfo } from '../data';
import { useTyping } from '../hooks/useTyping';

const titles = [
  'Full Stack Developer',
  'Networking & IT Support',
  'UI/UX Enthusiast',
  'Computer Engineer',
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const typedText = useTyping(titles, 80, 40, 2000);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div style={{ y: y2 }} className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue/8 rounded-full blur-3xl animate-float-slow -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <ScrollReveal>
              <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
                Hello, I&apos;m
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                <span className="gradient-text">Himel</span>{' '}
                <span className="text-white">Shikdar</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="h-12 mb-6 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl text-cyan font-semibold typing-cursor">
                  {typedText}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-slate-400 text-lg max-w-lg mb-8 mx-auto lg:mx-0 leading-relaxed">
                {personalInfo.bio}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href={`${import.meta.env.BASE_URL}cv.pdf`}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-gradient-to-r from-primary to-cyan text-dark font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-shadow"
                  data-cursor-hover
                >
                  <Download size={18} />
                  Download CV
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 hover:border-primary/30 transition-all"
                  data-cursor-hover
                >
                  <FolderOpen size={18} />
                  View Projects
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 hover:border-primary/30 transition-all"
                  data-cursor-hover
                >
                  <Mail size={18} />
                  Contact Me
                </motion.button>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} direction="right" className="flex-shrink-0">
            <div className="relative">
              {/* Main Profile Card */}
              <motion.div
                style={{ y: y1 }}
                className="relative w-72 h-[22rem] sm:w-80 sm:h-[26rem] lg:w-[22rem] lg:h-[28rem]"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-full h-full"
                >
                  {/* Glowing Backlight */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/30 via-cyan/25 to-blue/20 blur-2xl -z-10" />
                  
                  {/* Photo Frame */}
                  <div className="w-full h-full rounded-3xl border-2 border-primary/30 overflow-hidden bg-dark-card shadow-2xl shadow-primary/10 relative group">
                    <img
                      src={`${import.meta.env.BASE_URL}images/profile1.png`}
                      alt="Himel Shikdar"
                      className="w-full h-full object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Soft subtle bottom vignette (does not cover face) */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />
                  </div>

                  {/* Animated Border Outline */}
                  <div className="absolute -inset-1.5 rounded-[1.75rem] border border-primary/20 pointer-events-none" />
                </motion.div>
              </motion.div>

              {/* Floating Badge 1: Top Right - Secondary Angle / Tech Badge */}
              <motion.div
                className="absolute -top-6 -right-6 flex items-center gap-3 p-2.5 pr-4 glass-card border border-cyan/30 shadow-xl shadow-cyan/10"
                animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                data-cursor-hover
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-cyan/40 flex-shrink-0">
                  <img
                    src={`${import.meta.env.BASE_URL}images/profile2.png`}
                    alt="Himel Shikdar"
                    className="w-full h-full object-cover object-[62%_15%]"
                  />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-xs">Himel Shikdar</p>
                  <p className="text-cyan text-[11px] font-medium">Computer Engineer</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left - Experience Badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 flex items-center gap-3 p-3 px-4 glass-card border border-primary/30 shadow-xl shadow-primary/10"
                animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                data-cursor-hover
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary text-lg font-bold">
                  🚀
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-xs">2+ Years</p>
                  <p className="text-slate-400 text-[11px]">Professional Exp.</p>
                </div>
              </motion.div>

              {/* Floating Accent Icon */}
              <motion.div
                className="absolute top-1/2 -right-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/25 to-cyan/25 backdrop-blur-md border border-primary/30 flex items-center justify-center shadow-lg"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} className="text-primary/50" />
      </motion.div>
    </section>
  );
}
