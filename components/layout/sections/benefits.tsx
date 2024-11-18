import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
    { icon: "Code",
    title: "Developer-Specific Wellness",
    description:
      "Our platform is uniquely tailored for developers, addressing issues like eye strain from screen time and coding fatigue.",
  },
  {
    icon: "Zap",
    title: "Gamified Wellness",
    description:
      "Earn achievements, badges, and take on challenges linked to your health goals, making wellness fun and engaging.",
  },
  {
    icon: "Eye",
    title: "Data-Driven Insights",
    description:
      "Get personalized trends and analytics based on your coding hours and habits to optimize your wellness routine.",
  },
  {
    icon: "CircleCheck",
    title: "Trusted by Developers",
    description:
      "Join thousands of developers who have improved their well-being and productivity with our platform.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className=" container w-auto mx-5 md:mx-12 lg:mx-20 py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Shortcut to Success
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            ducimus reprehenderit architecto rerum similique facere odit
            deleniti necessitatibus quo quae.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
