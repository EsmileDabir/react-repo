import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <main className="hero container">
      {/* Text Content - Slides DOWN */}
      <motion.div 
        className="hero-content"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          FUEL YOUR FLIGHT, GRIP THE COURT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          “YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.”
        </motion.p>

        <motion.div 
          className="hero-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </motion.div>

        <motion.div 
          className="shopping"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </motion.div>
      </motion.div>

      {/* Shoe Image - Slides UP */}
      <motion.div 
        className="hero-image"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        
      >
        <img src="images/shoes.png" alt="hero-image" />
      </motion.div>
    </main>
  );
};

export default HeroSection;