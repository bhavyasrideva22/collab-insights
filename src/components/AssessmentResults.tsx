import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"; 
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Brain, Target, Users, MessageCircle, Award } from "lucide-react";

interface AssessmentScore {
  section: string;
  score: number;
  maxScore: number;
  insights: string[];
}

interface AssessmentResultsProps {
  scores: AssessmentScore[];
  onRestart: () => void;
}

const AssessmentResults = ({ scores, onRestart }: AssessmentResultsProps) => {
  const totalScore = scores.reduce((sum, s) => sum + s.score, 0);
  const maxTotalScore = scores.reduce((sum, s) => sum + s.maxScore, 0);
  const overallPercentage = Math.round((totalScore / maxTotalScore) * 100);

  const getStyleLabel = (percentage: number) => {
    if (percentage >= 85) return "Collaborative Virtuoso";
    if (percentage >= 75) return "Empathic Facilitator";
    if (percentage >= 65) return "Supportive Contributor";
    if (percentage >= 55) return "Developing Collaborator";
    return "Growth-Oriented Learner";
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-progress";
    if (percentage >= 60) return "text-primary";
    if (percentage >= 40) return "text-insight";
    return "text-muted-foreground";
  };

  const getSectionIcon = (section: string) => {
    if (section.includes("Communication")) return <MessageCircle className="w-5 h-5" />;
    if (section.includes("Collaboration")) return <Users className="w-5 h-5" />;
    if (section.includes("Contextual")) return <Target className="w-5 h-5" />;
    if (section.includes("COACH")) return <Brain className="w-5 h-5" />;
    return <TrendingUp className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-primary rounded-2xl shadow-medium">
              <Award className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your CCI Assessment
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Results
            </span>
          </h1>
          <Badge 
            variant="secondary" 
            className="text-xl px-6 py-2 font-semibold bg-gradient-insight text-insight-foreground"
          >
            {getStyleLabel(overallPercentage)}
          </Badge>
        </div>

        {/* Overall Score */}
        <Card className="max-w-2xl mx-auto border-0 shadow-medium mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Overall Collaboration Intelligence</CardTitle>
            <CardDescription>Your comprehensive CCI score</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className={`text-6xl font-bold ${getScoreColor(overallPercentage)} mb-2`}>
                {overallPercentage}%
              </div>
              <p className="text-muted-foreground">
                Collaboration & Communication Intelligence Score
              </p>
            </div>
            <Progress value={overallPercentage} className="h-3" />
            <div className="bg-accent/50 rounded-lg p-4">
              <p className="text-sm text-center text-muted-foreground leading-relaxed">
                You demonstrate strong collaboration skills with particular strengths in communication clarity and team adaptability. 
                Focus on conflict navigation for continued growth.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section Scores */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {scores.map((score, index) => {
            const percentage = Math.round((score.score / score.maxScore) * 100);
            return (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary-soft rounded-lg">
                      {getSectionIcon(score.section)}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{score.section}</CardTitle>
                      <CardDescription className="text-sm">
                        {score.score} out of {score.maxScore} points
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Score</span>
                    <span className={`text-2xl font-bold ${getScoreColor(percentage)}`}>
                      {percentage}%
                    </span>
                  </div>
                  <Progress value={percentage} className="h-2" />
                  <div className="space-y-2">
                    {score.insights.map((insight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {insight}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Growth Recommendations */}
        <Card className="max-w-4xl mx-auto border-0 shadow-medium mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-progress" />
              Your Growth Plan
            </CardTitle>
            <CardDescription>
              Personalized recommendations based on your assessment results
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-progress">Top Strengths</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-progress mt-2 flex-shrink-0" />
                    <span className="text-sm">Clear communication style</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-progress mt-2 flex-shrink-0" />
                    <span className="text-sm">Strong team adaptability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-progress mt-2 flex-shrink-0" />
                    <span className="text-sm">Empathetic listening approach</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-insight">Growth Areas</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-insight mt-2 flex-shrink-0" />
                    <span className="text-sm">Conflict navigation techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-insight mt-2 flex-shrink-0" />
                    <span className="text-sm">Digital communication tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-insight mt-2 flex-shrink-0" />
                    <span className="text-sm">Proactive feedback seeking</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <Button 
            onClick={onRestart}
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg font-semibold rounded-xl"
          >
            Take Assessment Again
          </Button>
          <p className="text-sm text-muted-foreground">
            Want to improve your scores? Retake the assessment anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResults;