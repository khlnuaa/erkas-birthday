import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const PhotoAlbum = () => (
  <motion.div
    key="album"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col items-center w-full max-w-3xl mx-auto px-4"
  >
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="flex items-center gap-3 mb-10"
    >
      <Camera className="w-5 h-5 text-primary" />
      <h2 className="font-script text-3xl md:text-4xl text-primary">
        Our Little Memories
      </h2>
      <Camera className="w-5 h-5 text-primary" />
    </motion.div>

    {/* Video */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.4, duration: 0.7, type: "spring", bounce: 0.3 }}
      className="w-full"
    >
      <div className="bg-card rounded-2xl shadow-2xl p-3 md:p-4 border border-border">
        <div className="rounded-xl overflow-hidden bg-muted aspect-[4/3] mx-auto">
          <video
            src="https://pub-e2d4cdbf92de47a19dea2e3fccc07d4a.r2.dev/copy_93C15EE1-FC54-40CB-A88A-14AB13629DC2.mov"
            controls
            playsInline
            className="w-full h-full object-contain bg-black"
          />
        </div>
      </div>
    </motion.div>

    {/* Footer */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="mt-10 mb-8 font-script text-xl text-muted-foreground"
    >
      ✨ Here's to many more memories ✨
    </motion.p>
  </motion.div>
);

export default PhotoAlbum;
