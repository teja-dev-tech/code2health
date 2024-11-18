import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
    icon: string;
    title: string;
    description: string;
}

const featureList: FeaturesProps[] = [
    {
        icon: "Timer",
        title: "Custom Posture Break Reminders",
        description:
            "Set personalized reminders to maintain good posture during long coding sessions.",
    },
    {
        icon: "Dumbbell",
        title: "Workout Tracker for Desk Workers",
        description:
            "Log and track exercises specifically designed for developers who sit for long periods.",
    },
    {
        icon: "MessageCircle",
        title: "Mental Health Monitoring for Coders",
        description:
            "Track your mental well-being with tools tailored for the unique stresses of coding.",
    },
    {
        icon: "Coffee",
        title: "Productivity-boosting Break Timers",
        description:
            "Optimize your work intervals with scientifically-backed break schedules.",
    },
    {
        icon: "GlassWater",
        title: "Hydration Tracker for Developers",
        description:
            "Stay hydrated with reminders and tracking tools for busy coding days.",
    },
    {
        icon: "Bed",
        title: "Sleep Quality Monitor",
        description:
            "Improve your sleep quality with personalized insights and sleep tracking tools.",

    }

];

export const FeaturesSection = () => {
    return (
        <section id="features" className="container w-auto mx-5 md:mx-12 lg:mx-20 py-24 sm:py-32">
            <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
                Features
            </h2>

            <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
                What Makes Us Different
            </h2>

            <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
                Developers have unique health needs. Our platform is designed to help you stay healthy and productive while coding.
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {featureList.map(({ icon, title, description }) => (
                    <div key={title}>
                        <Card className="h-full bg-background border-0 shadow-none">
                            <CardHeader className="flex justify-center items-center">
                                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                                    <Icon
                                        name={icon as keyof typeof icons}
                                        size={24}
                                        color="hsl(var(--primary))"
                                        className="text-primary"
                                    />
                                </div>

                                <CardTitle>{title}</CardTitle>
                            </CardHeader>

                            <CardContent className="text-muted-foreground text-center">
                                {description}
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
};
