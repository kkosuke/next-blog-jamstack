// libs/client.js
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "w24sb5910p",
  apiKey: process.env.MICROCMS_API_KEY,
});
