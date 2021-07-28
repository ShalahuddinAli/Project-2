const express = require("express");
const axios = require("axios");
require("dotenv").config();

const controller = {
  getCarpark: async (req, res) => {
    let location;
    let availability;

    const requestLocation = axios.get(
      `https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&q={"address":"${req.params.location}"}`
    );

    const requestAvailability = axios.get(
      `https://api.data.gov.sg/v1/transport/carpark-availability`
    );
    try {
      const [data1, data2] = await axios.all([
        requestLocation,
        requestAvailability,
      ]);
      location = data1.data.result.records;
      availability = data2.data.items[0].carpark_data;

      if (location && availability) {
        const result = [];
        for (const item of location) {
          for (const element of availability) {
            if (item.car_park_no === element.carpark_number) {
              // compare both data, then merge into 1 state to render data
              result.push({
                address: item.address,
                availableLots: element.carpark_info[0].lots_available,
                totalLots: element.carpark_info[0].total_lots,
                nonSeasonLot: item.short_term_parking,
                freeParking: item.free_parking,
                xCoord: item.x_coord,
                yCoord: item.y_coord,
              });
            }
          }
        }

        res.json(result);
      }
    } catch (error) {
      res.json({ message: "error" });
    }
  },

  getTrafficCam: async (req, res) => {
    const BASE_URL = "https://api.data.gov.sg/v1/transport/traffic-images";
    

    try {
      const { data } = await axios.get(BASE_URL);

      res.json(data.items[0].cameras);
    } catch (error) {
      res.json({ message: "error" });
    }
  },

  getTrafficNews: async (req, res) => {
    const BASE_URL =
      "http://datamall2.mytransport.sg/ltaodataservice/TrafficIncidents";

    const AccountKey = process.env.API_KEY_DATAMALL;

    try {
      const {data} = await axios.get(BASE_URL, {
        headers: { AccountKey: AccountKey },
      });
      res.json(data.value);
    } catch (error) {
      res.json({ message: "error" });
    }
  },
};

module.exports = controller;
