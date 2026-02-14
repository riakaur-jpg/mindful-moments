import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  onNext: () => void;
}

const questions = [
  "What was the main reason Daniel decided to take the train instead of driving?",
  "Which detail suggests that Daniel was under time pressure during his journey?",
  "What item or information did Daniel need to review before his meeting?",
  "How did Daniel respond after receiving the message from his supervisor?",
  "Which small stop or detour did Daniel make that was not directly related to work?",
];

const QuestionsScreen = ({ onNext }: Props) => {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));

  const updateAnswer = (index: number, value: string) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const allAnswered = answers.every((a) => a.trim().length > 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-8"
    >
      <div className="text-center space-y-3">
        <p className="text-sm font-light tracking-[0.2em] uppercase text-muted-foreground">
          From memory
        </p>
        <h1 className="text-4xl md:text-5xl font-light italic text-foreground">
          Recall Questions
        </h1>
      </div>

      <div className="space-y-6">
        {questions.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card rounded-2xl p-6 border border-border/50 space-y-3"
          >
            <p className="text-foreground font-light text-sm leading-relaxed">
              <span className="text-muted-foreground mr-2">{i + 1}.</span>
              {q}
            </p>
            <textarea
              value={answers[i]}
              onChange={(e) => updateAnswer(i, e.target.value)}
              placeholder="Type your answer..."
              rows={2}
              className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring resize-none"
            />
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          disabled={!allAnswered}
          className="bg-primary text-primary-foreground px-10 py-3.5 rounded-full font-light tracking-wide text-sm transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Submit
        </motion.button>
      </div>
    </motion.div>
  );
};

export default QuestionsScreen;
