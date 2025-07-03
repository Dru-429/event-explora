"use client"

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

function truncateDescription(description: string, maxLength = 120): string {
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
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-border hover:border-primary/20">
      <div className="relative">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.name}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/placeholder.svg?height=200&width=400"
          }}
        />
        <div className="absolute top-4 left-4">
          <time className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-md">
            {formatDate(event.date).replace(/,.*/, "").replace(/\d{4}/, "").trim()} {new Date(event.date).getFullYear()}
          </time>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">{event.name}</h3>
        <p className="text-muted-foreground mb-2 font-medium flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {event.location}
        </p>
        <p className="text-foreground/80 mb-4 text-sm leading-relaxed">{truncateDescription(event.description)}</p>
        <button
          onClick={handleExplore}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Explore →
        </button>
      </div>
    </article>
  )
}
