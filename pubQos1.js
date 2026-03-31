import mqtt from "mqtt";
import { MQTT_URL } from "./mqttConfig.js";

const client = mqtt.connect(MQTT_URL);

client.on("connect", () => {
  console.log("PUB QoS1: conectado");
  let i = 0;

  const t = setInterval(() => {
    client.publish("aula/qos", `msg ${i} (QoS1)`, { qos: 1 });
    console.log("PUB QoS1 enviou:", i);
    i++;

    if (i === 10) {
      clearInterval(t);
      client.end();
    }
  }, 500);
});
