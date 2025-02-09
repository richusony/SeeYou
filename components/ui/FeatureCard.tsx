import React from "react"

interface FeatureCardProps {
    icon: string
    title: string
    description: string
  }
  
  const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    )
  }
  
export default FeatureCard;
  