import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function CreateTrip() {
  return (
    <div className="sm:px10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 ">
      <h2 className="font-bold text-3xl">
        Tell us about your traval preference
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a personalized itinerary based on your preferences.
      </p>
      <div className="mt-20">
        <div>
          <h2 className="font-medium text-xl my-3">
            What is destination of choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.VITE_GOOGLE_PLACES_API_KEY}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
