import React, { useEffect, useRef } from "react";
import { getUrlParams, randomID } from "../utils/helper.ts";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const VideoConference: React.FC = () => {
  const roomID = getUrlParams("roomID") || randomID(5);
  const meetingContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!meetingContainer.current) return;

    const appID = parseInt(import.meta.env.VITE_ZEGOCLOUD_APP_ID);
    const serverSecret = import.meta.env.VITE_ZEGOCLOUD_SERVER_SECRET;

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5),
      randomID(5)
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: meetingContainer.current,
      sharedLinks: [
        {
          name: "Invite Link",
          url: `${window.location.origin}/video-call?roomID=${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  }, [roomID]);

  return (
    <div
      ref={meetingContainer}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};

export default VideoConference;
