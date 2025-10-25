import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scale, Shield } from "lucide-react";

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="learn" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Navigate Indian Legal Landscapes with Confidence.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We transform complex legal jargon into clear, understandable
              content that empowers you to make informed decisions about your
              rights and responsibilities.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start mb-6">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <Scale className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                Property Laws Explained
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                50% of property laws explained with real-world context, helping
                you understand ownership, transactions, and your legal
                protections.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start mb-6">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <Shield className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                Bail Procedures Demystified
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                50% of bail procedures demystified for everyday citizens,
                ensuring you know your rights when you need them most.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
