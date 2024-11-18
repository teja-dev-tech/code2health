"use client";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Zap, Eye, EyeOff } from "lucide-react";

const schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  username: z.string().optional(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Confirm Password is required"),
  terms: z.boolean().refine((val) => val === true, "You must accept the terms and conditions"),

}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
        fullName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        terms: false,
    },
  });

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.match(/[A-Z]/)) strength += 25;
    if (password.match(/[a-z]/)) strength += 25;
    if (password.match(/[0-9]/)) strength += 25;
    setPasswordStrength(strength);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <Zap className="h-12 w-12 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">
            Create Your Code2Health Account
          </h1>
          <p className="text-muted-foreground">
            Track your wellness, improve productivity, and stay
            healthy—customized for developers.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" placeholder="John Doe" {...register("fullName")} />
            {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" {...register("email")} />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="username">Username (optional)</Label>
            <Input id="username" placeholder="johndoe" {...register("username")} />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password")}
                onChange={(e) => {
                  register("password").onChange(e);
                  calculatePasswordStrength(e.target.value);
                }}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            <Progress value={passwordStrength} className="mt-2" />
            <p className="text-sm text-muted-foreground mt-1">
              Password strength:{" "}
              {passwordStrength === 100
                ? "Strong"
                : passwordStrength >= 50
                ? "Medium"
                : "Weak"}
            </p>
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" {...register("terms")} />
            <Label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <Link href="#" className="underline">
                Terms of Service
              </Link>
              and
              <Link href="#" className="underline">
                Privacy Policy
              </Link>
            </Label>
            {errors.terms && <p className="text-red-500">{errors.terms.message}</p>}
          </div>

          

          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/signin" className="underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

SignUpPage.getLayout = null;