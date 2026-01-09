import pythonLogo from "@/assets/python-logo.png";

const CreditCard = () => {
  return (
    <div className="relative float">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl opacity-50" />
      
      {/* Python logo */}
      <div className="relative transform hover:scale-105 transition-transform duration-500">
        <img 
          src={pythonLogo} 
          alt="Python Logo" 
          className="w-80 h-auto drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default CreditCard;
