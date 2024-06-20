import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner, Table } from "flowbite-react";

export default function DashMessages() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchSaveds = async () => {
      const res = await fetch(`/api/saved/get-saveds?limit=10`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setMessages(data.saveds);
        setLoading(false);
        if (data.saveds.length === 10) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };

    fetchSaveds();
  }, []);

  const handleShowMore = async () => {
    const startIndex = posts.length;
    try {
      const res = await fetch(`/api/saved/get-saveds?startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok) {
        setMessages((prev) => [...prev, ...data.saveds]);
        if (data.saveds.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen w-full">
        <Spinner size="xl" />
      </div>
    );

  return (
    <div className="min-h-screen w-full">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 py-7 table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
        {messages && messages.length > 0 ? (
          <>
            <Table hoverable className="shadow-md mx-auto">
              <Table.Head>
                <Table.HeadCell>Date Updated</Table.HeadCell>
                <Table.HeadCell>Poster's Name</Table.HeadCell>
                <Table.HeadCell>Poster's Contact</Table.HeadCell>
                <Table.HeadCell>Message Body</Table.HeadCell>
              </Table.Head>
              {messages.map((message) => (
                <Table.Body className="divide-y" key={message._id}>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>
                      {new Date(message.updatedAt).toLocaleDateString()}
                    </Table.Cell>
                    <Table.Cell>{message.fullname}</Table.Cell>
                    <Table.Cell className="">
                      <Link
                        to={`mailto:${message.email}`}
                        className="block hover:underline underline-offset-4 hover:font-bold hover:text-slate-950"
                      >
                        {message.email}
                      </Link>
                      <Link
                        to={`tel:${message.phonenumber}`}
                        className="hover:underline underline-offset-4 hover:font-bold hover:text-slate-950"
                      >
                        {message.phonenumber}
                      </Link>
                    </Table.Cell>
                    <Table.Cell
                      className="line-clamp-3 w-60 lg:w-96"
                      dangerouslySetInnerHTML={{
                        __html: message && message.message,
                      }}
                    ></Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
            </Table>
            {showMore && (
              <button
                onClick={handleShowMore}
                className="w-full text-teal-500 self-center text-sm py-7"
              >
                Show More
              </button>
            )}
          </>
        ) : (
          <p>You have no messages yet!</p>
        )}
      </div>
    </div>
  );
}
