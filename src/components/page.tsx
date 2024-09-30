'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Globe, Users, BookOpen, Award, MessageCircle } from 'lucide-react'

export function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Sansthaein Aur Samvidhan Logo" width={40} height={40} />
            <span className="font-bold">Sansthaein Aur Samvidhan</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#game-modes" className="text-sm font-medium hover:underline underline-offset-4">
              Game Modes
            </Link>
            <Link href="#community" className="text-sm font-medium hover:underline underline-offset-4">
              Community
            </Link>
            <Link href="#technical-approach" className="text-sm font-medium hover:underline underline-offset-4">
              Technical Approach
            </Link>
          </nav>
          <Button variant="outline" size="icon" className="ml-4">
            <Globe className="h-4 w-4" />
            <span className="sr-only">Toggle language</span>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-orange-100 via-white to-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Learn the Indian Constitution Through Interactive Gameplay
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Embark on a journey of constitutional literacy with our gamified approach. Understand the pillars of Indian democracy in an engaging and interactive way.
                </p>
              </div>
              <Button className="bg-blue-600 text-white" size="lg">
                Start Your Constitutional Journey
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Project</h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              "Sansthaein Aur Samvidhan" is dedicated to spreading constitutional literacy among citizens. We simplify the language of the Constitution of India, focusing on the institutional perspective including the Legislature, Executive, and Judiciary.
            </p>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Key Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <BookOpen className="h-12 w-12 text-blue-500" />
                  <h3 className="text-xl font-bold">Story-based 2D Game</h3>
                  <p className="text-sm text-gray-500 text-center">Immerse yourself in role-playing simulations that bring constitutional concepts to life.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Users className="h-12 w-12 text-green-500" />
                  <h3 className="text-xl font-bold">Multiplayer Mode</h3>
                  <p className="text-sm text-gray-500 text-center">Compete with others in real-time rankings and collaborative learning experiences.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <MessageCircle className="h-12 w-12 text-purple-500" />
                  <h3 className="text-xl font-bold">Community Sharing</h3>
                  <p className="text-sm text-gray-500 text-center">Engage in discussions, seek guidance, and share insights with fellow learners.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="game-modes" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Game Modes</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Story Mode</h3>
                  <p className="text-sm text-gray-500">Embark on a journey from age 3 to 90, learning about the Constitution at every stage of life.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Role-Playing</h3>
                  <p className="text-sm text-gray-500">Step into the shoes of judges, citizens, and other key figures in the Indian democracy.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Quizzes</h3>
                  <p className="text-sm text-gray-500">Test your knowledge with interactive quizzes covering various aspects of the Constitution.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Benefits</h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <li className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-blue-500" />
                <span>Increased constitutional literacy</span>
              </li>
              <li className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-blue-500" />
                <span>Informed decision-making</span>
              </li>
              <li className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-blue-500" />
                <span>Suitable for all age groups</span>
              </li>
              <li className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-blue-500" />
                <span>Interactive learning experience</span>
              </li>
              <li className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-blue-500" />
                <span>Comprehensive coverage of Constitution articles</span>
              </li>
              <li className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-blue-500" />
                <span>Accessible design for all educational backgrounds</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="community" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Join Our Community</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mb-8">
              Engage with fellow learners, share insights, and seek guidance in our vibrant community. Our Stack Overflow-like platform ensures you always have support in your constitutional journey.
            </p>
            <Button className="bg-green-600 text-white" size="lg">
              Join the Discussion
              <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section id="technical-approach" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Technical Approach</h2>
            
            <Tabs defaultValue="architecture" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="game">Game</TabsTrigger>
                <TabsTrigger value="deployment">Deployment</TabsTrigger>
              </TabsList>
              
              <TabsContent value="architecture">
                <Card>
                  <CardHeader>
                    <CardTitle>Architecture Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* <Image
                      src="/technical-approach.png"
                      alt="Technical Architecture Diagram"
                      width={1200}
                      height={675}
                      className="rounded-lg shadow-lg"
                    /> */}
                    <ul>JavaScript, TypeScript, C++, and Node.js, along with Next.js and Express.js frameworks, and PostgreSQL with Prisma as ORM is being utilized
Our code is deployed using Docker and Kubernetes on an AWS server.
This setup ensures scalability, high availability, and easier management of the backend components of the game.</ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="frontend">
                <Card>
                  <CardHeader>
                    <CardTitle>Frontend Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Next.js and TypeScript for the main website</li>
                      <li>Multilingual support for Hindi and English</li>
                      <li>Onboarding animation based on constitutional concepts</li>
                      <li>Age-adaptive dashboard content</li>
                      <li>Features: available games, user progress display, learning animations, and community sharing</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="backend">
                <Card>
                  <CardHeader>
                    <CardTitle>Backend Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Node.js and Express.js for the server</li>
                      <li>PostgreSQL for the main database</li>
                      <li>Prisma as the ORM</li>
                      <li>Redis for caching and real-time features</li>
                      <li>WebSocket for multiplayer functionality</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="game">
                <Card>
                  <CardHeader>
                    <CardTitle>Game Architecture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Separate backend for games</li>
                      <li>Multiple game types (family mode multiplayer, decision-making game, etc.)</li>
                      <li>Data recording for all games</li>
                      <li>Redis usage for multi-game support</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="deployment">
                <Card>
                  <CardHeader>
                    <CardTitle>Deployment and Scalability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Docker for containerization</li>
                      <li>Kubernetes for orchestration</li>
                      <li>Deployment on AWS server</li>
                      <li>Scalable architecture ensuring high availability</li>
                      <li>Easier management of backend components</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['node', 'express', 'redis', 'typescript', 'docker', 'kubernetes'].map((tech) => (
                  <Image
                    key={tech}
                    src={`/${tech}-logo.svg`}
                    alt={`${tech} logo`}
                    width={64}
                    height={64}
                    className="rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Key Technical Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Multilingual support',
                  'Age-based content adaptation',
                  'Real-time multiplayer gaming',
                  'Community sharing functionality',
                  'Scalable architecture'
                ].map((feature, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <p>{feature}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-sm hover:underline underline-offset-4">Privacy Policy</Link>
            <Link href="/terms" className="text-sm hover:underline underline-offset-4">Terms of Service</Link>
            <Link href="/contact" className="text-sm hover:underline underline-offset-4">Contact</Link>
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="container px-4 md:px-6 mt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sansthaein Aur Samvidhan. All rights reserved.
        </div>
      </footer>
    </div>
  )
}