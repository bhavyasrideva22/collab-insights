import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, MessageCircle, Target, Clock, TrendingUp } from "lucide-react";

interface AssessmentIntroProps {
  onStart: () => void;
}

const AssessmentIntro = ({ onStart }: AssessmentIntroProps) => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-primary rounded-2xl shadow-medium">
              <Brain className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Collaboration & Communication
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Intelligence Assessment
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how you show up in conversations, group settings, and moments of interpersonal tension. 
            Uncover your strengths in clarity, empathy, adaptability, and team alignment.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center mb-3">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Communication Intelligence</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Assess your clarity, listening style, tone awareness, and feedback handling abilities
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-secondary-soft rounded-xl flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle className="text-lg">Collaboration Intelligence</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Evaluate team adaptability, trust-building, conflict management, and shared ownership
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-3">
                <Target className="w-6 h-6 text-accent-foreground" />
              </div>
              <CardTitle className="text-lg">Contextual Agility</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Understand your effectiveness across different environments and communication contexts
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Assessment Details */}
        <Card className="max-w-4xl mx-auto border-0 shadow-medium mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">What You'll Discover</CardTitle>
            <CardDescription className="text-center text-lg">
              A comprehensive analysis of your collaboration and communication strengths
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-progress" />
                  Your Collaboration Style
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Communication approach and effectiveness
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Team interaction preferences
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Conflict navigation patterns
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Target className="w-5 h-5 text-insight" />
                  Growth Opportunities
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    Personalized development plan
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    Team role alignment insights
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    Practical improvement strategies
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Info */}
        <div className="flex justify-center gap-4 mb-8">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            25-30 minutes
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2">
            <Brain className="w-4 h-4" />
            4 Assessment Sections
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Detailed Insights
          </Badge>
        </div>

        {/* Start Button */}
        <div className="text-center">
          <Button 
            onClick={onStart}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-12 py-6 text-lg font-semibold rounded-xl shadow-medium hover:shadow-strong transition-all duration-300"
          >
            Begin Assessment
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Free assessment • No registration required • Instant results
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentIntro;