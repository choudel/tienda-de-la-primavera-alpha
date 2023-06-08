<script>
  import { onMount } from "svelte";
  import { io } from "socket.io-client";

  let localStream;
  let remoteStream;
  let peerConnection;
  let user1;
  let user2;

  let offer;
  const room = "myroom";

  const servers = {
    iceServers: [
      {
        urls: [
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
        ],
      },
    ],
  };

  const socket = io("ws://localhost:3000");

  onMount(async () => {
    socket.emit("join", room);
    socket.on("joined", handleUserJoined);
    socket.on("offer", handleMessageFromPeer);
    socket.on("answer", handleMessageFromPeer);
    socket.on("candidate", handleMessageCandidate);

    localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    user1.srcObject = localStream;
  });

  let offerCreated = false;
  let answerCreated = false;

  let handleUserJoined = async () => {
    await createOffer();
    offerCreated = true;
  };

  let handleMessageFromPeer = async (payload) => {
    if (payload.offer && payload.offer.type === "offer") {
      if (!localStream) {
        localStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        user1.srcObject = localStream;
      }
      createPeerConnection();
      await peerConnection.setRemoteDescription(payload.offer);
      createAnswer(payload.offer);
      answerCreated = true;
    }
    if (
      payload.answer &&
      payload.answer.type === "answer" &&
      peerConnection &&
      offerCreated
    ) {
      await peerConnection.setRemoteDescription(payload.answer);
    }
  };

  let handleMessageCandidate = async (payload) => {
    if (peerConnection) {
      peerConnection.addIceCandidate(payload.candidate);
    }
  };

  let createPeerConnection = async () => {
    peerConnection = new RTCPeerConnection(servers);

    remoteStream = new MediaStream();
    user2.srcObject = remoteStream;

    if (!localStream) {
      localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      user1.srcObject = localStream;
    }

    localStream.getTracks().forEach((track) => {
      peerConnection.addTrack(track, localStream);
    });

    peerConnection.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        remoteStream.addTrack(track);
      });
    };

    peerConnection.onicecandidate = async (event) => {
      let ice = event.candidate;
      if (event.candidate) {
        socket.emit("candidate", { room, ice });
      }
    };
  };

  let createOffer = async () => {
    await createPeerConnection();
    offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    socket.emit("offer", { room, offer });
    console.log("offer:", offer);
  };

  let createAnswer = async (offer) => {
    await createPeerConnection();
    await peerConnection.setRemoteDescription(offer);
    let answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    socket.emit("answer", { room, answer });
    console.log("answer:", answer);
  };

  let addAnswer = async (answer) => {
    if (!peerConnection.currentRemoteDescription) {
      peerConnection.setRemoteDescription(answer);
    }
  };
</script>

<div class="videos">
  <video
    class="video-player"
    id="user-1"
    autoplay
    playsinline
    bind:this={user1}
  />

  <video
    class="video-player"
    id="user-2"
    autoplay
    playsinline
    bind:this={user2}
  />
  <button>launch camera1</button>
  <button>launch camera2</button>
</div>

<style lang="scss">
  .videos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
  }
  .video-player {
    background-color: darkblue;
    width: 100%;
    height: 300px;
  }
</style>
