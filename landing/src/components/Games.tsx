import { Link } from "react-router-dom";
import { Play, Brain, Zap, Target, Shuffle, Calculator } from "lucide-react";

const games = [
  {
    id: "memory_matrix",
    name: "Memory Matrix",
    description: "A grid lights up briefly — remember which tiles were highlighted and reproduce the pattern.",
    domain: "Memory",
    difficulty: "Medium",
    icon: Brain,
    color: "from-violet-600 to-purple-800",
    border: "border-violet-500/30",
  },
  {
    id: "speed_match",
    name: "Speed Match",
    description: "Does the current shape match the previous one? Answer as fast as you can.",
    domain: "Speed",
    difficulty: "Easy",
    icon: Zap,
    color: "from-cyan-600 to-blue-800",
    border: "border-cyan-500/30",
  },
  {
    id: "number_crunch",
    name: "Number Crunch",
    description: "Solve arithmetic problems against the clock. How many can you get right?",
    domain: "Problem Solving",
    difficulty: "Hard",
    icon: Calculator,
    color: "from-emerald-600 to-teal-800",
    border: "border-emerald-500/30",
  },
  {
    id: "word_bubbles",
    name: "Word Bubbles",
    description: "Given a starting syllable, think of as many words as possible before time runs out.",
    domain: "Flexibility",
    difficulty: "Medium",
    icon: Shuffle,
    color: "from-pink-600 to-rose-800",
    border: "border-pink-500/30",
  },
  {
    id: "train_of_thought",
    name: "Train of Thought",
    description: "Direct trains to their matching stations without collisions. Tests attention and planning.",
    domain: "Attention",
    difficulty: "Hard",
    icon: Target,
    color: "from-amber-600 to-orange-800",
    border: "border-amber-500/30",
  },
];

const difficultyColor = { Easy: "text-green-400", Medium: "text-yellow-400", Hard: "text-red-400" };

export default function Games() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-2">Brain Games</h1>
      <p className="text-gray-400 mb-8">Train 5 core cognitive domains with science-backed games.</p>

      <div className="grid md:grid-cols-2 gap-5">
        {games.map(g => (
          <div key={g.id} className={`bg-gray-900 border ${g.border} rounded-2xl overflow-hidden hover:border-opacity-60 transition-all`}>
            <div className={`bg-gradient-to-r ${g.color} p-5`}>
              <g.icon className="w-8 h-8 text-white mb-2" />
              <h2 className="text-xl font-bold text-white">{g.name}</h2>
              <div className="flex gap-3 mt-1 text-sm">
                <span className="text-white/70">{g.domain}</span>
                <span className={difficultyColor[g.difficulty]}>{g.difficulty}</span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-400 text-sm mb-4">{g.description}</p>
              <Link
                to={`/games/${g.id}`}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2 rounded-xl transition-all w-fit"
              >
                <Play className="w-4 h-4" /> Play Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
