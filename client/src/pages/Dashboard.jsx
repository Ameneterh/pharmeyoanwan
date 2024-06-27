import { useLocation } from "react-router-dom";

import React, { useEffect, useState } from "react";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashboardComponent from "../components/DashboardComponent";
import DashPosts from "../components/DashPosts";
import DashMessages from "../components/DashMessages";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";
import DashMotivational from "../components/DashMotivational";
import DashHealthTalks from "../components/DashHealthTalks";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-56">
        <DashSidebar />
      </div>

      {/* profile ... */}
      {tab === "profile" && <DashProfile />}

      {/* for dashboard */}
      {tab === "dash" && <DashboardComponent />}

      {/* for post */}
      {tab === "posts" && <DashPosts />}

      {/* for health talks */}
      {tab === "health-talks" && <DashHealthTalks />}

      {/* for motivationals */}
      {tab === "motivationals" && <DashMotivational />}

      {/* for messages */}
      {/* {tab === "messages" && <DashMessages />} */}

      {/* for post */}
      {tab === "users" && <DashUsers />}

      {/* for post */}
      {tab === "comments" && <DashComments />}
    </div>
  );
}
