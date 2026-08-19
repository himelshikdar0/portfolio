import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-dark/50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-cyan to-blue"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      {progress > 5 && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/30 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
          data-cursor-hover
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </>
  );
}
