import Header from "@/components/Header"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-between">
      <Header />
      <div className="flex flex-col min-h-screen items-center justify-between p-8">
          <Hero />
      </div>
    </main>
  )
}
