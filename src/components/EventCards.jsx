import { useState } from "react";
import { events } from "../constants";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

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
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
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
              {selectedEvent.imageUrl && (
                <img
                  src={selectedEvent.imageUrl}
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
