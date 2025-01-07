import { Card, CardContent } from "@/components/ui/card";

export default function CardComponent({ title, description, Icon }) {
  return (
    <Card className="w-full rounded-3xl p-6 hover:shadow-lg transition-shadow">
      <CardContent className="p-0 space-y-3">
        <div className="bg-blue-200 text-blue-500 w-10 h-10 rounded-xl flex items-center justify-center">
          <Icon />
        </div>
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
