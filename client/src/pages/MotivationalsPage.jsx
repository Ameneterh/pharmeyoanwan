import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";
import { MotivationalCard } from "../components/Card";
import { useNavigate } from "react-router-dom";

export default function MotivationalsPage() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [motivation, setMotivation] = useState("");
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
