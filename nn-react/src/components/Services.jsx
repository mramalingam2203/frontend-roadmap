import { motion } from "framer-motion";

const services = [
  {
    title: "CFD Services",
    description:
      "Deploy autonomous AI agents that monitor, analyze, and trade across markets in real-time with minimal supervision.",
    icon : "/services/finance_inverted.png"
  },
  {
    title: "CFD Products",
    description:
      "Agentic systems that transcribe, summarize, and suggest diagnostics from patient data, audio, and imaging.",
          icon : "/services/medi.png"

  },
  {
    title: "Training",
    description:
      "AI agents that fact-check, summarize news, and generate human-quality reporting across topics.",
          icon : "/services/journ.png"

  },
  {
    title: "HPC Computation",
    description:
      "Automated blueprint analysis, design suggestions, and multi-modal optimization for CAD and simulations.",
          icon : "/services/eng_inverted.png"

  },
  {
    title: "Data-Driven Simulation",
    description:
      "Smart contract monitoring, DeFi risk assessment, and agentic wallet management.",
          icon : "/services/blockchain.png"

  },
  {
    title: "Financial Modelling",
    description:
      "Train vision agents to interpret, tag, and track events across video feeds with real-time accuracy.",
          icon : "/services/finance_inverted.png"

  }
];

export default function Services() {
  return (
    <div className="w-full flex flex-col bg-dark text-white px-4 py-6 text-lg" id = "cfdservices">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-3xl text-center text-neon">Our Domains</h2>
        <p className="text-center text-gray-200 mt-2">
          {/* Optional subtitle or description can go here */}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-lg gap-10">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-gray-900 p-5 rounded-xl shadow-md hover:shadow-neon text-lg transition w-full"
          >
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-11 h-11 object-contain"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-semibold text-neon text-lg">{service.title}</h3>
                <p className="text-lg text-gray-300 mt-1">{service.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
