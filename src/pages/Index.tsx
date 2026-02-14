import { useState, useCallback } from "react";
import InstructionsScreen from "@/components/InstructionsScreen";
import PassageScreen from "@/components/PassageScreen";
import QuestionsScreen from "@/components/QuestionsScreen";
import ThankYouScreen from "@/components/ThankYouScreen";

const Index = () => {
  const [screen, setScreen] = useState(0);
  const [passageVisited, setPassageVisited] = useState(false);

  const goToPassage = useCallback(() => {
    setScreen(1);
    setPassageVisited(true);
  }, []);

  const goToQuestions = useCallback(() => {
    setScreen(2);
  }, []);

  const goToThankYou = useCallback(() => {
    setScreen(3);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {screen === 0 && <InstructionsScreen onNext={goToPassage} />}
        {screen === 1 && <PassageScreen onNext={goToQuestions} />}
        {screen === 2 && <QuestionsScreen onNext={goToThankYou} />}
        {screen === 3 && <ThankYouScreen />}
      </div>
    </div>
  );
};

export default Index;
