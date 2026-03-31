import mqtt from "mqtt";
import { MQTT_URL } from "./mqttConfig.js";

const client = mqtt.connect(MQTT_URL);

client.on("connect", () => {
  console.log("SUB QoS2: conectado");
  client.subscribe("aula/qos", { qos: 2 });
});

client.on("message", (topic, msg) => {
  console.log("SUB QoS2 recebeu:", msg.toString());
});
