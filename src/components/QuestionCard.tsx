import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export interface Question {
  id: string;
  type: 'multiple-choice' | 'likert' | 'slider';
  section: string;
  trait: string;
  question: string;
  description?: string;
  options?: Array<{
    id: string;
    text: string;
    value: number;
  }>;
  minLabel?: string;
  maxLabel?: string;
  min?: number;
  max?: number;
}

interface QuestionCardProps {
  question: Question;
  onAnswer: (questionId: string, answer: number) => void;
  onNext: () => void;
  currentAnswer?: number;
}

const QuestionCard = ({ question, onAnswer, onNext, currentAnswer }: QuestionCardProps) => {
  const [selectedValue, setSelectedValue] = useState<number | undefined>(currentAnswer);

  const handleAnswer = (value: number) => {
    setSelectedValue(value);
    onAnswer(question.id, value);
  };

  const renderQuestion = () => {
    switch (question.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-4">
            <RadioGroup
              value={selectedValue?.toString()}
              onValueChange={(value) => handleAnswer(parseInt(value))}
              className="space-y-3"
            >
              {question.options?.map((option) => (
                <div
                  key={option.id}
                  className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer"
                  onClick={() => handleAnswer(option.value)}
                >
                  <RadioGroupItem value={option.value.toString()} id={option.id} />
                  <Label htmlFor={option.id} className="flex-1 cursor-pointer text-sm leading-relaxed">
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 'likert':
        const likertOptions = [
          { value: 1, label: "Strongly Disagree" },
          { value: 2, label: "Disagree" },
          { value: 3, label: "Slightly Disagree" },
          { value: 4, label: "Neutral" },
          { value: 5, label: "Slightly Agree" },
          { value: 6, label: "Agree" },
          { value: 7, label: "Strongly Agree" }
        ];
        return (
          <div className="space-y-6">
            <RadioGroup
              value={selectedValue?.toString()}
              onValueChange={(value) => handleAnswer(parseInt(value))}
              className="grid grid-cols-1 md:grid-cols-7 gap-2"
            >
              {likertOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex flex-col items-center space-y-2 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer"
                  onClick={() => handleAnswer(option.value)}
                >
                  <RadioGroupItem value={option.value.toString()} id={`likert-${option.value}`} />
                  <Label
                    htmlFor={`likert-${option.value}`}
                    className="text-xs text-center cursor-pointer font-medium"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 'slider':
        return (
          <div className="space-y-6">
            <div className="px-4">
              <Slider
                value={[selectedValue || question.min || 0]}
                onValueChange={(value) => handleAnswer(value[0])}
                max={question.max || 10}
                min={question.min || 0}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>{question.minLabel || "Never"}</span>
                <span className="font-semibold text-foreground">
                  {selectedValue !== undefined ? selectedValue : "—"}
                </span>
                <span>{question.maxLabel || "Always"}</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="border-0 shadow-medium">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {question.trait}
          </Badge>
          {question.section && (
            <Badge variant="outline" className="text-xs">
              {question.section}
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl leading-relaxed">
          {question.question}
        </CardTitle>
        {question.description && (
          <p className="text-muted-foreground text-sm leading-relaxed">
            {question.description}
          </p>
        )}
      </CardHeader>
      <CardContent className="space-y-6">
        {renderQuestion()}
        
        <div className="flex justify-end pt-4">
          <Button
            onClick={onNext}
            disabled={selectedValue === undefined}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          >
            Next Question
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;