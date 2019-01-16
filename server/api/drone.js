const router = require("express").Router();
const fs = require("fs");
const arDrone = require("ar-drone");
const ffmpeg = require("ffmpeg");
const client = arDrone.createClient();
client.createRepl();
require('ar-drone-png-stream')(client, {port: 4000 })

const time = time => {
  setTimeout(async () => {
    await client.stop();
  }, time);
};

let numVid = 0;
try {
  new ffmpeg(
    `/Users/tomsstuff/Class/drone/drone/movie_${++numVid}.mp4`,
    (err, video) => {
      if (!err) {
        console.log("The video is ready to be processed");
        // console.log("data", video.metadata);
        // console.log("config", video.info_configuration);
      } else {
        console.log("Error: ", err);
      }
    }
  );
} catch (err) {
  console.log("code", err.code);
  console.log("msg", err.msg);
}

// router.get("/streaming", (req, res, next) => {
//     let png = null;

//     if (!png) {
//       png = client.getPngStream();
//       png.on("error", function(err) {
//         console.error("png stream ERROR: " + err);
//       });
//     }

//     // res.writeHead(200, { 'Content-Type': 'multipart/x-mixed-replace; boundary=--daboundary' });
//     png.on("data", sendPng);

//     function sendPng(buffer) {
//       console.log(buffer.length);
//       // res.write(
//       //   "--daboundary\nContent-Type: image/png\nContent-length: " +
//       //     buffer.length +
//       //     "\n\n"
//       // );
//       // res.write(buffer);
//       res.end(new Buffer.from(buffer))
//     }
// });


router.get("/flight1", (req, res, next) => {
  client
     .after(2000, async () => {
       await client.clockwise(0.5)
     })
     .after(2000, async () => {
       await client.right(0.1)
     })
     .after(2000, async () => {
       await client.stop()
       await client.land()
     })
  res.json("flight one executing");
});

router.get("/takeoff", async (req, res, next) => {
  await client.ftrim();
  await client.calibrate();
  await client.takeoff();
  res.json("taking off");
});

router.get('/frontCameraView', (req,res,next) => {
  client.config('video:video_channel', 0)
  res.json('front')
})

router.get('/bottomCameraView', (req,res,next) => {
  client.config('video:video_channel', 3)
  res.json('bottom')
})
const arr = ['blinkGreenRed', 'blinkGreen', 'blinkRed', 'blinkOrange', 'snakeGreenRed',
'fire', 'standard', 'red', 'green', 'redSnake', 'blank', 'rightMissile',
'leftMissile', 'doubleMissile', 'frontLeftGreenOthersRed',
'frontRightGreenOthersRed', 'rearRightGreenOthersRed',
'rearLeftGreenOthersRed', 'leftGreenRightRed', 'leftRedRightGreen',
'blinkStandard']

router.get('/LED', (req,res,next) => {
  const number = Math.floor(Math.random() * Math.floor(arr.length-1))
  client.animateLeds(arr[number], 5, 2)
  res.json('led show')
})

router.get("/land", async (req, res, next) => {
  time(2000);
  await client.land();
  res.json("landing");
});
router.get('/dance', (req,res,next) => {
  client.animate('vzDance', 4000)
  res.json('dancing')
})

router.get("/battery", (req, res, next) => {
  const batt = client.battery();
  console.log("battery", batt);
  res.json(client.battery());
});

router.get("/navData", (req, res, next) => {
  const data = client.on("navdata", console.log);
  console.log("data", data.demo);
});
router.get("/up", async (req, res) => {
  await client.up(0.7);
  time(1000);
  res.send("down");
});
router.get("/down", async (req, res) => {
  await client.down(0.7);
  time(1000);
  res.send("down");
});
router.get("/calibrate", (req, res) => {
  client.calibrate(0);
  res.send("calibrating");
});
router.get("/pitchForward", async (req, res) => {
  await client.front(0.5);
  time(2000);
  res.send("pitching forward");
});
router.get("/pitchBack", async (req, res) => {
  await client.back(0.5);
  time(2000);
  res.send("pitching back");
});
router.get("/stop", (req, res) => {
  client.stop();
  res.send("stopping");
});
router.get("/leftYaw", async (req, res) => {
  await client.counterClockwise(0.2);
  time(1000);
  res.send("yawing left");
});
router.get("/rightYaw", async (req, res) => {
  await client.clockwise(0.2);
  time(1000);
  res.send("right yaw");
});
router.get("/leftRoll", async (req, res) => {
  await client.left(0.2);
  time(1000);
  res.send("rolling left");
});
router.get("/rightRoll", async (req, res) => {
  await client.right(0.2);
  time(1000);
  res.send("rolling right");
});
router.get("/disableEmergency", (req, res) => {
  client.disableEmergency();
  res.send("emergency over");
});

module.exports = router;
