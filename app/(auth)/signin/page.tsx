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
import { Zap, Eye, EyeOff } from "lucide-react";



const schema = z.object({
  emailOrUsername: z.string().min(1, "Email or Username is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  remember: z.boolean().optional(),
});

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
        emailOrUsername: "",
        password: "",
        remember: false,
        },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <Zap className="h-12 w-12 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">
            Sign In to Code2Health
          </h1>
          <p className="text-muted-foreground">
            Welcome back! Let's keep you healthy and productive.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label htmlFor="emailOrUsername">Email or Username</Label>
            <Input
              id="emailOrUsername"
              placeholder="john@example.com or johndoe"
              {...register("emailOrUsername")}
            />
            {errors.emailOrUsername && <p className="text-red-500">{errors.emailOrUsername.message}</p>}
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password")}
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
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" {...register("remember")} />
              <Label htmlFor="remember" className="text-sm">
                Remember me
              </Label>
            </div>
            <Link href="/forgot-password" className="text-sm underline">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don't have an account yet?{" "}
          <Link href="/signup" className="underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

