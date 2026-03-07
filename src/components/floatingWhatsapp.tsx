import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {

  const phone = "917607696315";

  const message =
    "Hello Sumit, I would like to discuss a digital solution or website project with Nexcore Technologies.";

  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        backgroundColor: "#25D366",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 20px rgba(15, 80, 39, 0.6)",
        zIndex: 9999,
        animation: "whatsappBounce 1.6s infinite"
      }}
    >
      <FaWhatsapp size={34} color="white" />
    </a>
  );
}