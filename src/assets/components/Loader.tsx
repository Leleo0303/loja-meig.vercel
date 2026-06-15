import { motion } from 'framer-motion';

export const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FFF8FB]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      onAnimationComplete={onLoadingComplete}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        {/* Aqui você coloca sua logo */}
        <div className="w-32 h-32 bg-[#F7D7E1] rounded-full flex items-center justify-center mb-4">
          <span className="font-serif text-2xl text-[#2C2C2C]">Meig</span>
        </div>
        <div className="w-16 h-1 bg-[#F7D7E1] rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#FF7EB6]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};