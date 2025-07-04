"use client"

import { useState, useMemo } from "react"
import events from "../data/events.json"
import EventCard from "@/components/EventCard"
import CustomDropdown from "@/components/CustomDropdown"
import SearchLens from "@/icons/SearchLens"
import Arrow from "@/icons/Arrow"

type SortOption = "date-asc" | "date-desc" | "name-asc" | "name-desc"

export default function Homepage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState<string>("all")
  const [sortBy, setSortBy] = useState<SortOption>("date-asc")

  // Get unique locations for filter dropdown
  const uniqueLocations = useMemo(() => {
    const locations = [...new Set(events.map((event) => event.location))]
    return locations.sort()
  }, [])

  const locationOptions = [
    { value: "all", label: "All Locations" },
    ...uniqueLocations.map((location) => ({ value: location, label: location })),
  ]

  const sortOptions = [
    { value: "date-asc", label: "Date: Earliest First" },
    { value: "date-desc", label: "Date: Latest First" },
    { value: "name-asc", label: "Name: A to Z" },
    { value: "name-desc", label: "Name: Z to A" },
  ]

  const filteredAndSortedEvents = useMemo(() => {
    let filtered = events

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (event) =>
          event.location.toLowerCase().includes(query) ||
          event.name.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query),
      )
    }

    // Filter by location
    if (selectedLocation !== "all") {
      filtered = filtered.filter((event) => event.location === selectedLocation)
    }

    // Sort events
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "date-asc":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "date-desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "name-asc":
          return a.name.localeCompare(b.name)
        case "name-desc":
          return b.name.localeCompare(a.name)
        default:
          return 0
      }
    })
  }, [searchQuery, selectedLocation, sortBy])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedLocation("all")
    setSortBy("date-asc")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <header
        className="flex flex-col justify-center items-center text-center"
        style={{
          backgroundColor: "#FAF0CA",
          backgroundImage: `url(https://i.pinimg.com/736x/66/82/34/668234e4977e1f5b3ee7c17bbee19cf5.jpg)`,
          backgroundSize: "contain",
          backgroundAttachment: "fixed",
        }}      >
        <div className="container mx-0 py-16 text-center bg-primary/20">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Event Explora</h1>
          <p className="text-xl md:text-2xl font-semibold max-w-full mx-auto">
            Discover and explore amazing events happening around you
          </p>
        </div>

      </header>


      {/* Search and Filter Section */}
      <section className="border-b border-border sticky top-0 bg-background z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-4xl mx-auto space-y-2 relative">

            {/* Search + Filters Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-2">
              {/* Search Input */}
              <div className="relative flex-1">
                <SearchLens />
                <input
                  type="text"
                  placeholder="Search events by name, location, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 text-base bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>

              {/* Location Filter */}
              <div className="min-w-[180px]">
                <CustomDropdown
                  options={locationOptions}
                  value={selectedLocation}
                  onChange={setSelectedLocation}
                  placeholder="Filter by location"
                  icon={<Arrow />}
                />
              </div>

              {/* Sort Filter */}
              <div className="min-w-[160px]">
                <CustomDropdown
                  options={sortOptions}
                  value={sortBy}
                  onChange={(value: string) => setSortBy(value as SortOption)}
                  placeholder="Sort by"
                  icon={<Arrow />}
                />
              </div>

              {/* Clear Filters */}
              {(searchQuery || selectedLocation !== "all" || sortBy !== "date-asc") && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-3 border border-input rounded-lg hover:bg-muted bg-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* Active Filters Display */}
            {(searchQuery || selectedLocation !== "all") && (
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="text-muted-foreground">Active filters:</span>
                {searchQuery && (
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">Search: `{searchQuery}`</span>
                )}
                {selectedLocation !== "all" && (
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">Location: {selectedLocation}</span>
                )}
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Main Events Section */}
      <main className="container mx-auto md:my-20 px-4 py-8">
        {/* Results Header */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            {filteredAndSortedEvents.length === 0 ? "No Events Found" : "Upcoming Events"}
          </h2>
          <p className="text-muted-foreground mt-1">
            Showing {filteredAndSortedEvents.length} of {events.length} events
          </p>
        </section>

        {/* Events Grid */}
        {filteredAndSortedEvents.length === 0 ? (
          <section className="text-center py-16">
            <div className="max-w-md mx-auto">
              <svg
                className="h-16 w-16 text-muted-foreground mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-foreground mb-2">No events found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or clearing the filters to see more events.
              </p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 border border-input rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Clear All Filters
              </button>
            </div>
          </section>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </section>
        )}
      </main>
    </div>
  )
}
