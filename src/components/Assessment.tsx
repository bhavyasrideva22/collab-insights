import { useState } from "react";
import AssessmentIntro from "./AssessmentIntro";
import AssessmentProgress from "./AssessmentProgress";
import QuestionCard, { Question } from "./QuestionCard";
import AssessmentResults from "./AssessmentResults";
import { questions, assessmentSections, getQuestionsBySection } from "@/data/assessmentQuestions";

interface Answer {
  questionId: string;
  answer: number;
  section: string;
  trait: string;
}

interface AssessmentScore {
  section: string;
  score: number;
  maxScore: number;
  insights: string[];
}

type AssessmentPhase = 'intro' | 'assessment' | 'results';

const Assessment = () => {
  const [phase, setPhase] = useState<AssessmentPhase>('intro');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  
  const currentSection = assessmentSections[currentSectionIndex];
  const currentSectionQuestions = getQuestionsBySection(currentSection.id);
  const currentQuestion = currentSectionQuestions[currentQuestionIndex];

  const handleStart = () => {
    setPhase('assessment');
  };

  const handleAnswer = (questionId: string, answer: number) => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    setAnswers(prev => {
      const existing = prev.find(a => a.questionId === questionId);
      if (existing) {
        return prev.map(a => 
          a.questionId === questionId 
            ? { ...a, answer }
            : a
        );
      }
      return [...prev, {
        questionId,
        answer,
        section: question.section,
        trait: question.trait
      }];
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentSectionQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (currentSectionIndex < assessmentSections.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
      setCurrentQuestionIndex(0);
    } else {
      // Assessment complete
      setPhase('results');
    }
  };

  const calculateScores = (): AssessmentScore[] => {
    const sectionScores: AssessmentScore[] = [];
    
    for (const section of assessmentSections) {
      const sectionQuestions = getQuestionsBySection(section.id);
      const sectionAnswers = answers.filter(a => 
        sectionQuestions.some(q => q.id === a.questionId)
      );
      
      const score = sectionAnswers.reduce((sum, answer) => {
        // For multiple choice, use the answer value directly
        // For likert (1-7), normalize to 0-5 scale: (answer - 1) / 6 * 5
        // For slider (0-10), normalize to 0-5 scale: answer / 2
        const question = questions.find(q => q.id === answer.questionId);
        if (!question) return sum;
        
        let normalizedScore = answer.answer;
        if (question.type === 'likert') {
          normalizedScore = ((answer.answer - 1) / 6) * 5;
        } else if (question.type === 'slider') {
          normalizedScore = (answer.answer / (question.max || 10)) * 5;
        } else if (question.type === 'multiple-choice') {
          // Multiple choice answers already have values 1-5
          normalizedScore = answer.answer;
        }
        
        return sum + normalizedScore;
      }, 0);
      
      const maxScore = sectionQuestions.length * 5; // Max 5 points per question
      
      // Generate insights based on score
      const percentage = (score / maxScore) * 100;
      const insights = generateInsights(section.name, percentage);
      
      sectionScores.push({
        section: section.name,
        score: Math.round(score),
        maxScore,
        insights
      });
    }
    
    return sectionScores;
  };

  const generateInsights = (sectionName: string, percentage: number): string[] => {
    const insights: string[] = [];
    
    if (sectionName.includes("Communication")) {
      if (percentage >= 80) {
        insights.push("Excellent clarity in expressing ideas");
        insights.push("Strong active listening skills");
      } else if (percentage >= 60) {
        insights.push("Good communication foundation");
        insights.push("Room for improvement in tone awareness");
      } else {
        insights.push("Focus on simplifying complex ideas");
        insights.push("Practice active listening techniques");
      }
    } else if (sectionName.includes("Collaboration")) {
      if (percentage >= 80) {
        insights.push("Natural team player and facilitator");
        insights.push("Excellent conflict resolution skills");
      } else if (percentage >= 60) {
        insights.push("Solid collaborative approach");
        insights.push("Consider being more proactive in team discussions");
      } else {
        insights.push("Develop trust-building strategies");
        insights.push("Practice constructive disagreement");
      }
    } else if (sectionName.includes("Contextual")) {
      if (percentage >= 80) {
        insights.push("Highly adaptable across different contexts");
        insights.push("Strong digital communication skills");
      } else {
        insights.push("Work on reading room dynamics");
        insights.push("Improve email and chat tone");
      }
    } else if (sectionName.includes("COACH")) {
      if (percentage >= 80) {
        insights.push("Comprehensive collaboration skills");
        insights.push("Strong emotional intelligence");
      } else {
        insights.push("Develop empathy and alignment skills");
        insights.push("Practice seeking and giving feedback");
      }
    }
    
    return insights;
  };

  const handleRestart = () => {
    setPhase('intro');
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const getCurrentAnswer = () => {
    return answers.find(a => a.questionId === currentQuestion?.id)?.answer;
  };

  if (phase === 'intro') {
    return <AssessmentIntro onStart={handleStart} />;
  }

  if (phase === 'results') {
    const scores = calculateScores();
    return <AssessmentResults scores={scores} onRestart={handleRestart} />;
  }

  // Assessment phase
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <AssessmentProgress
            currentSection={currentSectionIndex + 1}
            totalSections={assessmentSections.length}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={currentSectionQuestions.length}
            sectionName={currentSection.name}
          />
          
          {currentQuestion && (
            <QuestionCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              onNext={handleNext}
              currentAnswer={getCurrentAnswer()}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Assessment;