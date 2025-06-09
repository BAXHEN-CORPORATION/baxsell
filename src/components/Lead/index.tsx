import { Goal, GraduationCap, Star, TrendingUp } from "lucide-react";
import React from "react";

interface GoalType {
  id: number;
  icon: typeof Goal;
  text: string;
  emoji: string;
}

export default function Lead() {
  const goals: GoalType[] = [
    {
      id: 1,
      icon: Star,
      text: "Request a professional video (reel)",
      emoji: "✨",
    },
    {
      id: 2,
      icon: TrendingUp,
      text: "Scale & Automate Instagram Engagement",
      emoji: "📈",
    },
    { id: 3, icon: Star, text: "Generate leads and sales", emoji: "💰" },
    { id: 4, icon: GraduationCap, text: "Learn about 3D editing", emoji: "🎓" },
  ];

  // const [selectedGoal, setSelectedGoal] = React.useState<number | null>(null);

  const handleGoalSelect = (goalId: number) => {
    console.log(`Selected goal ID: ${goalId}`);
    // setSelectedGoal(goalId);
  };
  return (
    <div>
      {/* Ready to Scale Section */}
      <div className="text-center mt-16 h-[88vh]">
        <div className="flex justify-center mb-4">
          <Goal className="text-[var(--primary-light)]" size={32} />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 font-heading text-[var(--primary-light)]">
          Vamos planejar o seu ensaio?
        </h2>

        <p className="mb-8 font-body text-[var(--text-contrast)]">
          Preencha as informações abaixo para começarmos a criar algo especial:
        </p>

        <h3 className="text-2xl md:text-5xl font-bold mb-4 font-heading text-[var(--primary-light)]">
          Qual é o principal objetivo do seu ensaio fotográfico?
        </h3>
        <p className="font-body text-[var(--text-contrast)] mb-8">
          Por favor escolha um.
        </p>

        {/* Goal Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {goals.map((goal) => (
            <button
              key={goal.id}
              className={` bg-[var(--secondary-light)] text-[var(--text-contrast)] flex items-center p-4 rounded-lg border border-[var(--text-contrast)] hover:bg-[var(--secondary)] transition-colors text-left cursor-pointer `}
              onClick={() => handleGoalSelect(goal.id)}
            >
              <span className="mr-3 text-xl">{goal.emoji}</span>
              <span>{goal.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
