import { motion } from "framer-motion";

interface Props {
  onNext: () => void;
}

const PassageScreen = ({ onNext }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center space-y-8"
    >
      <div className="space-y-3">
        <p className="text-sm font-light tracking-[0.2em] uppercase text-muted-foreground">
          Read carefully
        </p>
        <h1 className="text-4xl md:text-5xl font-light italic text-foreground">
          The Passage
        </h1>
      </div>

      <div className="bg-card rounded-2xl p-8 md:p-10 text-left border border-border/50">
        <p className="text-foreground/85 font-light leading-[1.9] text-[1.05rem]" style={{ fontFamily: "var(--font-display)" }}>
          Just before dawn on a Tuesday morning, Daniel boarded a delayed
          intercity train after receiving an unexpected message from his
          supervisor. Although the meeting was scheduled for later that week, he
          chose to travel a day early to prepare. While waiting on the platform,
          he noticed a vendor selling coffee near the third carriage marker and
          overheard a quiet disagreement between two travelers about a missing
          backpack. Once seated, Daniel reviewed printed documents, made notes on
          his tablet, and briefly called a colleague to clarify recent budget
          changes. He arrived at his destination at 2:30 p.m., feeling exhausted
          but relieved. Instead of going straight to the hotel, he stopped at a
          bookstore to buy a notebook he had forgotten, intending to organize his
          thoughts before the meeting.
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onNext}
        className="bg-primary text-primary-foreground px-10 py-3.5 rounded-full font-light tracking-wide text-sm transition-colors hover:opacity-90"
      >
        Continue to Questions
      </motion.button>
    </motion.div>
  );
};

export default PassageScreen;
