"use client"

import Mapper from "@/icons/Mapper"
import type { Event } from "@/types/event"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface EventCardProps {
  event: Event
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function truncateDescription(description: string, maxLength = 80): string {
  if (description.length <= maxLength) return description
  return description.substring(0, maxLength).trim() + "..."
}

export default function EventCard({ event }: EventCardProps) {
  const router = useRouter()

  const handleExplore = () => {
    const slug = slugify(event.name)
    router.push(`/${slug}`)
  }


  return (
    <article className="bg-background rounded-2xl p-6 border-4 border-secondary hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl">
      {/* Header with Date*/}
      <div className="w-fit flex justify-between items-center mb-4 border-primary/90 border-[1px] rounded-2xl px-3 py-1 bg-primary/80 text-primary-foreground">
        <time className="font-medium text-sm">{formatDate(event.date)}</time>
      </div>

      {/* Event Details */}
      <div className="mb-4">
        <p className="text-muted-foreground text-sm mb-1 flex items-center gap-2">
          <Mapper />
          {event.location}
        </p>
        <h3 className="text-foreground font-bold text-xl mb-3 leading-tight tracking-tighter">{event.name}</h3>
        <p className="text-foreground/70 text-sm leading-relaxed">{truncateDescription(event.description)}</p>
      </div>

      {/* Event Image */}
      <div className="mb-4 rounded-xl overflow-hidden">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.name}
          width={400}
          height={200}
          className="w-full h-40 object-cover bg-background/50 hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/placeholder.svg?height=200&width=400"
          }}
        />
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={handleExplore}
          className="
    bg-foreground text-background 
    px-6 py-2 rounded-full font-medium text-sm 
    transition-all duration-200 ease-in-out
    hover:bg-primary hover:text-primary-foreground
    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
    active:scale-95
    shadow-sm hover:shadow-md
  "
        >
          Explore
        </button>
      </div>
    </article>
  )
}
