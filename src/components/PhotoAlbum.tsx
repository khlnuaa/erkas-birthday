import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const PhotoAlbum = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.div
      key="album"
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      className="flex flex-col items-center w-full max-w-3xl mx-auto px-4"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex items-center gap-3 mb-10"
      >
        <h2 className="font-script text-2xl text-muted-foreground">
          Last but not least, love her so much and
        </h2>
      </motion.div>

      {/* Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.4, duration: 0.7, type: "spring", bounce: 0.3 }}
        className="w-full"
      >
        <div className="bg-card rounded-2xl shadow-2xl p-3 md:p-4 border border-border relative">
          <div className="rounded-xl overflow-hidden bg-muted aspect-[4/3] mx-auto relative">
            <video
              ref={videoRef}
              src="https://pub-e2d4cdbf92de47a19dea2e3fccc07d4a.r2.dev/copy_93C15EE1-FC54-40CB-A88A-14AB13629DC2.mov"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain bg-black"
            />
            <button
              onClick={toggleMute}
              className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
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
        That little girl is still in you 🤍 No matter how much time passes or how much you grow, I hope you always keep her close—the one who laughs really loudly, gets excited over small things, and sometimes just follows her heart without thinking too much. It's okay to choose what feels right, and let your heart guide you sometimes.
      </motion.p>
    </motion.div>
  );
};

export default PhotoAlbum;
