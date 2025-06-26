import React from "react";

const WhatsappButton = ({
  phone = "5492966312854",
  message = "Hola, quiero más información sobre sus productos.",
  className = "",
  style = {},
  iconSize = 40,
  ...props
}) => {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "fixed bottom-8 right-8 p-4 z-50 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center " +
        className
      }
      style={style}
      aria-label="WhatsApp"
      {...props}
    >
      <img
        src="/assets/common/whatsapp.png"
        alt="WhatsApp"
        width={iconSize}
        height={iconSize}
        className="object-contain"
        draggable={false}
      />
    </a>
  );
};

export default WhatsappButton;
