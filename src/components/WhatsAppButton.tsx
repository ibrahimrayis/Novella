
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

const WhatsAppButton = ({
  phoneNumber,
  message = "Hello, I'm interested in learning more about your services.",
  className
}: WhatsAppButtonProps) => {
  // Format the phone number to remove any non-numeric characters
  const formattedPhone = phoneNumber.replace(/\D/g, "");
  
  // Construct the WhatsApp URL with the phone number and optional message
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 animate-in fade-in-50",
        className
      )}
      aria-label="Contact us on WhatsApp"
    >
      <Phone className="w-6 h-6 text-white" />
      <span className="sr-only">Contact us on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
