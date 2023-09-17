'use client'

import { useChat } from 'ai/react';

import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Input } from "./ui/input"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ScrollArea } from '@radix-ui/react-scroll-area';

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({});

  // return (
  //   <Card className="w-[400px]">
  //       <CardHeader className="bg-">
  //         <CardTitle>Chat AI</CardTitle>
  //         <CardDescription>Usinng Vercel SDK to create a chat bot.</CardDescription>
  //       </CardHeader>
  //       <CardContent >
  //         <ScrollArea className='h-[600px] w-full space-y-4 pr-4'>
  //           { messages.map(message => {
  //             return (
  //               <div key={message.id} className="flex gap-3 text-sm text-slate-600">
  //                 { message.role === 'user' && (
  //                   <Avatar>
  //                   <AvatarFallback>HT</AvatarFallback>
  //                   <AvatarImage src="https://github.com/heitortessaro.png" />
  //                 </Avatar>
  //                 )}

  //                 { message.role === 'assistant' && (
  //                   <Avatar>
  //                   <AvatarFallback>WC</AvatarFallback>
  //                   <AvatarImage src="https://github.com/writechoiceorg.png" />
  //                 </Avatar>
  //                 )}
                  
  //                 <p className="leading-relaxed">
  //                   <span className="block font-bold text-slate-800">
  //                     {message.role === 'user' ? 'You' : 'AI'}:
  //                   </span>
  //                   {message.content}
  //                 </p>
                  
  //               </div>
  //             )
  //           })}
  //         </ScrollArea>
  //       </CardContent>
  //       <CardFooter >
  //         <form className="flex w-full gap-2" onSubmit={handleSubmit}>
  //           <Input placeholder="How can I help you?" value={input} onChange={handleInputChange}/>
  //           <Button type="submit">Send</Button>
  //         </form>
  //       </CardFooter>
  //     </Card>
  // )

  return (
    <main className="flex flex-col w-full h-screen max-w-lg p-24 mx-auto">
      <section className="mb-auto m">
        {messages.map(m => (
          <div className="mb-4" key={m.id}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}
      </section>
      <form className="flex space-x-4" onSubmit={handleSubmit}>
        <input
          className="p-2 text-black rounded-md"
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <button
          className="p-2 border-2 border-white border-solid rounded-md"
          type="submit"
        >
          Send
        </button>
      </form>
    </main>
  );
}