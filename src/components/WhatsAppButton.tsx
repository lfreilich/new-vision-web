import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const WhatsAppButton = () => {
  const { t } = useLanguage();
  
  // WhatsApp number without + or spaces: 972587163405
  const whatsappNumber = "972587163405";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 end-6 z-50 group"
      aria-label={t.contact.whatsapp}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring effect */}
      <motion.div
        className="absolute inset-0 bg-[#25D366] rounded-full"
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Main button */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute end-16 top-1/2 -translate-y-1/2 bg-foreground text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none shadow-xl transition-opacity duration-200">
        {t.contact.whatsapp}
        <div className="absolute end-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-foreground rotate-45" />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
