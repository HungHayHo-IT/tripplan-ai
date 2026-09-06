import { useState } from "react";

const CreateTrip = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formDate, setFormData] = useState({
    destination: null,
    noOfDays: "",
    traveler: "",
    budget: "",
  });

  return (
    <div className="max-padd-container flexCenter pt-18 h-screen">
      <div className="w-full max-w-3xl min-h-[86vh] sm:min-h-[80vh] bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
        {/*progress Bar*/}
        <div className="h-2 bg-indigo-100 w-full">
          <div
            className="h-full bg-indigo-600 transition-all duration-500 ease-out"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
        <div className="p-5 md:p-12 flex flex-col flex-1">
          {/*steps*/}
          <div className="flexCenter space-x-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all duration-300 ${
                  step === s
                    ? "w-8 bg-indigo-600"
                    : step > s
                    ? "w-2 bg-indigo-600"
                    : "w-2 bg-gray-200"
                }`}
              />
            ))}
          </div>
          <div className="flex-1 flex flex-col pt-2 sm:pt-12">
            {/*step 1: Destination & Day*/}

            {step == 1 && (
              <div>
                <div>
                  <h3>Bạn dự định khám phá nơi nào?</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
