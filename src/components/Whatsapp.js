export default function Whatsapp() {
  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      <a
        href="https://wa.me/03039255409" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        style={{
            backgroundColor: "#25D366",
            color: "white",
            fontSize: "32px", // Bigger icon
            borderRadius: "50%",
            width: "70px", // Increased width
            height: "70px", // Increased height
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
        }}
        >
        <i className="fab fa-whatsapp"></i>
        </a>

    </div>
  );
}
