import React from "react";

// Components
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";

// Context
import { withRoomConsumer } from "../context";

// Loading Spinner
import Loading from "./Loading";

const RoomContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
};

export default withRoomConsumer(RoomContainer);
