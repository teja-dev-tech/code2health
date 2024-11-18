import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
    icon : string,
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
    {
        icon: "Code" ,
        title: "Developer-Specific Wellness",
        pro:0,
        description:
          "Our platform is uniquely tailored for developers, addressing issues like eye strain from screen time and coding fatigue.",
      },
      {
        icon: "Zap" ,
        title: "Gamified Wellness",
        pro:0,
        description:
          "Earn achievements, badges, and take on challenges linked to your health goals, making wellness fun and engaging.",
      },
      {
        icon:"Users",
        title: "Community Support",
        pro:0,
        description:
          "Join a community of like-minded developers to share tips, advice, and motivation for a healthier coding lifestyle.",
      },
      {
        icon: "Eye" ,
        title: "Data-Driven Insights",
        pro:1,
        description:
          "Get personalized trends and analytics based on your coding hours and habits to optimize your wellness routine.",
      },

      
    
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Get Unique Advantage
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
       We know your needs and we are here to help you with our unique services.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
