import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TrafficCard from "../components/TrafficCard";
import CamLocation from "../CameraLocation";
import CheckBoxes from "../components/CheckBoxes";

const TrafficCam = () => {
  const [trafficImg, setTrafficImg] = useState([]);
  const [resultImg, setResultImg] = useState([]);

  // console.log("api", trafficImg);
  // console.log("data", CamLocation);
  useEffect(() => {
    const camImageUrl = "http://localhost:4444/proxyServer/traffic_cam";

    axios.get(camImageUrl).then((res) => {
      console.log(res.data);
      setTrafficImg(res.data);
    });
  }, []);

  const area = {}; //  to create an object with boolean values
  for (const element of CamLocation) {
    area[element.area] = false;
  }

  const result = []; // to segregate the key with "true" value into a single array
  const [check, setCheck] = useState(area);

  for (const element of Object.keys(check)) {
    if (check[element] === true) {
      result.push(element);
    }
  }

  const handleChange = (event) => {
    setCheck({ ...check, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    //match the key with "true" value with the data.
    if (check) {
      const resultAtLast = [];
      for (const element of result) {
        for (const item of CamLocation) {
          if (element === item.area) {
            resultAtLast.push(item);
          }
        }
      }
      setResultImg(resultAtLast);
    }
  }, [check]);

  // const selector = {}
  // if (resultImg) {
  // 	trafficImg.map((element) =>
  // 		resultImg.map((item) => {
  // 			if (element.camera_id === item.camera_id)
  // 				return {
  // 					camera_id: element.camera_id,
  // 					image: element.image,
  // 					location: element.location,
  // 					camera_id: element.camera_id,
  // 					location2: item.location,
  // 					area: item.area,
  // 				};
  // 		})
  // 	);
  // }

  return (
    <div>
      <Container justify="center">
        <Box display="flex" justifyContent="center">
          <Typography variant="h3">Traffic Cameras</Typography>
        </Box>
        <CheckBoxes area={area} check={check} handleChange={handleChange} />

        <Grid container>
          {trafficImg &&
            // selector.map((element) => {
            // 	return (
            // 		<Grid item key={element.camera_id}>
            // 			<TrafficCard
            // 				img={element.image}
            // 				location={element.location}
            // 				id={element.camera_id}
            // 				road={element.location2}
            // 				cluster={element.area}
            // 			/>
            // 		</Grid>
            // 	);
            // })
            trafficImg.map((element) =>
              resultImg.map((item) => {
                if (element.camera_id === item.camera_id)
                  return (
                    <Grid item key={element.camera_id}>
                      <TrafficCard
                        img={element.image}
                        location={element.location}
                        id={element.camera_id}
                        road={item.location}
                        cluster={item.area}
                      />
                    </Grid>
                  );
              })
            )}
        </Grid>
      </Container>
    </div>
  );
};

export default TrafficCam;
