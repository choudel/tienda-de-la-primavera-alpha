<script>
  import { onMount } from "svelte";
  import { io } from "socket.io-client";

  let localStream;
  let remoteStream;
  let peerConnection;
  let user1;
  let user2;

  const room = "myroom";

  const servers = {
    iceServers: [
      {
        urls: [
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
          "stun:stun3.l.google.com:19302",
          "stun:stun4.l.google.com:19302",
          "stun:s2.taraba.net:3478",
          "stun:stun.12connect.com:3478",
          "stun:stun.12voip.com:3478",
          "stun:stun.1und1.de:3478",
          "stun:stun.2talk.co.nz:3478",
          "stun:stun.2talk.com:3478",
          "stun:stun.3clogic.com:3478",
          "stun:stun.actionvoip.com:3478",
          "stun:stun.altar.com.pl:3478",
        ],
      },
    ],
  };

  const socket = io("ws://localhost:3000");

  onMount(async () => {
    socket.emit("join", room);
    socket.on("offer", handleOffer);
    socket.on("answer", handleAnswer);
    socket.on("candidate", handleCandidate);

    localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    user1.srcObject = localStream;
    await createPeerConnection();
  });

  async function createPeerConnection() {
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

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("candidate", { room, candidate: event.candidate });
      }
    };

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    socket.emit("offer", { room, offer });
  }

  async function handleOffer(payload) {
    await peerConnection.setRemoteDescription(payload);
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    socket.emit("answer", { room, answer });
  }

  async function handleAnswer(payload) {
    await peerConnection.setRemoteDescription(payload);
  }

  async function handleCandidate(payload) {
    if (peerConnection) {
      await peerConnection.addIceCandidate(payload);
    }
  }
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
