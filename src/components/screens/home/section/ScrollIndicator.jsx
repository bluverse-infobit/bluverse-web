import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <div className="relative w-8 h-14 flex justify-center items-center gradient-border rounded-full">
        {/* Solid vertical line */}
        <div className="scroll-solid-line"></div>
        {/* Animated dot (on top of the line) */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-2 h-2 bg-gradient-to-br from-[#3d9cff] to-[#7f5af0] rounded-full absolute left-1/2 -translate-x-1/2"
          style={{ top: "24%" }}
        />
      </div>
    </div>
  );
}
