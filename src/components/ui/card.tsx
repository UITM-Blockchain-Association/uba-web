import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// Stats Card Component
interface StatsCardProps {
  className?: string
}

const StatsCard = ({ className }: StatsCardProps) => {
  return (
    <div className="w-full">
      <Card className={cn("bg-black/30 backdrop-blur-md border border-white/10 text-white w-full shadow-xl rounded-xl overflow-hidden", className)}>
        <CardContent className="py-6 px-4 sm:px-6 md:px-8 flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 md:gap-8 lg:gap-16 w-full">
            <div className="flex flex-col items-center text-center">
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4B9EE4]">3+ years</p>
              <p className="text-sm sm:text-base md:text-lg text-white/80 mt-1 sm:mt-2">Since we began our journey</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4B9EE4]">100+</p>
              <p className="text-sm sm:text-base md:text-lg text-white/80 mt-1 sm:mt-2">Active Members</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4B9EE4]">20+</p>
              <p className="text-sm sm:text-base md:text-lg text-white/80 mt-1 sm:mt-2">Partners</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, StatsCard } 