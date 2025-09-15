import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface AssessmentProgressProps {
  currentSection: number;
  totalSections: number;
  currentQuestion: number;
  totalQuestions: number;
  sectionName: string;
}

const AssessmentProgress = ({
  currentSection,
  totalSections,
  currentQuestion,
  totalQuestions,
  sectionName
}: AssessmentProgressProps) => {
  const overallProgress = ((currentSection - 1) / totalSections + (currentQuestion / totalQuestions) / totalSections) * 100;
  const sectionProgress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-soft">
      {/* Overall Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">Overall Progress</span>
          <span className="text-sm text-muted-foreground">
            {Math.round(overallProgress)}% Complete
          </span>
        </div>
        <Progress value={overallProgress} className="h-2" />
      </div>

      {/* Section Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <Badge variant="secondary" className="font-medium">
            Section {currentSection} of {totalSections}
          </Badge>
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion} of {totalQuestions}
          </span>
        </div>
        <h3 className="font-semibold text-lg text-foreground mb-3">{sectionName}</h3>
        <Progress value={sectionProgress} className="h-3" />
      </div>

      {/* Section Indicators */}
      <div className="flex justify-between">
        {Array.from({ length: totalSections }, (_, i) => (
          <div
            key={i}
            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
              i + 1 < currentSection
                ? 'bg-progress border-progress'
                : i + 1 === currentSection
                ? 'bg-primary border-primary'
                : 'bg-background border-border'
            }`}
          >
            {i + 1 < currentSection ? (
              <CheckCircle className="w-4 h-4 text-progress-foreground" />
            ) : (
              <span
                className={`text-xs font-semibold ${
                  i + 1 === currentSection
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                {i + 1}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssessmentProgress;