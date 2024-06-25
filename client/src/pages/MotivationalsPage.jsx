import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";
import { MotivationalCard } from "../components/Card";

export default function MotivationalsPage() {
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [motivations, setMotivations] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchMotivations = async () => {
      try {
        const res = await fetch("/api/motivational/getmotivation");
        const data = await res.json();
        setMotivations(data.motivation);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMotivations();
  }, []);

  return (
    <main className="p-3 flex flex-col max-w-2xl mx-auto min-h-screen">
      {loading && (
        <div className="flex justify-center items-center min-h-screen">
          <Spinner size="xl" />
        </div>
      )}

      <div className="flex flex-col items-center mb-5">
        <h1 className="text-2xl text-center font-semibold my-5">
          Motivational Content
        </h1>

        <div className="flex flex-col md:flex-row items-start justify-start mb-5 gap-4 mt-5">
          {/* <div className="p-2 gap-2 hidden md:flex h-48 w-72 bg-slate-200 dark:bg-slate-600 rounded-lg border border-t-2 border-b-2 border-t-slate-700 border-b-slate-700">
            <div className="w-16 h-16 rounded-full shadow-lg">
              <img
                src={
                  currentUser
                    ? currentUser.avatar
                    : "https://cdn.iconscout.com/icon/free/png-256/free-avatar-372-456324.png"
                }
                alt="author image"
                className="w-16 h-16 rounded-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>{currentUser ? currentUser.fullname : "Anonymous User"}</p>
              <p>{currentUser ? currentUser.email : "No Anonymous Email"}</p>
              <p className="mt-10">Edit Profile</p>
            </div>
          </div> */}
          <div className="flex flex-1 flex-wrap gap-5">
            {motivations &&
              motivations.map((motivation) => (
                <MotivationalCard
                  key={motivation._id}
                  motivation={motivation}
                />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
