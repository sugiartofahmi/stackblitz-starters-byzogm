"use client";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/K5HRJv54ZsV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <Card title="Wireless Headphones" price="$99.99" />
      <Card title="Leather Backpack" price="$129.99" />
      <Card title="Fitness Tracker" price="$79.99" />
      <Card title="Smart Water Bottle" price="$49.99" />
    </div>
  );
}

type CardProps = {
  title: string;
  price: string;
};

const Card = (props: CardProps) => {
  return (
    <div className="bg-background rounded-lg shadow-lg overflow-hidden">
      <img
        src="/placeholder.svg"
        alt="Product 1"
        width={400}
        height={300}
        className="w-full h-60 object-cover"
        style={{ aspectRatio: "400/300", objectFit: "cover" }}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{props.title}</h3>
        <p className="text-primary font-bold text-xl">{props.price}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <MinusIcon className="w-4 h-4" />
            </Button>
            <span className="text-sm">1</span>
            <Button variant="ghost" size="icon">
              <PlusIcon className="w-4 h-4" />
            </Button>
          </div>
          <Button size="sm">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
