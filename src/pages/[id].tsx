import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import events from '@/data/events.json';
import { Event } from '@/types/event';

interface EventPageProps {
  event: Event;
}

export default function EventPage({ event }: EventPageProps) {
  return (
    <>
      <Head>
        <title>{event.name} | Events Explorer</title>
        <meta name="description" content={event.description} />
      </Head>

      <Navbar />

      <section className="relative">
        <div className="relative h-64 md:h-96 overflow-hidden">
          <Image
            src={event.image}
            alt={event.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
            <p className="text-sm">{new Date(event.date).toLocaleDateString()}</p>
            <h1 className="text-4xl md:text-5xl font-bold">{event.name}</h1>
            <div className="flex gap-4 mt-2 text-sm md:text-base">
              <span>📍 {event.location}</span>
              <span>📅 1 Day</span>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-foreground/80">{event.description}</p>
        </div>

        <aside className="border rounded-lg shadow p-4 space-y-2">
          <Image
            src={event.image}
            alt={event.name}
            width={400}
            height={200}
            className="rounded"
          />
          <h3 className="font-semibold">{event.name}</h3>
          <p className="text-sm">📅 Date: {new Date(event.date).toLocaleDateString()}</p>
          <p className="text-sm">📍 Location: {event.location}</p>
          <p className="text-sm">📅 Days: 1 Day</p>
        </aside>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: events.map((event) => ({
      params: { id: event.id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const event = events.find((e) => e.id === params?.id);

  if (!event) {
    return { notFound: true };
  }

  return {
    props: { event },
  };
};
