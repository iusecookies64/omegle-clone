import { useRef, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

let socket;
let videoLocal;
let videoRemote;
let localStream;
let remoteStream;
let peerConnection;
let offer;
let roomId;
let messages;
let setMessages;
const stunConfig = {
    iceServers: [
        {
            urls: [
                "stun:stun1.l.google.com:19302",
                "stun:stun2.l.google.com:19302",
            ],
        },
    ],
};

async function initializeLocalVideo() {
    // setting current user stream to local videoLocal.current
    localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
    });

    if ("srcObject" in videoLocal.current) {
        videoLocal.current.srcObject = localStream;
    } else {
        videoLocal.current.src = window.URL.createObjectURL(localStream);
    }
}

async function createPeerConnection() {
    peerConnection = new RTCPeerConnection(stunConfig);

    if (!localStream) {
        await initializeLocalVideo();
    }

    localStream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, localStream);
    });

    // setting a media stream object to videoRemote.current
    remoteStream = new MediaStream();
    if ("srcObject" in videoRemote.current) {
        videoRemote.current.srcObject = remoteStream;
    } else {
        videoRemote.current.src = window.URL.createObjectURL(remoteStream);
    }

    peerConnection.ontrack = (event) => {
        videoRemote.current.style.display = "block";
        event.streams[0].getTracks().forEach((track) => {
            remoteStream.addTrack(track);
        });
    };

    peerConnection.onicecandidate = (event) => {
        if (roomId && event.candidate) {
            socket.emit("candidate", event.candidate, roomId);
        }
    };
}

async function createOffer() {
    await createPeerConnection();
    offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    socket.emit("offer", offer, roomId);
}

async function createAnswer(peerOffer) {
    await createPeerConnection();
    await peerConnection.setRemoteDescription(peerOffer);
    let answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);

    socket.emit("answer", answer, roomId);
}

function connectSocket() {
    socket = io("https://a2d0-49-204-19-149.ngrok-free.app");

    socket.on("connect", () => {
        console.log("connected to socket");
        // initialize local video
        initializeLocalVideo();
        socket.emit("joinLobby");
    });

    socket.on("joiningRoom", (id) => {
        console.log("joining room with room id", id);
        // clearing previous room messages
        setMessages([]);
        roomId = id;
    });
    // server asks us to initiate an offer
    socket.on("createOffer", () => {
        createOffer();
    });
    socket.on("offer", (offer) => {
        console.log("got offer", offer);
        createAnswer(offer);
    });
    socket.on("candidate", (candidate) => {
        if (peerConnection) {
            peerConnection.addIceCandidate(candidate);
        }
    });
    socket.on("answer", (answer) => {
        if (!peerConnection.currentRemoteDescription) {
            peerConnection.setRemoteDescription(answer);
        }
    });

    // fired when user reloads or closes the tab
    window.addEventListener("beforeunload", () => {
        if (socket) {
            socket.emit("leaveLobby", roomId);
        }
    });

    socket.on("peerLeaving", () => {
        // setting remote video display to none
        videoRemote.current.style.display = "none";
        peerConnection.close();
        roomId = null;
        // when partner leaves we again join lobby
        socket.emit("joinLobby");
    });

    socket.on("strangerMessage", (content) => {
        setMessages((prevMessages) => {
            return [
                ...prevMessages,
                {
                    content,
                    userMessage: false,
                    id: Math.floor(Math.random() * 100000),
                },
            ];
        });
    });
}

function App() {
    const [lobby, setLobby] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    [messages, setMessages] = useState([]);
    videoLocal = useRef();
    videoRemote = useRef();
    const inputRef = useRef();

    window.addEventListener("resize", () => setWidth(window.innerWidth));

    function sendMessage() {
        const content = inputRef.current.value;
        inputRef.current.value = "";
        if (!content) return;
        socket.emit("message", roomId, content);
        setMessages((prevMessages) => {
            return [
                ...prevMessages,
                {
                    content,
                    userMessage: true,
                    id: Math.floor(Math.random() * 100000),
                },
            ];
        });
    }

    function toggleLobby() {
        if (lobby) {
            socket.emit("leaveLobby", roomId);
            socket.disconnect();
            peerConnection.close();
            videoRemote.current.style.display = "none";
            socket = null;
            peerConnection = null;
            setLobby(false);
        } else {
            connectSocket();
            setLobby(true);
        }
    }

    function nextRoom() {
        if (!lobby) return;
        if (!socket) return;
        socket.emit("nextRoom", roomId);
        peerConnection.close();

        // setting remote video display none
        videoRemote.current.style.display = "none";

        // joining lobby again
        socket.emit("joinLobby");
    }

    return (
        <div className="app">
            <div className="header card">Omegle Clone</div>
            <div className="main-section">
                <div className="video-chat">
                    <div className="video-container">
                        <video
                            ref={videoRemote}
                            className="video-player"
                            id="user-2"
                            autoPlay
                            playsInline
                            style={{ display: "none" }}
                        ></video>
                    </div>
                    <div className="video-container">
                        <video
                            ref={videoLocal}
                            className="video-player"
                            id="user-1"
                            autoPlay
                            playsInline
                        ></video>
                    </div>
                </div>
                {width < 750 ? null : (
                    <div className="text-chat card">
                        <div className="messages">
                            <div>You are now talking to strangers.</div>
                            {messages.map((message) => {
                                if (!message.userMessage) {
                                    return (
                                        <div key={message.id}>
                                            <span className="stranger-text">
                                                Stranger:{" "}
                                            </span>
                                            {message.content}
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div key={message.id}>
                                            <span className="your-text">
                                                You:{" "}
                                            </span>
                                            {message.content}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <div className="text-input">
                            <div
                                className="button"
                                style={{ marginRight: "0.5rem" }}
                                onClick={toggleLobby}
                            >
                                {lobby ? "Stop" : "Start"}
                            </div>
                            <div
                                className="button"
                                style={{
                                    marginRight: "0.5rem",
                                    backgroundColor: "#90EE90",
                                }}
                                onClick={nextRoom}
                            >
                                Next
                            </div>
                            <textarea
                                ref={inputRef}
                                type="text"
                                placeholder="Type Something"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        sendMessage();
                                    }
                                }}
                            />
                            <div className="button" onClick={sendMessage}>
                                Send
                            </div>
                        </div>
                    </div>
                )}
                {width >= 750 ? null : (
                    <div className="hovering-panel">
                        <div
                            className="button"
                            style={{ marginRight: "0.5rem" }}
                            onClick={toggleLobby}
                        >
                            {lobby ? "Stop" : "Start"}
                        </div>
                        <div
                            className="button"
                            style={{
                                backgroundColor: "#90EE90",
                            }}
                            onClick={nextRoom}
                        >
                            Next
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
