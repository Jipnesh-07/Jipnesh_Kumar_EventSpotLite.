import { useState } from "react";
import { events } from "../constants";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const defaultImageUrl =
  "data:image/jpeg;base64,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";

const EventCards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Filter events based on the search term (by name and location)
  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Section id="events">
      <div className="container relative z-2">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Events</h2>
          <input
            type="text"
            placeholder="Search by name or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded-md w-64"
          />
        </div>

        {/* Event Cards */}
        <div className="flex flex-wrap gap-10 mb-10">
          {filteredEvents.map((item) => (
            <div
              key={item.id}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] cursor-pointer"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              onClick={() => setSelectedEvent(item)} // Set selected event on click
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.name}</h5>
                <p className="body-2 mb-6 text-n-3">{item.description}</p>
                <p className="body-2 mb-6 text-n-3">{item.date}</p>
                <div className="flex items-center mt-auto">
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    {item.location}
                  </p>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {defaultImageUrl && (
                    <img
                      src={defaultImageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedEvent && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={(e) => {
              // Close the modal if clicked outside of the modal content
              if (e.target === e.currentTarget) {
                setSelectedEvent(null);
              }
            }}
          >
            <div className="relative bg-white rounded-lg w-3/4 max-w-4xl p-6 flex flex-row">
              {/* Close Button */}
              <button
                className="absolute top-1 right-2 text-gray-500 hover:text-gray-800 text-2xl"
                onClick={() => setSelectedEvent(null)}
              >
                &times;
              </button>

              {/* Event Image (left side) */}
              {defaultImageUrl && (
                <img
                  src={defaultImageUrl}
                  alt={selectedEvent.name}
                  className="w-1/2 h-auto rounded-l-lg object-cover"
                />
              )}

              {/* Event Details (right side) */}
              <div className="flex flex-col justify-between w-1/2 p-6 bg-n-8 rounded-r-lg text-white">
                <h3 className="text-3xl font-bold mb-4">
                  {selectedEvent.name}
                </h3>
                <p className="text-gray-300 mb-4">
                  {selectedEvent.description}
                </p>
                <p className="text-gray-400 text-sm">
                  Date: {selectedEvent.date}
                </p>
                <p className="text-gray-400 text-sm">
                  Location: {selectedEvent.location}
                </p>

                <div className="mt-6 flex items-center">
                  <span className="ml-4 text-xs font-code uppercase tracking-wide"></span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default EventCards;

// // Default image URL for all event cards
// const defaultImageUrl = "./src/assets/hero/music.jpg";
