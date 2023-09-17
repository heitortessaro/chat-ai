import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";


export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <Card className="w-[400px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader className="bg-">
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Usinng Vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-sm text-slate-600">
            <Avatar>
              <AvatarFallback>HT</AvatarFallback>
              <AvatarImage src="https://github.com/heitortessaro.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800">You:</span>
              Message
            </p>
          </div>
          <div className="flex gap-2 text-sm text-slate-600">
            <Avatar>
              <AvatarFallback>WC</AvatarFallback>
              <AvatarImage src="https://github.com/writechoiceorg.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800">WC:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis, reprehenderit iste labore placeat similique iusto velit ullam sapiente saepe ab rerum odio eius earum non rem culpa, beatae animi!
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you?"/>
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
