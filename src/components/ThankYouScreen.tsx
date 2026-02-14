import { motion } from "framer-motion";

const ThankYouScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center space-y-8"
    >
      <div className="space-y-3">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
          className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto"
        >
          <svg
            className="w-7 h-7 text-accent-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-light italic text-foreground">
          Thank You
        </h1>
      </div>

      <div className="bg-card rounded-2xl p-8 md:p-10 text-left border border-border/50 space-y-5">
        <p className="text-foreground/85 font-light leading-relaxed">
          You've just completed a short activity that looks at how your memory
          and attention are working right now.
        </p>
        <p className="text-muted-foreground font-light leading-relaxed text-sm">
          There's no "good" or "bad" result here — memory can shift based on
          stress, emotions, rest, and focus. If something feels easy, difficult,
          or surprising, that information itself is useful. It helps you notice
          how your mind responds in different moments.
        </p>
        <p className="text-muted-foreground font-light leading-relaxed text-sm">
          If you'd like support in understanding these patterns or strengthening
          memory and focus, guidance is available. You don't have to figure it
          out alone.
        </p>
      </div>
    </motion.div>
  );
};

export default ThankYouScreen;
