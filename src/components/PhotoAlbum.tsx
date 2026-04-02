import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const photos = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  src: `https://picsum.photos/seed/bday${i}/400/400`,
  rotation: (Math.random() - 0.5) * 20,     // –10° to +10°
  offsetX: (Math.random() - 0.5) * 16,      // slight horizontal jitter
  offsetY: (Math.random() - 0.5) * 12,      // slight vertical jitter
}));

const PhotoAlbum = () => (
  <motion.div
    key="album"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col items-center w-full max-w-5xl mx-auto px-4"
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
        Our Little Album
      </h2>
      <Camera className="w-5 h-5 text-primary" />
    </motion.div>

    {/* Polaroid grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
      {photos.map((photo, i) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, scale: 0.6, rotate: photo.rotation * 2 }}
          animate={{ opacity: 1, scale: 1, rotate: photo.rotation }}
          transition={{
            delay: 0.3 + i * 0.08,
            duration: 0.5,
            type: "spring",
            bounce: 0.35,
          }}
          whileHover={{ scale: 1.12, rotate: 0, zIndex: 30 }}
          className="relative cursor-pointer"
          style={{
            transform: `translate(${photo.offsetX}px, ${photo.offsetY}px)`,
          }}
        >
          <div className="bg-card rounded-sm shadow-lg p-2 pb-8 border border-border hover:shadow-2xl transition-shadow duration-300">
            <div className="aspect-square overflow-hidden rounded-sm bg-muted">
              <img
                src={photo.src}
                alt={`Memory ${photo.id + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Footer */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5 }}
      className="mt-12 mb-8 font-script text-xl text-muted-foreground"
    >
      ✨ Here's to many more memories ✨
    </motion.p>
  </motion.div>
);

export default PhotoAlbum;
