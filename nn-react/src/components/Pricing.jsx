import React from "react";
import "./Pricing.css";

const plans = [
  {
    title: "Starter",
    price: "$29",
    frequency: "per month",
    features: [
      "Access to 2 AI Agents",
      "Standard APIs (NLP, Vision)",
      "Community Support",
      "Email Summarizer & Inbox Agent",
    ],
    highlight: false,
  },
  {
    title: "Professional",
    price: "$99",
    frequency: "per month",
    features: [
      "Up to 10 AI Agents",
      "Multi-agent workflows (RAG, Planner)",
      "Priority Support",
      "ComplianceCopilot + SmartInbox + DiagnoSaaS",
    ],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    frequency: "tailored pricing",
    features: [
      "Unlimited AI Agents",
      "On-premise or Private Cloud",
      "Fine-tuned AI Models",
      "Dedicated Solutions Engineer & SLA",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <h2 className="pricing-title">💼 Pricing Plans</h2>
      <div className="pricing-cards">
        {plans.map((plan, idx) => (
          <div
            className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
            key={idx}
          >
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-price">
              {plan.price} <span className="plan-frequency">/ {plan.frequency}</span>
            </p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>✔️ {feature}</li>
              ))}
            </ul>
            <button className="btn-select">Select Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
